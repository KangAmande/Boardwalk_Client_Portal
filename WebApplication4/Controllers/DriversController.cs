using Boardwalk.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Controllers
{
    public class DriversController:Controller
    {
        getPolicies getPolicies = new getPolicies();

        [HttpGet]
        [Route("api/Drivers/Index")]
        public IEnumerable<Drivers> Index()
        {
            return getPolicies.GetAllDrivers();
        }
    }
}
