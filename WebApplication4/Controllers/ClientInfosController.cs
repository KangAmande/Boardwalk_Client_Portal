using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Boardwalk.Models;

namespace Boardwalk.Controllers
{
    public class ClientInfosController : Controller
    {
        // GET: ClientInfosController

        getClientInfos getClientinfos = new getClientInfos();

        [HttpGet]
        [Route("api/Clientinfos/Index")]
        public IEnumerable<ClientInfos> Index()
        {
            return getClientinfos.GetAllClientInfos();
        }

        [HttpGet]
        [Route("api/ClientInfos/Details/{id}")]
        public ClientInfos Details(int id)
        {
            return getClientinfos.GetClientInfos(id);
        }
        
        /*
        public ActionResult Index()
        {
            return View();
        }

        // GET: ClientInfosController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: ClientInfosController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ClientInfosController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ClientInfosController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: ClientInfosController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: ClientInfosController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: ClientInfosController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }*/
    }
}
