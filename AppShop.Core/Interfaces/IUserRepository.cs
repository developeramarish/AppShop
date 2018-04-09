using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Queries;

namespace AppShop.Core.Interfaces
{
    public interface IUserRepository
    {
        Task<User> FindByNameAndPasswordAsync(string userName, string password);
        Task<bool> IsAdministrator(User user);
    }
}