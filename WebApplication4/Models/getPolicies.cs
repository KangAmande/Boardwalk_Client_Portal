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
        public CertificateRequests GetCertificateRequests(int id)
        {
            try
            {
                CertificateRequests CertificateRequests = db.CertificateRequests.Find(id);
                return CertificateRequests;
            }
            catch
            {
                throw;
            }
        }
        public IEnumerable<CertificateRequests> GetAllCertificateRequests()
        {
            try
            {
                return db.CertificateRequests.Where(d => d.ClientId == 10).ToList();
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
        public IEnumerable<AddDriverRequests> ClientAddDrivers()
        {
            try
            {
                return db.AddDriverRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<RemoveDriverRequests> ClientRemoveDrivers()
        {
            try
            {
                return db.RemoveDriverRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<AddVehicleRequests> ClientAddVehicles()
        {
            try
            {
                return db.AddVehicleRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<RemoveVehicleRequests>ClientRemoveVehicles()
        {
            try
            {
                return db.RemoveVehicleRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<AddLocationRequests> ClientAddLocation()
        {
            try
            {
                return db.AddLocationRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<RemoveLocationRequests> ClientRemoveLocation()
        {
            try
            {
                return db.RemoveLocationRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<AddEquipmentRequests> ClientAddEquipments()
        {
            try
            {
                return db.AddEquipmentRequests.Where(e => e.ClientId == 10).ToList();
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
        public IEnumerable<RemoveEquipmentRequests> ClientRemoveEquipments()
        {
            try
            {
                return db.RemoveEquipmentRequests.Where(e => e.ClientId == 10).ToList();
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
                if (!db.RemoveEquipmentRequests.Contains(e))
                {
                    db.RemoveEquipmentRequests.Add(e);
                    db.SaveChanges();
                }
            }
            catch
            {
                throw;
            }
        }
        public void addVehicle(string type,int year, string make, string model, string radius, string vin,string primaryDriver,string occassionDriver, decimal listPrice, string classs,string weight)
        {
            try
            {
                AddVehicleRequests e = new AddVehicleRequests
                {
                    ClientId = 10,
                    Type=type,
                    Year=year,
                    Make = make,
                    Model = model,
                    Radius = radius,
                    Vin = vin,
                    PrimaryDriver = primaryDriver,
                    OccassionDriver = occassionDriver,
                    ListPrice = listPrice,
                    Classs = classs,
                    Weight = weight,
                    RequestTime = DateTime.Now
                };
                db.AddVehicleRequests.Add(e);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        public void removeVehicle(int id)
        {
            try
            {
                RemoveVehicleRequests e = new RemoveVehicleRequests
                {
                    VehicleId = id,
                    ClientId = 10,
                    RequestTime = DateTime.Now
                };
                if (!db.RemoveVehicleRequests.Contains(e))
                {
                    db.RemoveVehicleRequests.Add(e);
                    db.SaveChanges();
                }
                    
            }
            catch
            {
                throw;
            }
        }
        public void addDriver(string firstName, string lastName, DateTime birthDate,string driverTrain, string licenseNumber, string conviction, string licenseYear)
        {
            try
            {
                AddDriverRequests e = new AddDriverRequests
                {
                    ClientId = 10,
                    FirstName = firstName,
                    LastName = lastName,
                    BirthDate = birthDate,
                    DriverTrain = driverTrain,
                    LicenseNumber = licenseNumber,
                    Conviction = conviction,
                    LicenseYear = licenseYear,
                    RequestTime = DateTime.Now
                };
                db.AddDriverRequests.Add(e);
                db.SaveChanges();
            }
            catch
            {
                throw;
            }
        }
        public void removeDriver(int id)
        {
            try
            {
                RemoveDriverRequests e = new RemoveDriverRequests
                {
                    DriverId = id,
                    ClientId = 10,
                    RequestTime = DateTime.Now
                };
                if (!db.RemoveDriverRequests.Contains(e))
                {
                    db.RemoveDriverRequests.Add(e);
                    db.SaveChanges();
                }
                    
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
                if (!db.RemoveLocationRequests.Contains(e))
                {
                    db.RemoveLocationRequests.Add(e);
                    db.SaveChanges();
                }
            }
            catch
            {
                throw;
            }
        }


    }
}

