using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class ClientBuildingInfo
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public string BuildingType { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string PrimaryOperation { get; set; }
        public string BuildingConstruction { get; set; }
        public string WallConstruction { get; set; }
        public string GradeFloorConstruction { get; set; }
        public string RoofDeckconstruction { get; set; }
        public string RoofCovering { get; set; }
        public string SizeSqft { get; set; }
        public string NoOfStoreys { get; set; }
        public int? YearBuilt { get; set; }
        public string TypeConstiction { get; set; }
        public string Alarm { get; set; }
        public string Mortgaee { get; set; }
        public string Sprinklered { get; set; }
        public bool? IsDelete { get; set; }
        public DateTime? DateOfDelete { get; set; }
        public string CreatedByUser { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public string Location { get; set; }
        public string Province { get; set; }
        public string Basement { get; set; }
        public int? NoOfUnit { get; set; }
        public string SqftOfAreaOccupied { get; set; }
        public int? NoOfHydrants { get; set; }
        public string DistanceToFireHall { get; set; }
        public string Foundation { get; set; }
        public string ElectricalPanel { get; set; }
        public string ElectricalWiring { get; set; }
        public string Pluming { get; set; }
        public string Heating { get; set; }
        public string FirstMortgageeName { get; set; }
        public string FirstMortgageeAddress { get; set; }
        public string SecondMortgageeName { get; set; }
        public string SecondMortgageeAddress { get; set; }
        public string ClientOrder { get; set; }
    }
}
