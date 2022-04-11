using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Models
{
    public class getFileInfos
    {
        insuranceContext db = new insuranceContext();

        public IEnumerable<FileInfos> GetAllFileInfos()
        {
            try
            {
                return db.FileInfos.ToList();
            }
            catch
            {
                throw;
            }
        }

        public FileInfos GetFileInfos(int id)
        {
            try
            {
                FileInfos Policyfile = db.FileInfos.Find(id);
                return Policyfile;
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<BindingInfos> GetAllBindingInfos()
        {
            try
            {
                return db.BindingInfos.ToList();
            }
            catch
            {
                throw;
            }
        }

        public BindingInfos GetBindingInfos(int id)
        {
            try
            {
                BindingInfos BindingInfos = db.BindingInfos.Find(id);
                return BindingInfos;
            }
            catch
            {
                throw;
            }
        }
    }
}
