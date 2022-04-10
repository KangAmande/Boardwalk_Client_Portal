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
        [Route("api/Vehicles/ClientAddVehicle")]
        public IEnumerable<AddVehicleRequests> ClientAddVehicle()
        {
            return getPolicies.ClientAddVehicles();
        }
        [HttpGet]
        [Route("api/Vehicles/GetRemoveVehicle")]
        public IEnumerable<RemoveVehicleRequests> GetRemoveVehicle()
        {
            return getPolicies.GetRemoveVehicles();
        }
        [HttpGet]
        [Route("api/Vehicles/ClientRemoveVehicle")]
        public IEnumerable<RemoveVehicleRequests> ClientRemoveVehicle()
        {
            return getPolicies.ClientRemoveVehicles();
        }
        [HttpPost]
        [Route("api/Vehicles/addVehicle/{type}/{year}/{make}/{model}/{radius}/{vin}/{primaryDriver}/{occassionDriver}/{listPrice}/{class}/{weight}")]
        public void addVehicle(string type, int year, string make, string model, string radius, string vin, string primaryDriver, string occassionDriver, decimal listPrice, string classs, string weight)
        {
            Console.WriteLine("*************Controller: " + make);
            getPolicies.addVehicle( type,  year,  make,  model,  radius,  vin,  primaryDriver,  occassionDriver,  listPrice,  classs,  weight);
        }
        [HttpPost]
        [Route("api/Vehicles/removeVehicle/{id}")]
        public void removeVehicle(int id)
        {
            Console.WriteLine("*************Controller: " + id);
            getPolicies.removeVehicle(id);
        }
    }
}
