using System.Collections.Generic;
using AppShop.Core.Interfaces;

namespace AppShop.Web.Api.Resources
{
    public class QueryResultResource<T> where T : IEntityResource
    {
        public int TotalItems { get; set; }
        public IEnumerable<T> Items { get; set; }
    }
}