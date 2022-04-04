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
    }
}
