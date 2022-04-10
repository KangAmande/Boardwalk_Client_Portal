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
        [HttpGet]
        [Route("api/Drivers/GetAddDriver")]
        public IEnumerable<AddDriverRequests> GetAddDriver()
        {
            return getPolicies.GetAddDrivers();
        }
        [HttpGet]
        [Route("api/Drivers/GetRemoveDriver")]
        public IEnumerable<RemoveDriverRequests> GetRemoveDriver()
        {
            return getPolicies.GetRemoveDrivers();
        }
        [HttpGet]
        [Route("api/Drivers/ClientAddDriver")]
        public IEnumerable<AddDriverRequests> ClientAddDriver()
        {
            return getPolicies.ClientAddDrivers();
        }
        [HttpGet]
        [Route("api/Drivers/ClientRemoveDriver")]
        public IEnumerable<RemoveDriverRequests> ClientRemoveDriver()
        {
            return getPolicies.ClientRemoveDrivers();
        }
        [HttpPost]
        [Route("api/Drivers/addDriver/{firstName}/{lastName}/{birthDate}/{driverTrain}/{licenseNumber}/{conviction}/{licenseYear}")]
        public void addDriver(string firstName, string lastName, DateTime birthDate, string driverTrain, string licenseNumber, string conviction, string licenseYear)
        {
            getPolicies.addDriver( firstName,  lastName,  birthDate,  driverTrain,  licenseNumber,  conviction,  licenseYear);
        }
        [HttpPost]
        [Route("api/Drivers/removeDriver/{id}")]
        public void removeDriver(int id)
        {
            Console.WriteLine("*************Controller: " + id);
            getPolicies.removeDriver(id);
        }
    }
}
