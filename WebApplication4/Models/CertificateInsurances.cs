using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class CertificateInsurances
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public string HolderName { get; set; }
        public string InsuranceType { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string NoticeDays { get; set; }
        public string Operation { get; set; }
        public string Internal { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public string CreatedBy { get; set; }
        public int? CertificateId { get; set; }
        public bool? LossPayee { get; set; }
        public bool? Mortgagee { get; set; }
        public bool? Additional { get; set; }
        public string InsuredName { get; set; }
    }
}
