using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class FileInfos
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ExtraParams { get; set; }
        public string MimeType { get; set; }
        public string ProviderName { get; set; }
        public decimal? SizeMb { get; set; }
        public byte[] Bytes { get; set; }
        public int? InsurerId { get; set; }
        public int? BindingId { get; set; }
        public int? NotesId { get; set; }
        public DateTime? DateOfcreated { get; set; }
        public DateTime? Modified { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public int? CertificateId { get; set; }
        public int? InforcedId { get; set; }
        public int? EndorsementId { get; set; }
    }
}
