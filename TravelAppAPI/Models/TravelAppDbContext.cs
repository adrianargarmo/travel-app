﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TravelAppAPI.Models;

public partial class TravelAppDbContext : DbContext
{
    public TravelAppDbContext(DbContextOptions<TravelAppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Location> Locations { get; set; }

    public virtual DbSet<Survey> Surveys { get; set; }

    public virtual DbSet<TravelUser> TravelUsers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Location>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Location__3214EC07D6362009");

            entity.Property(e => e.LocationName).HasMaxLength(30);
        });

        modelBuilder.Entity<Survey>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Survey__3214EC075352D9C4");

            entity.ToTable("Survey");

            entity.Property(e => e.Location)
                .HasMaxLength(50)
                .HasDefaultValueSql("('')");
            entity.Property(e => e.Message)
                .IsUnicode(false)
                .HasDefaultValueSql("('')");
            entity.Property(e => e.Rating).HasDefaultValueSql("((0))");
            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .IsUnicode(false);

            entity.HasOne(d => d.User).WithMany(p => p.Surveys)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Survey__UserId__628FA481");
        });

        modelBuilder.Entity<TravelUser>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__TravelUs__3214EC07DCFDB2A0");

            entity.ToTable("TravelUser");

            entity.Property(e => e.Age).HasDefaultValueSql("((0))");
            entity.Property(e => e.Gender).HasDefaultValueSql("((0))");
            entity.Property(e => e.Lgbt)
                .HasDefaultValueSql("((0))")
                .HasColumnName("LGBT");
            entity.Property(e => e.Username)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
