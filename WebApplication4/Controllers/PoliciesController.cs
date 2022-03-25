using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Boardwalk.Models;

namespace Boardwalk.Controllers
{
    public class PoliciesController : Controller
    {
        getPolicies getPolicies = new getPolicies();

        [HttpGet]
        [Route("api/Policies/Index")]
        public IEnumerable<Policies> Index()
        {
            return getPolicies.GetAllPolicies();
        }

        /**[HttpPost]
        [Route("api/Employee/Create")]
        public int Create(TblEmployee employee)
        {
            return objemployee.AddEmployee(employee);
        }*/

        [HttpGet]
        [Route("api/Policies/Details/{id}")]
        public Policies Details(int id)
        {
            return getPolicies.GetPolicy(id);
        }

        /**[HttpPut]
        [Route("api/Employee/Edit")]
        public int Edit(TblEmployee employee)
        {
            return objemployee.UpdateEmployee(employee);
        }

        [HttpDelete]
        [Route("api/Employee/Delete/{id}")]
        public int Delete(int id)
        {
            return objemployee.DeleteEmployee(id);
        }

        [HttpGet]
        [Route("api/Employee/GetCityList")]
        public IEnumerable<TblCities> Details()
        {
            return objemployee.GetCities();
        }*/
    }
}
