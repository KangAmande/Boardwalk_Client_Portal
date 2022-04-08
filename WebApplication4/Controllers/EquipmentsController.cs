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
