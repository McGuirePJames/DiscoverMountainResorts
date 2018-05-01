using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using AutoMapper.Mappers;
using System;
using Microsoft.EntityFrameworkCore.Design;
using System.IO;
using Microsoft.Extensions.Configuration.UserSecrets;
using Microsoft.AspNetCore.Identity;
using DiscoverSlopes.Models;
using DiscoverSlopes.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace CoreWebApplication
{
    public class Startup
    {
        private const string SecretKey = "iNivDmHLpUA223sqsfhqGbMRdRj1PVkH"; // todo: get this from somewhere secure
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));
        public Startup(IHostingEnvironment env)
        {
            AutoMapper.Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<DiscoverSlopes.Models.SkiResorts, DiscoverSlopes.Domain.SkiResorts>();
            });
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(option =>
                option.UseSqlServer(connectionString: Configuration.GetConnectionString("DiscoverMountainResortsProdDB")));

            services.TryAddSingleton<Microsoft.AspNetCore.Http.IHttpContextAccessor, HttpContextAccessor>();

			services.AddScoped<IUserClaimsPrincipalFactory<ApplicationUser>, ApplicationUserClaimsPrincipalFactory>();

            services.AddMvc();

            //services.AddIdentity<DiscoverSlopes.Models.ApplicationUser, IdentityRole>()
            //    .AddEntityFrameworkStores<ApplicationDbContext>()
            //    .AddDefaultTokenProviders();

			////JWT BEGIN
			//services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
			//		.AddJwtBearer(options =>
			//		{
			//			options.TokenValidationParameters = new TokenValidationParameters
			//			{
			//				ValidateIssuer = true,
			//				ValidateAudience = true,
			//				ValidateLifetime = true,
			//				ValidateIssuerSigningKey = true,
			//				ValidIssuer = Configuration["Jwt:Issuer"],
			//				ValidAudience = Configuration["Jwt:Issuer"],
			//				IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
			//			};
			//		});

			//services.AddCors(options =>
			//{
			//	options.AddPolicy("CorsPolicy",
			//		builder => builder.AllowAnyOrigin()
			//		  .AllowAnyMethod()
			//		  .AllowAnyHeader()
			//		  .AllowCredentials()
			//	.Build());
			//});

			////JWT END

			services.AddIdentity<ApplicationUser, IdentityRole>()
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();

			services.Configure<IdentityOptions>(options =>
			{
				// Password settings
				options.Password.RequireDigit = true;
				options.Password.RequiredLength = 8;
				options.Password.RequireNonAlphanumeric = false;
				options.Password.RequireUppercase = true;
				options.Password.RequireLowercase = false;
				options.Password.RequiredUniqueChars = 6;

				// Lockout settings
				options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(30);
				options.Lockout.MaxFailedAccessAttempts = 10;
				options.Lockout.AllowedForNewUsers = true;

				// User settings
				options.User.RequireUniqueEmail = true;
			});

			services.ConfigureApplicationCookie(options =>
			{
				// Cookie settings
				options.Cookie.HttpOnly = true;
				options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
				// If the LoginPath isn't set, ASP.NET Core defaults 
				// the path to /Account/Login.
				options.LoginPath = "/Account/Login";
				// If the AccessDeniedPath isn't set, ASP.NET Core defaults 
				// the path to /Account/AccessDenied.
				options.AccessDeniedPath = "/Account/AccessDenied";
				options.SlidingExpiration = true;
			});


			services.AddMvc();

            //services.ConfigureApplicationCookie(options =>
            //{
            //    // Cookie settings
            //    options.Cookie.HttpOnly = true;
            //    //options.ExpireTimeSpan = TimeSpan.FromMinutes(30);
            //    // If the LoginPath isn't set, ASP.NET Core defaults 
            //    // the path to /Account/Login.
            //    options.LoginPath = "/Home/Home";
            //    // If the AccessDeniedPath isn't set, ASP.NET Core defaults 
            //    // the path to /Account/AccessDenied.
            //    options.AccessDeniedPath = "/Home/Home";
            //    options.SlidingExpiration = true;
            //});
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
			//JWT BEGIN
			app.UseAuthentication();
			//app.UseCors("CorsPolicy");
			//JWT END
			app.UseMvc(routes =>
			{
				routes.MapRoute("default",
					"{controller=Home}/{action=Home}/{id?}");
				routes.MapRoute(
					"Root",
					"",
					defaults: new { controller = "Home", action = "Home" });

				routes.MapRoute(
					"DeepLink",
					"{*pathInfo}",
					defaults: new { controller = "Home", action = "Home" });
			});


			var options = new RewriteOptions()
            .AddIISUrlRewrite(env.ContentRootFileProvider, "IISUrlRewrite.xml");

            app.UseRewriter(options);


		}
    }
}
