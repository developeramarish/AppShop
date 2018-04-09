using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Interfaces;
using AppShop.Core.Queries;

namespace AppShop.Infrastructure.Repositories
{
    public class ProductRepository : BaseRepository<Product>, IProductRepository
    {
        public ProductRepository(AppShopDbContext dbContext) : base(dbContext)
        {
            OrderableColumns.Add("name", p => p.Name);
            OrderableColumns.Add("price", p => p.Price);
            OrderableColumns.Add("status", p => p.Status);
        }
    }
}