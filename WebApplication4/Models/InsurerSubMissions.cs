using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class InsurerSubMissions
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public string PolicyNo { get; set; }
        public int? ClientSubmissionId { get; set; }
        public string InsurerQuotationNo { get; set; }
        public int? StatusId { get; set; }
        public int? ClientInfoId { get; set; }
        public bool? IsBound { get; set; }
        public bool? IsActive { get; set; }
    }
}
