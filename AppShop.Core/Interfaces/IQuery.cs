namespace AppShop.Core.Interfaces
{
    public interface IQuery
    {
        string SortBy { get; set; }
        bool IsSortAscending { get; set; }
        int Page { get; set; }
        int Limit { get; set; }
    }
}