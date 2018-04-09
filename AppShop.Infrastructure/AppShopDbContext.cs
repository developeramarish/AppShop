using AppShop.Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AppShop.Infrastructure {
    public class AppShopDbContext : IdentityDbContext<User, Role, int> {

        public DbSet<Product> Products { get; set; }
        public new DbSet<User> Users { get; set; }

        public AppShopDbContext (DbContextOptions<AppShopDbContext> options) : base (options) {}

        protected override void OnModelCreating (ModelBuilder builder) {
            base.OnModelCreating(builder);
            
            builder.Entity<User>().ToTable("Users");
            builder.Entity<Role>().ToTable("Roles");
            builder.Entity<IdentityUserRole<int>>().ToTable("UserRoles");
            builder.Entity<IdentityUserLogin<int>>().ToTable("UserLogins");
            builder.Entity<IdentityUserClaim<int>>().ToTable("UserClaims");
            builder.Entity<IdentityRoleClaim<int>>().ToTable("RoleClaims");
            builder.Entity<IdentityUserToken<int>>().ToTable("UserTokens");

        }
    }
}