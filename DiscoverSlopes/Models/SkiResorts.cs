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
		public static async Task<DiscoverSlopes.Models.SkiResorts> GetSkiResortById(int id)
		{
			var skiResortContext = new DiscoverSlopes.Data.SkiResortContext();
			DiscoverSlopes.Domain.SkiResorts skiResort = await skiResortContext.SkiResorts.SingleOrDefaultAsync(s => s.SkiResortsId == id);

			DiscoverSlopes.Models.SkiResorts mappedSkiResort = AutoMapper.Mapper.Map<DiscoverSlopes.Models.SkiResorts>(skiResort);

			return mappedSkiResort;
		}

	}
}


