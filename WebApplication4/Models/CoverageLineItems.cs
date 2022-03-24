using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class CoverageLineItems
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public int CoverageId { get; set; }
        public int? LineInputType { get; set; }
        public int? LimitInputType { get; set; }
        public int? DeductableInputType { get; set; }
        public byte? IsLimit { get; set; }
        public byte? IsDeductible { get; set; }
        public string CreatedByUser { get; set; }
        public string GroupName { get; set; }

        public virtual Coverages Coverage { get; set; }
    }
}
