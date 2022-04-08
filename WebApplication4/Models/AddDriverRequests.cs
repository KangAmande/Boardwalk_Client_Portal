using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class AddDriverRequests
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime? BirthDate { get; set; }
        public string DriverTrain { get; set; }
        public string LicenseNumber { get; set; }
        public string Conviction { get; set; }
        public string LicenseYear { get; set; }
        public DateTime? RequestTime { get; set; }
    }
}
