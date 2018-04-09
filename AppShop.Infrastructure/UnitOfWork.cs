using System.Threading.Tasks;
using AppShop.Core.Interfaces;

namespace AppShop.Infrastructure
{
    public class UnitOfWork : IUnitOfWork 
    {
        private readonly AppShopDbContext _dbContext;

        public UnitOfWork (AppShopDbContext dbContext) {
            this._dbContext = dbContext;
        }

        public async Task CompleteAsync () {
            await _dbContext.SaveChangesAsync();
        }
    }
}