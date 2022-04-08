using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace Boardwalk.Models
{
    public partial class insuranceContext : DbContext
    {
        public insuranceContext()
        {
        }

        public insuranceContext(DbContextOptions<insuranceContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AddDriverRequests> AddDriverRequests { get; set; }
        public virtual DbSet<AddEquipmentRequests> AddEquipmentRequests { get; set; }
        public virtual DbSet<AddLocationRequests> AddLocationRequests { get; set; }
        public virtual DbSet<AddVehicleRequests> AddVehicleRequests { get; set; }
        public virtual DbSet<AddressRequests> AddressRequests { get; set; }
        public virtual DbSet<AdminInfos> AdminInfos { get; set; }
        public virtual DbSet<BindingInfos> BindingInfos { get; set; }
        public virtual DbSet<CertificateInsurances> CertificateInsurances { get; set; }
        public virtual DbSet<CertificateRequests> CertificateRequests { get; set; }
        public virtual DbSet<ClientBuildingInfo> ClientBuildingInfo { get; set; }
        public virtual DbSet<ClientInfos> ClientInfos { get; set; }
        public virtual DbSet<ClientSubmissions> ClientSubmissions { get; set; }
        public virtual DbSet<CoverageLineItems> CoverageLineItems { get; set; }
        public virtual DbSet<CoverageVehicleTypes> CoverageVehicleTypes { get; set; }
        public virtual DbSet<Coverages> Coverages { get; set; }
        public virtual DbSet<Drivers> Drivers { get; set; }
        public virtual DbSet<Equipments> Equipments { get; set; }
        public virtual DbSet<FileInfos> FileInfos { get; set; }
        public virtual DbSet<InforceInfos> InforceInfos { get; set; }
        public virtual DbSet<InsurerInfos> InsurerInfos { get; set; }
        public virtual DbSet<InsurerSubMissions> InsurerSubMissions { get; set; }
        public virtual DbSet<Notes> Notes { get; set; }
        public virtual DbSet<Policies> Policies { get; set; }
        public virtual DbSet<RemoveDriverRequests> RemoveDriverRequests { get; set; }
        public virtual DbSet<RemoveEquipmentRequests> RemoveEquipmentRequests { get; set; }
        public virtual DbSet<RemoveLocationRequests> RemoveLocationRequests { get; set; }
        public virtual DbSet<RemoveVehicleRequests> RemoveVehicleRequests { get; set; }
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<SubmissionCoverageChilditemDetails> SubmissionCoverageChilditemDetails { get; set; }
        public virtual DbSet<SubmissionCoverageOtherDetails> SubmissionCoverageOtherDetails { get; set; }
        public virtual DbSet<SubmittionDetails> SubmittionDetails { get; set; }
        public virtual DbSet<UploadedDocRequests> UploadedDocRequests { get; set; }
        public virtual DbSet<Vehicles> Vehicles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySql("server=insurance-rdb.cdgtmz3zqcy1.us-east-1.rds.amazonaws.com;port=3306;user=admin;password=Mohawk123;database=insurance", x => x.ServerVersion("8.0.27-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AddDriverRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.BirthDate)
                    .HasColumnName("birthDate")
                    .HasColumnType("date");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.Conviction)
                    .HasColumnName("conviction")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DriverTrain)
                    .HasColumnName("driverTrain")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FirstName)
                    .HasColumnName("firstName")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LastName)
                    .HasColumnName("lastName")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LicenseNumber)
                    .HasColumnName("licenseNumber")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LicenseYear)
                    .HasColumnName("licenseYear")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<AddEquipmentRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.Make)
                    .HasColumnName("make")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Model)
                    .HasColumnName("model")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.SerialNumber)
                    .HasColumnName("serialNumber")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Value)
                    .HasColumnName("value")
                    .HasColumnType("decimal(10,0)");

                entity.Property(e => e.Year).HasColumnName("year");
            });

            modelBuilder.Entity<AddLocationRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Alarm)
                    .HasColumnName("alarm")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BuildingConstr)
                    .HasColumnName("buildingConstr")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BuildingType)
                    .HasColumnName("buildingType")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasColumnType("varchar(10)");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.ConstrType)
                    .HasColumnName("constrType")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DeckConstruction)
                    .HasColumnName("deckConstruction")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FloorConstr)
                    .HasColumnName("floorConstr")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Mortgage)
                    .HasColumnName("mortgage")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PostalCode)
                    .HasColumnName("postalCode")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrimaryOp)
                    .HasColumnName("primaryOp")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Province)
                    .HasColumnName("province")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.RoofCovering)
                    .HasColumnName("roofCovering")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SizeSqft)
                    .HasColumnName("sizeSqft")
                    .HasColumnType("decimal(10,0)");

                entity.Property(e => e.Sprinklered)
                    .HasColumnName("sprinklered")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.StoreysNumber).HasColumnName("storeysNumber");

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.WallConstr)
                    .HasColumnName("wallConstr")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.YearBuilt).HasColumnName("yearBuilt");
            });

            modelBuilder.Entity<AddVehicleRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Class)
                    .HasColumnName("class")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.ListPrice)
                    .HasColumnName("listPrice")
                    .HasColumnType("decimal(10,0)");

                entity.Property(e => e.Make)
                    .HasColumnName("make")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Model)
                    .HasColumnName("model")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OccassionDriver)
                    .HasColumnName("occassionDriver")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrimaryDriver)
                    .HasColumnName("primaryDriver")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Radius)
                    .HasColumnName("radius")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Type)
                    .HasColumnName("type")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Vin)
                    .HasColumnName("vin")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Weight)
                    .HasColumnName("weight")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Year).HasColumnName("year");
            });

            modelBuilder.Entity<AddressRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.PostalCode)
                    .HasColumnName("postalCode")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Province)
                    .HasColumnName("province")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<AdminInfos>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("firstName")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("lastName")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<BindingInfos>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreate).HasColumnType("timestamp");

                entity.Property(e => e.EffectiveDate).HasColumnType("timestamp");

                entity.Property(e => e.ExpiryDate).HasColumnType("timestamp");

                entity.Property(e => e.PaymentType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TotalBoundPremimum)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<CertificateInsurances>(entity =>
            {
                entity.Property(e => e.Address)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.HolderName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.InsuranceType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.InsuredName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Internal)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.NoticeDays)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Operation)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PostalCode)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<CertificateRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PostalCode)
                    .HasColumnName("postalCode")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Province)
                    .HasColumnName("province")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<ClientBuildingInfo>(entity =>
            {
                entity.Property(e => e.Alarm)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Basement)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BuildingConstruction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BuildingType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.City)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ClientOrder)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedByUser)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.DateOfDelete).HasColumnType("timestamp");

                entity.Property(e => e.DistanceToFireHall)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ElectricalPanel)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ElectricalWiring)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FirstMortgageeAddress)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FirstMortgageeName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Foundation)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.GradeFloorConstruction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Heating)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Location)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Mortgaee)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.NoOfStoreys)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Pluming)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PostalCode)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrimaryOperation)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Province)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RoofCovering)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RoofDeckconstruction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SecondMortgageeAddress)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SecondMortgageeName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SizeSqft)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Sprinklered)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SqftOfAreaOccupied)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TypeConstiction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.WallConstruction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<ClientInfos>(entity =>
            {
                entity.HasIndex(e => e.BusinessClassId)
                    .HasName("BusinessClassId")
                    .IsUnique();

                entity.HasIndex(e => e.Id)
                    .HasName("Id")
                    .IsUnique();

                entity.HasIndex(e => e.SubClassId)
                    .HasName("SubClassId")
                    .IsUnique();

                entity.Property(e => e.AccountNumber)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.BusinessName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ClientType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedText)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CurrentInsurer)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FullTime)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OperationName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PartTime)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.QuoteDate).HasColumnType("timestamp");

                entity.Property(e => e.WebSiteUrl)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.YearStarted)
                    .HasColumnType("varchar(4)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<ClientSubmissions>(entity =>
            {
                entity.HasIndex(e => e.ClientId)
                    .HasName("ClientId")
                    .IsUnique();

                entity.HasIndex(e => e.StatusId)
                    .HasName("StatusId")
                    .IsUnique();

                entity.Property(e => e.Insurer)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PolicyEffectiveDate).HasColumnType("timestamp");

                entity.Property(e => e.PolicyExpiryDate).HasColumnType("timestamp");

                entity.Property(e => e.PolicyNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PolicyQuoteDate).HasColumnType("timestamp");

                entity.Property(e => e.SubmissionCreateDate).HasColumnType("timestamp");

                entity.Property(e => e.SubmissionNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SubmittedDate).HasColumnType("timestamp");
            });

            modelBuilder.Entity<CoverageLineItems>(entity =>
            {
                entity.HasIndex(e => e.CoverageId)
                    .HasName("CoverageId");

                entity.HasIndex(e => e.Id)
                    .HasName("Id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.CreatedByUser)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp(6)");

                entity.Property(e => e.Description)
                    .HasColumnType("varchar(625)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.GroupName)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.HasOne(d => d.Coverage)
                    .WithMany(p => p.CoverageLineItems)
                    .HasForeignKey(d => d.CoverageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("CoverageLineItems_ibfk_1");
            });

            modelBuilder.Entity<CoverageVehicleTypes>(entity =>
            {
                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.NickName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhysicalDamage)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhysicalDamageDeductable)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TranspotationReplacement)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.VehicleType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.WaiverDepreciation)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Coverages>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Drivers>(entity =>
            {
                entity.Property(e => e.Birthdate)
                    .HasColumnName("birthdate")
                    .HasColumnType("date");

                entity.Property(e => e.Conviction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.DriverLicense)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DriverTrain)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.FullName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Equipments>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientID");

                entity.Property(e => e.Make)
                    .HasColumnName("make")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Model)
                    .HasColumnName("model")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SerialNumber)
                    .IsRequired()
                    .HasColumnName("serialNumber")
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Value).HasColumnName("value");

                entity.Property(e => e.Year).HasColumnName("year");
            });

            modelBuilder.Entity<FileInfos>(entity =>
            {
                entity.Property(e => e.Bytes).HasColumnType("blob");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfcreated).HasColumnType("timestamp");

                entity.Property(e => e.ExtraParams)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.MimeType)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Modified).HasColumnType("timestamp");

                entity.Property(e => e.ModifiedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Name)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ProviderName)
                    .HasColumnType("varchar(45)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SizeMb)
                    .HasColumnName("SizeMB")
                    .HasColumnType("decimal(6,3)");
            });

            modelBuilder.Entity<InforceInfos>(entity =>
            {
                entity.HasIndex(e => e.InsurerQuoteId)
                    .HasName("InsurerQuoteId")
                    .IsUnique();

                entity.Property(e => e.AdditionalComments)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CancelEffectiveDate).HasColumnType("timestamp");

                entity.Property(e => e.CancelReason)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CancellationOtherreason)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CancellationPolicyNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.PolicyNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<InsurerInfos>(entity =>
            {
                entity.HasIndex(e => e.Id)
                    .HasName("Id")
                    .IsUnique();

                entity.HasIndex(e => e.InsurerQuoteId)
                    .HasName("InsurerQuoteId")
                    .IsUnique();

                entity.Property(e => e.City)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.InsuranceQuoteNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.InsurerName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PostalCode)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.QuoteExpiryDate).HasColumnType("timestamp");

                entity.Property(e => e.Reason)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ReasonDetails)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Street)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TotalBoundPremimum)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TotalPremimum)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UnderWritter)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.UnderWritterEmail)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<InsurerSubMissions>(entity =>
            {
                entity.HasIndex(e => e.ClientId)
                    .HasName("ClientId")
                    .IsUnique();

                entity.HasIndex(e => e.ClientInfoId)
                    .HasName("ClientInfoId")
                    .IsUnique();

                entity.HasIndex(e => e.ClientSubmissionId)
                    .HasName("ClientSubmissionId")
                    .IsUnique();

                entity.Property(e => e.InsurerQuotationNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PolicyNo)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.SubmissionCreateDate).HasColumnType("timestamp");
            });

            modelBuilder.Entity<Notes>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DocumentCode)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Dueon).HasColumnType("timestamp");

                entity.Property(e => e.NoteCode)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.NoteDate).HasColumnType("timestamp");

                entity.Property(e => e.Notes1)
                    .HasColumnName("Notes")
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PolicyType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<Policies>(entity =>
            {
                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.IsActive)
                    .HasColumnType("varchar(10)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<RemoveDriverRequests>(entity =>
            {
                entity.ToTable("removeDriverRequests");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.DriverId).HasColumnName("driverId");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<RemoveEquipmentRequests>(entity =>
            {
                entity.ToTable("removeEquipmentRequests");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.EquipId).HasColumnName("equipId");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<RemoveLocationRequests>(entity =>
            {
                entity.ToTable("removeLocationRequests");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.LocationId).HasColumnName("locationId");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<RemoveVehicleRequests>(entity =>
            {
                entity.ToTable("removeVehicleRequests");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.VehicleId).HasColumnName("vehicleId");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("status");

                entity.Property(e => e.CreatedBy)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.Description)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<SubmissionCoverageChilditemDetails>(entity =>
            {
                entity.HasIndex(e => e.ChildItemId)
                    .HasName("ChildItemId")
                    .IsUnique();

                entity.HasIndex(e => e.SubmissionDetailsId)
                    .HasName("SubmissionDetailsId")
                    .IsUnique();

                entity.Property(e => e.CreatedByUser)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.LocationId)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ValData)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<SubmissionCoverageOtherDetails>(entity =>
            {
                entity.HasIndex(e => e.CoverageId)
                    .HasName("CoverageId")
                    .IsUnique();

                entity.HasIndex(e => e.InsurerQuoteId)
                    .HasName("InsurerQuoteId")
                    .IsUnique();

                entity.HasIndex(e => e.PolicyId)
                    .HasName("PolicyId")
                    .IsUnique();

                entity.HasIndex(e => e.SubmissionId)
                    .HasName("SubmissionId")
                    .IsUnique();

                entity.Property(e => e.CreatedByUser)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.GroupName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LineItem2)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LineItemText)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.LocationId)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            modelBuilder.Entity<SubmittionDetails>(entity =>
            {
                entity.HasIndex(e => e.CoverageId)
                    .HasName("CoverageId")
                    .IsUnique();

                entity.HasIndex(e => e.CoverageItemId)
                    .HasName("CoverageItemId")
                    .IsUnique();

                entity.HasIndex(e => e.InsurerQuoteId)
                    .HasName("InsurerQuoteId")
                    .IsUnique();

                entity.HasIndex(e => e.PolicyId)
                    .HasName("PolicyId")
                    .IsUnique();

                entity.HasIndex(e => e.StructureId)
                    .HasName("StructureId")
                    .IsUnique();

                entity.HasIndex(e => e.SubmissionId)
                    .HasName("SubmissionId")
                    .IsUnique();

                entity.Property(e => e.CreatedByUser)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.LocationId)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Slimit).HasColumnName("SLimit");
            });

            modelBuilder.Entity<UploadedDocRequests>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ClientId).HasColumnName("clientId");

                entity.Property(e => e.NewDoc)
                    .IsRequired()
                    .HasColumnName("newDoc")
                    .HasColumnType("varchar(50)")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RequestTime)
                    .HasColumnName("requestTime")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<Vehicles>(entity =>
            {
                entity.Property(e => e.AttachedMachinery)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.AttachedMachineryDescription)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.AttachedMachineryValue).HasColumnType("decimal(13,4)");

                entity.Property(e => e.BodyType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.DateOfCreated).HasColumnType("timestamp");

                entity.Property(e => e.LienholderLessor)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.ListPriceNew).HasColumnType("decimal(13,4)");

                entity.Property(e => e.OccationalBirthDate).HasColumnType("date");

                entity.Property(e => e.OccationalConviction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OccationalDriverDescription)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OccationalDriverName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OccationalDriverTrain)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.OwnedLeasedFinanced)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhysicalDamage)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PhysicalDamageDeductible)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrincipalBirthDate).HasColumnType("date");

                entity.Property(e => e.PrincipalConviction)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrincipalDriverDescription)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrincipalDriverName)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.PrincipalDriverTrain)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RadiusOperation)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.RegisteredOwner)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.TransportationReplacement)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.VehicleClass)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.VehicleIdentificationNumber)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.VehicleMake)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.VehicleModel)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.VehicleType)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.Weight)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");

                entity.Property(e => e.WeiverDepreciation)
                    .HasColumnType("text")
                    .HasCharSet("utf8mb4")
                    .HasCollation("utf8mb4_0900_ai_ci");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
