using System.Threading.Tasks;
using AppShop.Core.Entities;
using AppShop.Core.Queries;

namespace AppShop.Core.Interfaces
{
    public interface IProductRepository
    {
        Task<QueryResult<Product>> GetAll(IQuery queryObject);
        Task<Product> GetById(int id);
        void Add(Product product);
        void Remove(Product product);
    }
}