using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Boardwalk.Models;

namespace Boardwalk.Controllers
{
    public class FileInfosController : Controller
    {
        getFileInfos getFileinfos = new getFileInfos();

        [HttpGet]
        [Route("api/FileInfos/Index")]
        public IEnumerable<FileInfos> Index()
        {
            return getFileinfos.GetAllFileInfos();
        }

        [HttpGet]
        [Route("api/FileInfos/Details/{id}")]
        public FileInfos Details(int id)
        {
            return getFileinfos.GetFileInfos(id);
        }

        [HttpGet]
        [Route("api/BindingInfos/Index")]
        public IEnumerable<BindingInfos> BindingIndex()
        {
            return getFileinfos.GetAllBindingInfos();
        }

        [HttpGet]
        [Route("api/BindingInfos/Details/{id}")]
        public BindingInfos BindingDetails(int id)
        {
            return getFileinfos.GetBindingInfos(id);
        }
    }
}
