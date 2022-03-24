using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class Notes
    {
        public int Id { get; set; }
        public string NoteCode { get; set; }
        public string Description { get; set; }
        public string Notes1 { get; set; }
        public int? CreateUser { get; set; }
        public int? AssignedUser { get; set; }
        public string CreatedBy { get; set; }
        public int? ClientId { get; set; }
        public int? PolicyId { get; set; }
        public bool? IsAction { get; set; }
        public bool? IsDelete { get; set; }
        public string DocumentCode { get; set; }
        public string PolicyType { get; set; }
    }
}
