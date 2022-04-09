using NPOI.SS.Formula.Functions;
using System;
using System.Collections.Generic;
using System.Linq;

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
        public IEnumerable<ClientBuildingInfo> getAllClientBuildingInfo()
        {
            try
            {
                return db.ClientBuildingInfo.Where(d => d.ClientId == 10).ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<Drivers> GetAllDrivers()
        {
            try
            {
                return db.Drivers.Where(d => d.ClientId == 10).ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<Vehicles> GetAllVehicles()
        {
            try
            {
                return db.Vehicles.Where(v => v.ClientId == 10).ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<Equipments> GetAllEquipments()
        {
            try
            {
                return db.Equipments.Where(e => e.ClientId == 10).ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<AddDriverRequests> GetAddDrivers()
        {
            try
            {
                return db.AddDriverRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<RemoveDriverRequests> GetRemoveDrivers()
        {
            try
            {
                return db.RemoveDriverRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<AddVehicleRequests> GetAddVehicles()
        {
            try
            {
                return db.AddVehicleRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<RemoveVehicleRequests> GetRemoveVehicles()
        {
            try
            {
                return db.RemoveVehicleRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<AddLocationRequests> GetAddLocation()
        {
            try
            {
                return db.AddLocationRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<RemoveLocationRequests> GetRemoveLocation()
        {
            try
            {
                return db.RemoveLocationRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<AddEquipmentRequests> GetAddEquipments()
        {
            try
            {
                return db.AddEquipmentRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<RemoveEquipmentRequests> GetRemoveEquipments()
        {
            try
            {
                return db.RemoveEquipmentRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<CertificateRequests> GetCertificateRequest()
        {
            try
            {
                return db.CertificateRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<AddressRequests> GetAddressRequest()
        {
            try
            {
                return db.AddressRequests.ToList();
            }
            catch
            {
                throw;
            }
        }
        public void addEquipment(int year, string make, string model, decimal value, string serialN)
        {
            try
            {
                AddEquipmentRequests e = new AddEquipmentRequests
                {
                    ClientId = 10,
                    Make = make,
                    Model = model,
                    Year = year,
                    SerialNumber = serialN,
                    Value = value,
                    RequestTime = DateTime.Now
                };
                Console.WriteLine("**********getPolicies: " + e.ToString());
                db.AddEquipmentRequests.Add(e);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        public void removeEquipment(int id)
        {
            try
            {
                RemoveEquipmentRequests e = new RemoveEquipmentRequests
                {
                    EquipId = id,
                    ClientId = 10,
                    RequestTime = DateTime.Now
                };
                db.RemoveEquipmentRequests.Add(e);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        public void addLocation(string buildingType,string street,string city,string postalCode,string province,string primaryOp,string buildingConstr,string wallConstr,
            string floorConstr,string sprinklered,string deckConstr,string roofCovering,decimal sizeSqft,int storeyNumber,int yearBuilt,string constrType,string alarm,string mortgage)
        {
            try
            {
                AddLocationRequests e = new AddLocationRequests
                {
                    ClientId = 10,
                    RequestTime = DateTime.Now,
                    BuildingType = buildingType,
                    Street = street,
                    City = city,
                    PostalCode = postalCode,
                    Province = province,
                    PrimaryOp = primaryOp,
                    BuildingConstr = buildingConstr,
                    WallConstr = wallConstr,
                    FloorConstr = floorConstr,
                    Sprinklered = sprinklered,
                    DeckConstruction = deckConstr,
                    RoofCovering = roofCovering,
                    SizeSqft = sizeSqft,
                    StoreysNumber = storeyNumber,
                    YearBuilt = yearBuilt,
                    ConstrType = constrType,
                    Alarm = alarm,
                    Mortgage = mortgage
                };
                db.AddLocationRequests.Add(e);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        public void removeLocation(int id)
        {
            try
            {
                RemoveLocationRequests e = new RemoveLocationRequests
                {
                    LocationId = id,
                    ClientId=10,
                    RequestTime = DateTime.Now
                };
                db.RemoveLocationRequests.Add(e);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }


    }
}

