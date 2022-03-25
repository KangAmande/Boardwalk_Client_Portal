using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Models
{
    public class getPolicies
    {
        insuranceContext db = new insuranceContext();

        public IEnumerable<Policies> GetAllPolicies()
        {
            try
            {
                return db.Policies.ToList();
            }
            catch
            {
                throw;
            }
        }
    
        public Policies GetPolicy(int id)
        {
            try
            {
                Policies policy = db.Policies.Find(id);
                return policy;
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

