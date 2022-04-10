using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Boardwalk.Models
{
    public class getCertificateInsurances
    {

        insuranceContext db = new insuranceContext();

        public IEnumerable<CertificateInsurances> GetAllCertificateInsurances()
        {
            try
            {
                return db.CertificateInsurances.ToList();
            }
            catch
            {
                throw;
            }
        }

        public CertificateInsurances GetCertificateInsurances(int id)
        {
            try
            {
                CertificateInsurances CI = db.CertificateInsurances.Find(id);
                return CI;
            }
            catch
            {
                throw;
            }
        }
    }
}
