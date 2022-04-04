using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class Vehicles
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public int? CoverageId { get; set; }
        public string RegisteredOwner { get; set; }
        public string VehicleType { get; set; }
        public string VehicleMake { get; set; }
        public string VehicleModel { get; set; }
        public string VehicleIdentificationNumber { get; set; }
        public decimal? ListPriceNew { get; set; }
        public string VehicleClass { get; set; }
        public string BodyType { get; set; }
        public string RadiusOperation { get; set; }
        public string PrincipalDriverName { get; set; }
        public string PrincipalDriverDescription { get; set; }
        public string OccationalDriverName { get; set; }
        public string OccationalDriverDescription { get; set; }
        public string PhysicalDamage { get; set; }
        public string PhysicalDamageDeductible { get; set; }
        public string TransportationReplacement { get; set; }
        public string WeiverDepreciation { get; set; }
        public string OwnedLeasedFinanced { get; set; }
        public string LienholderLessor { get; set; }
        public string AttachedMachinery { get; set; }
        public string AttachedMachineryDescription { get; set; }
        public decimal? AttachedMachineryValue { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public int? SubmissionId { get; set; }
        public string Weight { get; set; }
        public string PrincipalDriverTrain { get; set; }
        public DateTime? PrincipalBirthDate { get; set; }
        public string PrincipalConviction { get; set; }
        public DateTime? OccationalBirthDate { get; set; }
        public string OccationalDriverTrain { get; set; }
        public string OccationalConviction { get; set; }
    }
}
