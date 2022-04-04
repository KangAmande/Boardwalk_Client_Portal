using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class InforceInfos
    {
        public int Id { get; set; }
        public string PolicyNo { get; set; }
        public int? InsurerQuoteId { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CancelEffectiveDate { get; set; }
        public string CancelReason { get; set; }
        public string AdditionalComments { get; set; }
        public string CancellationOtherreason { get; set; }
        public string CancellationPolicyNo { get; set; }
    }
}
