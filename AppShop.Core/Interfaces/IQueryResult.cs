using System.Collections.Generic;

namespace AppShop.Core.Interfaces
{
    public interface IQueryResult<T> where T : IEntity
    {
        int TotalItems { get; set; }
        IEnumerable<T> Items { get; set; }
    }
}