using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Models
{
    public class getClientBuildingInfo
    {
        insuranceContext db = new insuranceContext();

        public IEnumerable<ClientBuildingInfo> getAllClientBuildingInfo()
        {
            try
            {
                return db.ClientBuildingInfo.ToList();
            }
            catch
            {
                throw;
            }
        }
        public ClientBuildingInfo GetClientBuildingInfo(int id)
        {
            try
            {
                ClientBuildingInfo cbinfo = db.ClientBuildingInfo.Find(id);
                return cbinfo;
            }
            catch
            {
                throw;
            }
        }
    }
}