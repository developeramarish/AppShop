using System;
using System.IO;
using AppShop.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace AppShop.Web
{
    public class DbContextFactory : IDesignTimeDbContextFactory<AppShopDbContext>
    {
        public AppShopDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var builder = new DbContextOptionsBuilder<AppShopDbContext>();
            builder.UseSqlServer(configuration.GetConnectionString("DefaultConnection"));

            return new AppShopDbContext(builder.Options);
        }
    }
}