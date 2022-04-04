using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class CoverageVehicleTypes
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public int? CoverageId { get; set; }
        public string VehicleType { get; set; }
        public string NickName { get; set; }
        public string PhysicalDamage { get; set; }
        public string TranspotationReplacement { get; set; }
        public string WaiverDepreciation { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public int? SubmissionId { get; set; }
        public string PhysicalDamageDeductable { get; set; }
    }
}
