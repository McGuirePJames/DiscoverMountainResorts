using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DiscoverSlopes.Domain
{
    public class Trails
    {
        public int TrailsId { get; set; }
        public string Name { get; set; }
        public SkiResorts SkiResorts { get; set; }
    }
}
