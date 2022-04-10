using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Boardwalk.Models;
using Microsoft.AspNetCore.Mvc;

namespace Boardwalk.Controllers
{
    public class EquipmentsController
    {
        getPolicies getPolicies = new getPolicies();

        [HttpGet]
        [Route("api/Equipments/Index")]
        public IEnumerable<Equipments> Index()
        {
            return getPolicies.GetAllEquipments();
        }
        [HttpGet]
        [Route("api/Equipments/GetAddEquipment")]
        public IEnumerable<AddEquipmentRequests> GetAddEquipment()
        {
            return getPolicies.GetAddEquipments();
        }
        [HttpGet]
        [Route("api/Equipments/GetRemoveEquipment")]
        public IEnumerable<RemoveEquipmentRequests> GetRemoveEquipment()
        {
            return getPolicies.GetRemoveEquipments();
        }
        [HttpGet]
        [Route("api/Equipments/ClientAddEquipment")]
        public IEnumerable<AddEquipmentRequests> ClientAddEquipment()
        {
            return getPolicies.ClientAddEquipments();
        }
        [HttpGet]
        [Route("api/Equipments/ClientRemoveEquipment")]
        public IEnumerable<RemoveEquipmentRequests> ClientRemoveEquipment()
        {
            return getPolicies.ClientRemoveEquipments();
        }
        [HttpPost]
        [Route("api/Equipments/addEquipment/{year}/{make}/{model}/{value}/{serialN}")]
        public void addEquipment(int year,string make,string model,decimal value,string serialN)
        {
            Console.WriteLine("*************Controller: "+make);
            getPolicies.addEquipment(year,make,model,value,serialN);
        }
        [HttpPost]
        [Route("api/Equipments/removeEquipment/{id}")]
        public void removeEquipment(int id)
        {
            Console.WriteLine("*************Controller: " + id);
            getPolicies.removeEquipment(id);
        }
    }
}
