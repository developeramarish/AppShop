using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Interfaces;
using AppShop.Infrastructure;
using Autofac;
using Autofac.Extensions.DependencyInjection;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace AppShop.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            // DB Context
            services.AddDbContext<AppShopDbContext>(options => 
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"))
            );

            // JWT authentication
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
                options.RequireHttpsMetadata = false;
                options.SaveToken = true;
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = Configuration["Jwt:Issuer"],
                    ValidAudience = Configuration["Jwt:Issuer"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"])),
                    ClockSkew = TimeSpan.Zero
                };
            });

            // Identity
            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<AppShopDbContext>()
                .AddDefaultTokenProviders();

            // AutoMapper
            services.AddAutoMapper();

            // Unit of Work
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            
            // MVC
            services.AddMvc();

            // Autofac
            var builder = new ContainerBuilder();

            // - scanning for all Repositories
            builder.RegisterAssemblyTypes(AppDomain.CurrentDomain.GetAssemblies())
                .Where(t => t.Name.EndsWith("Repository"))
                .AsImplementedInterfaces();

            // - load default services
            builder.Populate(services);

            var container = builder.Build();

            return container.ResolveOptional<IServiceProvider>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                // Api
                routes.MapRoute("api", "api/{controller}/{action=Index}/{id?}", new { area = "Api" });
                // ManageApp
                routes.MapRoute("admin", "admin/{*url}", new { controller = "Home", action = "Index" });
                routes.MapRoute("login", "login", new { controller = "Home", action = "Index" });
                // Client
                routes.MapRoute("client", "{controller=Home}/{action=Index}/{id?}", new { area = "Client" });
            });
        }
    }
}
