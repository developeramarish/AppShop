using Microsoft.AspNetCore.Mvc;

namespace AppShop.Web.Client.Controllers
{
    [Area("Client")]
    public class ProductController : Controller
    {
        public IActionResult Detail(int id)
        {
            return View();
        }
    }
}