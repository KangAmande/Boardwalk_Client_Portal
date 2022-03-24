using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class SubmissionCoverageChilditemDetails
    {
        public int Id { get; set; }
        public int? SubmissionDetailsId { get; set; }
        public int? ChildItemId { get; set; }
        public string ValData { get; set; }
        public string CreatedByUser { get; set; }
        public string LocationId { get; set; }
    }
}
