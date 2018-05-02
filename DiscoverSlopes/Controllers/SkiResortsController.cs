﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace DiscoverSlopes.Controllers
{
    public class SkiResortsController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> GetSkiResorts()
        {
            List<DiscoverSlopes.Models.SkiResorts> skiResorts = await DiscoverSlopes.Models.SkiResorts.GetSkiResorts();
            return Json(skiResorts);
        }
		public IActionResult Explore(int skiResortId)
		{
			return View();
		}
    }
}