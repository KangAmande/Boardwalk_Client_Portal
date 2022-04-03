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

        public virtual DbSet<BindingInfos> BindingInfos { get; set; }
        public virtual DbSet<CertificateInsurances> CertificateInsurances { get; set; }
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
        public virtual DbSet<Status> Status { get; set; }
        public virtual DbSet<SubmissionCoverageChilditemDetails> SubmissionCoverageChilditemDetails { get; set; }
        public virtual DbSet<SubmissionCoverageOtherDetails> SubmissionCoverageOtherDetails { get; set; }
        public virtual DbSet<Vehicles> Vehicles { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
             #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=insurance-rdb.cdgtmz3zqcy1.us-east-1.rds.amazonaws.com;port=3306;user=admin;password=Mohawk123;database=insurance");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ClientBuildingInfo>(entity =>
            {
                entity.Property(e => e.Street).HasColumnName("street");

                entity.Property(e => e.YearBuilt).HasColumnType("year");
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

                entity.Property(e => e.YearStarted).HasMaxLength(4);
            });

            modelBuilder.Entity<ClientSubmissions>(entity =>
            {
                entity.HasIndex(e => e.ClientId)
                    .HasName("ClientId")
                    .IsUnique();

                entity.HasIndex(e => e.StatusId)
                    .HasName("StatusId")
                    .IsUnique();
            });

            modelBuilder.Entity<CoverageLineItems>(entity =>
            {
                entity.HasIndex(e => e.CoverageId)
                    .HasName("CoverageId");

                entity.HasIndex(e => e.Id)
                    .HasName("Id_UNIQUE")
                    .IsUnique();

                entity.Property(e => e.CreatedByUser).HasMaxLength(45);

                entity.Property(e => e.Description).HasMaxLength(625);

                entity.Property(e => e.GroupName).HasMaxLength(45);

                entity.HasOne(d => d.Coverage)
                    .WithMany(p => p.CoverageLineItems)
                    .HasForeignKey(d => d.CoverageId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("CoverageLineItems_ibfk_1");
            });

            modelBuilder.Entity<Drivers>(entity =>
            {
                entity.Property(e => e.Birthdate)
                    .HasColumnName("birthdate")
                    .HasColumnType("date");

                entity.Property(e => e.LicenseYear).HasColumnType("year");
            });

            modelBuilder.Entity<FileInfos>(entity =>
            {
                entity.Property(e => e.Bytes).HasColumnType("blob");

                entity.Property(e => e.ExtraParams).HasMaxLength(45);

                entity.Property(e => e.MimeType).HasMaxLength(45);

                entity.Property(e => e.Name).HasMaxLength(45);

                entity.Property(e => e.ProviderName).HasMaxLength(45);

                entity.Property(e => e.SizeMb)
                    .HasColumnName("SizeMB")
                    .HasColumnType("decimal(6,3)");
            });

            modelBuilder.Entity<InforceInfos>(entity =>
            {
                entity.HasIndex(e => e.InsurerQuoteId)
                    .HasName("InsurerQuoteId")
                    .IsUnique();
            });

            modelBuilder.Entity<InsurerInfos>(entity =>
            {
                entity.HasIndex(e => e.Id)
                    .HasName("Id")
                    .IsUnique();

                entity.HasIndex(e => e.InsurerQuoteId)
                    .HasName("InsurerQuoteId")
                    .IsUnique();
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
            });

            modelBuilder.Entity<Notes>(entity =>
            {
                entity.Property(e => e.Notes1).HasColumnName("Notes");
            });

            modelBuilder.Entity<Status>(entity =>
            {
                entity.ToTable("status");
            });

            modelBuilder.Entity<SubmissionCoverageChilditemDetails>(entity =>
            {
                entity.HasIndex(e => e.ChildItemId)
                    .HasName("ChildItemId")
                    .IsUnique();

                entity.HasIndex(e => e.SubmissionDetailsId)
                    .HasName("SubmissionDetailsId")
                    .IsUnique();
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
            });

            modelBuilder.Entity<Vehicles>(entity =>
            {
                entity.Property(e => e.AttachedMachineryValue).HasColumnType("decimal(13,4)");

                entity.Property(e => e.ListPriceNew).HasColumnType("decimal(13,4)");

                entity.Property(e => e.OccationalBirthDate).HasColumnType("date");

                entity.Property(e => e.OccationalLicenseYear).HasColumnType("year");

                entity.Property(e => e.PrincipalBirthDate).HasColumnType("date");

                entity.Property(e => e.PrincipalLicenseYear).HasColumnType("year");

                entity.Property(e => e.VehicleYear).HasColumnType("year");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
