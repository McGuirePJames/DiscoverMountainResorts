using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DiscoverSlopes.Data;


namespace DiscoverSlopes.Models
{
    public class SkiResorts
    {
        public int SkiResortsId { get; set; }
        public string Name { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string Logo { get; set; }

        public static async Task<List<DiscoverSlopes.Models.SkiResorts>> GetSkiResorts()
        {
            var skiResortContext = new DiscoverSlopes.Data.SkiResortContext();
            List<DiscoverSlopes.Domain.SkiResorts> skiResorts = await skiResortContext.SkiResorts.ToListAsync();

            List<DiscoverSlopes.Models.SkiResorts> mappedSkiResorts = AutoMapper.Mapper.Map<List<DiscoverSlopes.Models.SkiResorts>>(skiResorts);

            return mappedSkiResorts;
        }

    }
}


