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
        getClientBuildingInfo getClientBuildingInfo = new getClientBuildingInfo();

        [HttpGet]
        [Route("api/ClientBuildingInfo/Index")]
        public IEnumerable<ClientBuildingInfo> Index()
        {
            return getClientBuildingInfo.getAllClientBuildingInfo();
        }
        
    }
}