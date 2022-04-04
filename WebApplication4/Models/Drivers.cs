using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class Drivers
    {
        public int Id { get; set; }
        public int? ClientId { get; set; }
        public int? SubmissionId { get; set; }
        public int? CoveragedId { get; set; }
        public string FullName { get; set; }
        public string DriverLicense { get; set; }
        public DateTime? DateOfCreated { get; set; }
        public DateTime? Birthdate { get; set; }
        public int LicenseYear { get; set; }
        public string DriverTrain { get; set; }
        public string Conviction { get; set; }
    }
}
