using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Models
{
    public class getEquipments
    {
        insuranceContext db = new insuranceContext();

        public IEnumerable<Equipments> getAllEquipments()
        {
            try
            {
                return db.Equipments.ToList();
            }
            catch
            {
                throw;
            }
        }
        public Equipments GetEquipments(int id)
        {
            try
            {
                Equipments equipments = db.Equipments.Find(id);
                return equipments;
            }
            catch
            {
                throw;
            }
        }
    }
}