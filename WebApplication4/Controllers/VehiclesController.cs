using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Boardwalk.Models;
using Microsoft.AspNetCore.Mvc;

namespace Boardwalk.Controllers
{
    public class VehiclesController
    {
        getPolicies getPolicies = new getPolicies();

        [HttpGet]
        [Route("api/Vehicles/Index")]
        public IEnumerable<Vehicles> Index()
        {
            return getPolicies.GetAllVehicles();
        }
        [HttpGet]
        [Route("api/Vehicles/GetAddVehicle")]
        public IEnumerable<AddVehicleRequests> GetAddVehicle()
        {
            return getPolicies.GetAddVehicles();
        }
        [HttpGet]
        [Route("api/Vehicles/GetRemoveVehicle")]
        public IEnumerable<RemoveVehicleRequests> GetRemoveVehicle()
        {
            return getPolicies.GetRemoveVehicles();
        }
    }
}
