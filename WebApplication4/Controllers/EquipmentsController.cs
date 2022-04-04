using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Boardwalk.Models;

namespace Boardwalk.Controllers
{
    public class EquipmentsController : Controller
    {
        getEquipments getEquipments = new getEquipments();

        [HttpGet]
        [Route("api/Equipments/Index")]
        public IEnumerable<Equipments> Index()
        {
            return getEquipments.getAllEquipments();
        }
        
    }
}