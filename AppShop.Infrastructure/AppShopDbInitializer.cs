using System.Linq;
using System.Threading.Tasks;
using AppShop.Core.Entities;
using Microsoft.AspNetCore.Identity;

namespace AppShop.Infrastructure 
{
    public class AppShopDbInitializer
    {
        public static async Task Initialize(AppShopDbContext context, RoleManager<Role> roleManager, UserManager<User> userManager)
        {
            context.Database.EnsureCreated();

            if (!context.Roles.Any())
            {
                // Seed role
                var role = new Role("administrator");
                await roleManager.CreateAsync(role);
            }

            if (!context.Users.Any())
            {
               // Seed user
               var user = new User(){
                   FirstName = "Jaromír",
                   LastName = "Roth",
                   Email = "info@appshop.com",
                   UserName = "info@appshop.com"
               };
               var password = "Appshop-2018";

               await userManager.CreateAsync(user, password);
               await userManager.AddToRoleAsync(user, "administrator");
            }
        }
    }
}