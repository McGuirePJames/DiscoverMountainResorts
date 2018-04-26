using Microsoft.EntityFrameworkCore;
using DiscoverSlopes.Domain;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Console;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Options;
using Microsoft.Extensions.Configuration;

namespace DiscoverSlopes.Data
{
    public class SkiResortContext : DbContext
    {
        public static readonly LoggerFactory LoggerFactory
            = new LoggerFactory(new[]
            {
                new ConsoleLoggerProvider((category, level)
                    => category == DbLoggerCategory.Database.Command.Name
                    && level == LogLevel.Information, true)
            });

        //public SkiResortContext(DbContextOptions<SkiResortContext> options) : base(options)
        //{

        //}
        public DbSet<DiscoverSlopes.Domain.SkiResorts> SkiResorts { get; set; }
        public DbSet<DiscoverSlopes.Domain.Trails> Trails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLoggerFactory(LoggerFactory)

            base.OnConfiguring(optionsBuilder);

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Trails>()
                .HasOne(s => s.SkiResorts)
                .WithMany(t => t.Trails);
        }

    }

}
