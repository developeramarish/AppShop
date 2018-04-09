using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace AppShop.Infrastructure.Repositories 
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<User> _userManager;

        public UserRepository (UserManager<User> userManager) 
        {
            _userManager = userManager;
        }

        public async Task<User> FindByNameAndPasswordAsync(string userName, string password)
        {
            var user = await _userManager.FindByNameAsync(userName);

            if(user != null && await _userManager.CheckPasswordAsync(user, password))
                return user;
            
            return null;
        }

        public async Task<bool> IsAdministrator(User user)
        {
            return await _userManager.IsInRoleAsync(user, "administrator");
        }
    }
}