using Microsoft.AspNetCore.Identity;

namespace AppShop.Core.Entities
{
    public class Role : IdentityRole<int>
    {
        public Role(): base()
        {
        }

        public Role(string roleName): base(roleName)
        {
        }
    }
}