using System.ComponentModel.DataAnnotations;
using AppShop.Core.Interfaces;

namespace AppShop.Web.Api.Resources
{
    public class ProductResource : IEntityResource
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Url { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
    }
}