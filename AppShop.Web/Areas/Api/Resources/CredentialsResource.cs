using System.ComponentModel.DataAnnotations;

namespace AppShop.Web.Api.Resources
{
    public class CredentialsResource
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
    }
}