using Microsoft.AspNetCore.Mvc;

namespace AppShop.Web.Client.Controllers
{
    [Area("Client")]
    public class OrderController : Controller
    {
        public IActionResult Index(){
            return View();
        }

        public IActionResult Empty(){
            return View();
        }

        public IActionResult Success(){
            return View();
        }
    }
}