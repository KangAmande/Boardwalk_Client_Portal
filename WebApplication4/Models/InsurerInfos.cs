using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class InsurerInfos
    {
        public int Id { get; set; }
        public string InsurerName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string PostalCode { get; set; }
        public string UnderWritter { get; set; }
        public string UnderWritterEmail { get; set; }
        public int? InsurerQuoteId { get; set; }
        public string TotalPremimum { get; set; }
        public string CreatedBy { get; set; }
        public string InsuranceQuoteNo { get; set; }
        public string TotalBoundPremimum { get; set; }
        public string Reason { get; set; }
        public string ReasonDetails { get; set; }
    }
}
