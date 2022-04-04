using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class SubmittionDetails
    {
        public int Id { get; set; }
        public int? CoverageItemId { get; set; }
        public int? SubmissionId { get; set; }
        public int? PolicyId { get; set; }
        public int? CoverageId { get; set; }
        public double? Slimit { get; set; }
        public double? Deductible { get; set; }
        public bool? CheckedFlag { get; set; }
        public string CreatedByUser { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public string LocationId { get; set; }
        public int? InsurerQuoteId { get; set; }
        public int? StructureId { get; set; }
    }
}
