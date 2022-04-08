using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Boardwalk.Models;

namespace Boardwalk.Controllers
{
    public class ClientBuildingInfoController : Controller
    {
        getPolicies getPolicies = new getPolicies();
        [HttpGet]
        [Route("api/ClientBuildingInfo/Index")]
        public IEnumerable<ClientBuildingInfo> Index()
        {
            return getPolicies.getAllClientBuildingInfo();
        }
        [HttpPost]
        [Route("api/ClientBuildingInfo/addLocation/{buildingType}/{street}/{city}/{postalCode}/{province}/{primaryOp}/{buildingConstr}/{wallConstr}/{floorConstr}/{sprinklered}/{deckConstr}/{roofCovering}/{sizeSqft}/{storeyNumber}/{yearBuilt}/{constrType}/{alarm}/{mortgage}")]
        public void addLocation(string buildingType, string street, string city, string postalCode, string province, string primaryOp, string buildingConstr, string wallConstr,
            string floorConstr, string sprinklered, string deckConstr, string roofCovering, decimal sizeSqft, int storeyNumber, int yearBuilt, string constrType, string alarm, string mortgage)
        {
            getPolicies.addLocation(buildingType,  street,  city,  postalCode,  province,  primaryOp,  buildingConstr,  wallConstr,
             floorConstr,  sprinklered,  deckConstr,  roofCovering,  sizeSqft,  storeyNumber,  yearBuilt,  constrType,  alarm,  mortgage);
           
        }
        [HttpPost]
        [Route("api/ClientBuildingInfo/removeLocation/{id}")]
        public void removeLocation(int id)
        {
            Console.WriteLine("*************Controller: " + id);
            getPolicies.removeLocation(id);
        }
    }
}