using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DiscoverSlopes.Models
{
    public class Database
    {
        public static string conn = "";

        public static class DbInitializer
        {
            public static void Initialize(DiscoverSlopes.Data.SkiResortContext context)
            {
                context.Database.EnsureCreated();

                // Look for any students.
                if (context.SkiResorts.Any())
                {
                    return;   // DB has been seeded
                }

                context.SaveChanges();
            }
        }
    }
}
