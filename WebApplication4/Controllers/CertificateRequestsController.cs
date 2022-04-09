using Boardwalk.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Controllers
{
    public class CertificateRequestsController:Controller
    {
        getPolicies getPolicies = new getPolicies();

        [HttpGet]
        [Route("api/CertificateRequests/Index")]
        public IEnumerable<CertificateRequests> Index()
        {
            return getPolicies.GetAllCertificateRequests();
        }

        // [HttpGet]
        // [Route("api/CertificateRequests/GetCertificateRequests")]
        // public IEnumerable<AddCertificateRequests> GetCertificateRequests()
        // {
        //     return getPolicies.GetAddCertificateRequests();
        // }
        // [HttpGet]
        // [Route("api/CertificateRequests/GetRemoveCertificateRequests")]
        // public IEnumerable<RemoveCertificateRequestsRequests> GetRemoveCertificateRequests()
        // {
        //     return getPolicies.GetRemoveCertificateRequests();
        // }
    }
}
