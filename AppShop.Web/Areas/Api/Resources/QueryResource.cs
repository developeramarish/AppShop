namespace AppShop.Web.Api.Resources
{
    public class QueryResource
    {
        public string SortBy { get; set; }
        public bool IsSortAscending { get; set; }
        public int Page { get; set; }   
        public int Limit { get; set; }
    }
}