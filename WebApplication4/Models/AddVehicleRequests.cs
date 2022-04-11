using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class AddVehicleRequests
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string Type { get; set; }
        public int? Year { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public string Radius { get; set; }
        public string Vin { get; set; }
        public string PrimaryDriver { get; set; }
        public string OccassionDriver { get; set; }
        public decimal? ListPrice { get; set; }
        public string Classs { get; set; }
        public string Weight { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
