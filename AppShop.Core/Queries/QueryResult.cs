using System.Collections.Generic;
using AppShop.Core.Interfaces;

namespace AppShop.Core.Queries
{
    public class QueryResult<T> : IQueryResult<T> where T : IEntity
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}