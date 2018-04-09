using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using AppShop.Core.Interfaces;

namespace AppShop.Core.Entities
{
    [Table("Photos")]
    public class Photo : IEntity
    {
        public int Id { get; set; }        
        [Required]
        [StringLength(255)]
        public string FileName { get; set; }
    }
}