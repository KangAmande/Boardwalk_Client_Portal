using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class SubmissionCoverageOtherDetails
    {
        public int Id { get; set; }
        public string LineItemText { get; set; }
        public int? SubmissionId { get; set; }
        public int? PolicyId { get; set; }
        public int? CoverageId { get; set; }
        public double? SubmissionLimit { get; set; }
        public double? Deductible { get; set; }
        public string CreatedByUser { get; set; }
        public string LocationId { get; set; }
        public string LineItem2 { get; set; }
        public string GroupName { get; set; }
        public int? InsurerQuoteId { get; set; }
    }
}
