using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class ClientInfos
    {
        public int Id { get; set; }
        public string AccountNumber { get; set; }
        public string BusinessName { get; set; }
        public string Description { get; set; }
        public string OperationName { get; set; }
        public int? BusinessClassId { get; set; }
        public int? SubClassId { get; set; }
        public int? BusinessType { get; set; }
        public string CurrentInsurer { get; set; }
        public double? CurrentPremimum { get; set; }
        public string FullTime { get; set; }
        public string PartTime { get; set; }
        public string WebSiteUrl { get; set; }
        public string CreatedText { get; set; }
        public int? NoOfEmployee { get; set; }
        public int? Bdmuser { get; set; }
        public string YearStarted { get; set; }
        public int? CreateUser { get; set; }
        public string ClientType { get; set; }
    }
}
