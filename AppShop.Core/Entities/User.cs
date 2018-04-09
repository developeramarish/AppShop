using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace AppShop.Core.Entities
{
    public class User : IdentityUser<int>
    {
        [Required]
        [StringLength(255)]
        public string FirstName { get; set; }
        
        [Required]
        [StringLength(255)]
        public string LastName { get; set; }
    }
}