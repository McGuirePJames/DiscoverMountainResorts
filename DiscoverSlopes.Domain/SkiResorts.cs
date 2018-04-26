using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace DiscoverSlopes.Domain
{
    public class SkiResorts
    {
        [Key]
        public int SkiResortsId { get; set; }
        public string Name { get; set; }
        public decimal Latitude { get; set; }
        public decimal Longitude { get; set; }
        public string Logo { get; set; }
        public List<Trails> Trails { get; set; }
    }

}
 