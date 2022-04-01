using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Models
{
    public class getClientInfos
    {
        insuranceContext db = new insuranceContext();

        public IEnumerable<ClientInfos> GetAllClientInfos()
        {
            try
            {
                return db.ClientInfos.ToList();
            }
            catch
            {
                throw;
            }
        }
    
        public ClientInfos GetClientInfos(int id)
        {
            try
            {
                ClientInfos Account = db.ClientInfos.Find(id);
                return Account;
            }
            catch
            {
                throw;
            }
        }
        /**
        public List<TblCities> GetCities()
        {
            List<TblCities> lstCity = new List<TblCities>();
            lstCity = (from CityList in db.TblCities select CityList).ToList();

            return lstCity;
        }*/

    }
}
