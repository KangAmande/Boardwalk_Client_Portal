using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class BindingInfos
    {
        public int Id { get; set; }
        public DateTime? ExpiryDate { get; set; }
        public DateTime? EffectiveDate { get; set; }
        public string PaymentType { get; set; }
        public int? InsurerQuoteId { get; set; }
        public DateTime? DateOfCreate { get; set; }
        public string CreatedBy { get; set; }
        public string TotalBoundPremimum { get; set; }
    }
}
