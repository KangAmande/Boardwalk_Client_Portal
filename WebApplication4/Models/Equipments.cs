using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class Equipments
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public string make { get; set; }
        public string model { get; set; }
        public int year { get; set; }
        public int serialNumber { get; set; }
        public double value { get; set; }
    }
}
