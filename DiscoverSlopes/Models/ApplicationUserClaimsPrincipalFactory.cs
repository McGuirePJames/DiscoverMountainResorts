using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace DiscoverSlopes.Models
{
    public class ApplicationUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser, IdentityRole>
    {
        public ApplicationUserClaimsPrincipalFactory(
    UserManager<ApplicationUser> userManager,
    RoleManager<IdentityRole> roleManager,
    IOptions<IdentityOptions> optionsAccessor)
    : base(userManager, roleManager, optionsAccessor)
        {
        }

        //protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user)
        //{
        //    var identity = await base.GenerateClaimsAsync(user);
        //    identity.AddClaim(new Claim("EmailIdentifier", user.Email));
        //    return identity;
        //}
        public async override Task<ClaimsPrincipal> CreateAsync(ApplicationUser user)
        {
            var principal = await base.CreateAsync(user);

            if (!string.IsNullOrWhiteSpace(user.Email))
            {
                ((ClaimsIdentity)principal.Identity).AddClaims(new[] {
                    new Claim(ClaimTypes.Email, user.Email)
                });
            }
            return principal;
        }
    }
}
