using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using DiscoverSlopes.Data;
using DiscoverSlopes.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;


namespace DiscoverSlopes.Controllers
{
    public class UserController : Controller
    {
        protected UserManager<ApplicationUser> mUserManager;
        protected ApplicationDbContext mContext;
        protected SignInManager<ApplicationUser> mSignInManager;

        public UserController(ApplicationDbContext context, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
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

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> CreateUserAsync(string emailAddress, string password)
        {


            IdentityResult result = null;
            ApplicationUser user = new ApplicationUser();
            try
            {
                result = await mUserManager.CreateAsync(new ApplicationUser
                {
                    UserName = emailAddress,
                    Email = emailAddress
                }, password);

                if (result.Succeeded)
                {
                    return Json(new { success = true });
                }
            }
            catch (Exception ex)
            {
                string exception = ex.ToString();
            }
            return Json(new { success = false, responseText = result.Errors.FirstOrDefault().Description });
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LoginAsync(string username, string password)
        {

            await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);

            // Sign user in with the valid credentials
            var result = await mSignInManager.PasswordSignInAsync(username, password, true, false);


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
    }
}