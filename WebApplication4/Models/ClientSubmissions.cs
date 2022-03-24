using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class ClientSubmissions
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public string PolicyNo { get; set; }
        public string SubmissionNo { get; set; }
        public int? StatusId { get; set; }
        public string Insurer { get; set; }
        public bool? IsActive { get; set; }
    }
}
