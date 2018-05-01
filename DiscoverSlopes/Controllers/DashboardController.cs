
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using DiscoverSlopes.Data;
using DiscoverSlopes.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
 

namespace DiscoverSlopesWebApiAuth.Controllers
{

  [Route("api/[controller]/[action]")]
  public class DashboardController : Controller
  {
    private readonly ClaimsPrincipal _caller;
    private readonly ApplicationDbContext _appDbContext;

    public DashboardController(UserManager<DiscoverSlopes.Models.ApplicationUser> userManager, ApplicationDbContext appDbContext, IHttpContextAccessor httpContextAccessor)
    {
      _caller = httpContextAccessor.HttpContext.User;
      _appDbContext = appDbContext;
    }

    // GET api/dashboard/home
    [HttpGet]
    public async Task<IActionResult> Home()
    {
      // retrieve the user info
      //HttpContext.User
      var userId = _caller.Claims.Single(c => c.Type == "id");
			//var customer = await _appDbContext.Customers.Include(c => c.Identity).SingleAsync(c => c.Identity.Id == userId.Value);

			//return new OkObjectResult(new
			//{
			//  Message = "This is secure API and user data!",
			//  customer.Identity.FirstName,
			//  customer.Identity.LastName,
			//  customer.Identity.PictureUrl,
			//  customer.Identity.FacebookId,
			//  customer.Location,
			//  customer.Locale,
			//  customer.Gender
			//});
			return Content("");
    }
  }
}
