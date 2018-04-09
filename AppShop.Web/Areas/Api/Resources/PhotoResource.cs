using System.ComponentModel.DataAnnotations;
using AppShop.Core.Interfaces;

namespace AppShop.Web.Api.Resources
{
    public class PhotoResource : IEntityResource
    {
        public int Id { get; set; }        
        [Required]
        public string FileName { get; set; }
    }
}