using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Boardwalk.Models;


namespace Boardwalk.Controllers
{
    public class CertificateInsurancesController : Controller
    {
        getCertificateInsurances getCertificateInsurances = new getCertificateInsurances();

        [HttpGet]
        [Route("api/CertificateInsurances/Index")]
        public IEnumerable<CertificateInsurances> Index()
        {
            return getCertificateInsurances.GetAllCertificateInsurances();
        }

        [HttpGet]
        [Route("api/CertificateInsurances/Details/{id}")]
        public CertificateInsurances Details(int id)
        {
            return getCertificateInsurances.GetCertificateInsurances(id);
        }
    }
}
