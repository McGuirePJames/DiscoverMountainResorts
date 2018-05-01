using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using DiscoverSlopes.Helpers;
using DiscoverSlopes.Auth;
using DiscoverSlopes.Models;
using Microsoft.Extensions.Options;
using DiscoverSlopes.ViewModels;
using Newtonsoft.Json;

namespace DiscoverSlopes.Controllers
{
	[Route("api/[controller]")]
	public class AuthController : Controller
	{
		private readonly UserManager<DiscoverSlopes.Models.ApplicationUser> _userManager;
		private readonly IJwtFactory _jwtFactory;
		private readonly JwtIssuerOptions _jwtOptions;

		public AuthController(UserManager<DiscoverSlopes.Models.ApplicationUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
		{
			_userManager = userManager;
			_jwtFactory = jwtFactory;
			_jwtOptions = jwtOptions.Value;
		}

		// POST api/auth/login
		//[HttpPost("login")]
		[HttpPost]
		[Route("api/values")]

		//public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
		public async Task<IActionResult> Post([FromBody]string emailAddress)
		{
			string password = "";
			//string emailAddress = "";
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var identity = await GetClaimsIdentity(emailAddress, password);
			if (identity == null)
			{
				return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid username or password.", ModelState));
			}

			var jwt = await Tokens.GenerateJwt(identity, _jwtFactory, emailAddress, _jwtOptions, new JsonSerializerSettings { Formatting = Formatting.Indented });
			return new OkObjectResult(jwt);
		}

		private async Task<ClaimsIdentity> GetClaimsIdentity(string userName, string password)
		{
			if (string.IsNullOrEmpty(userName) || string.IsNullOrEmpty(password))
				return await Task.FromResult<ClaimsIdentity>(null);

			// get the user to verifty
			var userToVerify = await _userManager.FindByNameAsync(userName);

			if (userToVerify == null) return await Task.FromResult<ClaimsIdentity>(null);

			// check the credentials
			if (await _userManager.CheckPasswordAsync(userToVerify, password))
			{
				return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(userName, userToVerify.Id));
			}

			// Credentials are invalid, or account doesn't exist
			return await Task.FromResult<ClaimsIdentity>(null);
		}
	}
}