using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class AddLocationRequests
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string BuildingType { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string Province { get; set; }
        public string PrimaryOp { get; set; }
        public string BuildingConstr { get; set; }
        public string WallConstr { get; set; }
        public string FloorConstr { get; set; }
        public string Sprinklered { get; set; }
        public string DeckConstruction { get; set; }
        public string RoofCovering { get; set; }
        public decimal? SizeSqft { get; set; }
        public int? StoreysNumber { get; set; }
        public int? YearBuilt { get; set; }
        public string ConstrType { get; set; }
        public string Alarm { get; set; }
        public string Mortgage { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
