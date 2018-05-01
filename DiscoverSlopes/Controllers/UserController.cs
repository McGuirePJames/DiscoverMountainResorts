using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using DiscoverSlopes.Data;
using DiscoverSlopes.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace DiscoverSlopes.Controllers
{
    public class UserController : Controller
    {
        protected UserManager<ApplicationUser> mUserManager;
        protected ApplicationDbContext mContext;
        protected SignInManager<ApplicationUser> mSignInManager;


        public UserController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IHttpContextAccessor httpContextAccessor)
        {
            mContext = context;
            mUserManager = userManager;
            mSignInManager = signInManager;


        }
        [AllowAnonymous]
        public IActionResult Login()
        {
            return View();
        }
        [AllowAnonymous]
        public IActionResult ForgotPassword()
        {
            return View();
        }
        [AllowAnonymous]
        public IActionResult ResetPassword()
        {
            return View();
        }
        [AllowAnonymous]
        public IActionResult SignUp()
        {
            return View();
        }

		[HttpGet]
		[ValidateAntiForgeryToken]
		[Authorize]
		public async Task<IActionResult> GetCurrentUser()
		{
			ClaimsPrincipal userClaims = HttpContext.User;
			ApplicationUser applicationUser = await mUserManager.GetUserAsync(userClaims);
			return Json( new { success = true, responseText = applicationUser });
		}
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> CreateUserAsync(string emailAddress, string password)
        {
            IdentityResult result = null;
            try
            {
                ApplicationUser user = new ApplicationUser
                {
                    UserName = emailAddress,
                    Email = emailAddress
                };
                result = await mUserManager.CreateAsync(user, password);

                if (result.Succeeded)
                {
                    IdentityUser newUser = await mUserManager.FindByEmailAsync(emailAddress);

                    return Json(new { success = true });
                }
            }
            catch (Exception ex)
            {
                string exception = ex.ToString();
            }
            return Json(new { success = false, responseText = result.Errors.FirstOrDefault().Description });
        }
        public async Task<IActionResult> UserTest()
        {
			var claim = User.FindFirst("EmailIdentifier").Value;
            return Content("");
        }
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginAsync(string username, string password)
        {

            //await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);

            // Sign user in with the valid credentials
            ApplicationUser user = new ApplicationUser();

            var result = await mSignInManager.PasswordSignInAsync(
                username, password,
                isPersistent: false, lockoutOnFailure: false);

            //await mUserManager.GetClaimsAsync(User);
            if (result.Succeeded)
            {
                return Json(new { success = true });
            }
            if (result.RequiresTwoFactor)
            {
                return Json(new { success = false, responseText = "Requires Two Factor Authentication" });

            }
            if (result.IsNotAllowed)
            {
                return Json(new { success = false, responseText = "Not allowed" });
            }
            if (result.IsLockedOut)
            {
                return Json(new { success = false, responseText = "Account is locked out" });
            }
            else
            {
                return Json(new { success = false, responseText = "Invalid again attempt" });
            }
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SignOutAsync()
        {
            await mSignInManager.SignOutAsync();
			return Json(new { success = true });
        }
        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        public async Task AuthorizeCurrentUser()
        {
            var user = HttpContext.User;
			var userAgain = await mUserManager.GetUserAsync(user);
        }

	}
}