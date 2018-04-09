using AppShop.Core.Interfaces;

namespace AppShop.Core.Queries
{
    public class Query : IQuery
    {
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }   
        public int Limit { get; set; }
    }
}