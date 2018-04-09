using System.Threading.Tasks;

namespace AppShop.Core.Interfaces
{
    public interface IUnitOfWork
    {
        Task CompleteAsync();
    }
}