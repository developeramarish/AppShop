using System.ComponentModel.DataAnnotations;
using AppShop.Core.Interfaces;

namespace AppShop.Core.Entities
{
    public class Product : IEntity
    {
        public int Id { get; set; }
        [Required]
        [StringLength(255)]
        public string Name { get; set; }
        [Required]
        [StringLength(255)]
        public string Url { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public bool Status { get; set; }
        public Photo Photo { get; set; }
        public int? PhotoId { get; set; }
    }
}