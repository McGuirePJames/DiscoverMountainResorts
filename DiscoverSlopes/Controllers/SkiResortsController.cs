using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DiscoverSlopes.Controllers
{
    public class SkiResortsController : Controller
    {
        [HttpGet]
		[AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> GetSkiResorts()
        {
            List<DiscoverSlopes.Models.SkiResorts> skiResorts = await DiscoverSlopes.Models.SkiResorts.GetSkiResorts();
            return Json(skiResorts);
        }
		[HttpGet]
		[AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task<IActionResult> GetSkiResortById(int id)
		{
			DiscoverSlopes.Models.SkiResorts skiResorts = await DiscoverSlopes.Models.SkiResorts.GetSkiResortById(id);
			return Json(skiResorts);
		}

		[AllowAnonymous]
		public IActionResult Explore(int skiResortId)
		{
			//Controller
			return View();
		}
    }
}