﻿// <auto-generated />
using DiscoverSlopes.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace DiscoverSlopes.Data.Migrations
{
    [DbContext(typeof(SkiResortContext))]
    [Migration("20180426015931_V2")]
    partial class V2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DiscoverSlopes.Domain.SkiResorts", b =>
                {
                    b.Property<int>("SkiResortsId")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Latitude");

                    b.Property<string>("Logo");

                    b.Property<decimal>("Longitude");

                    b.Property<string>("Name");

                    b.HasKey("SkiResortsId");

                    b.ToTable("SkiResorts");
                });

            modelBuilder.Entity("DiscoverSlopes.Domain.Trails", b =>
                {
                    b.Property<int>("TrailsId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.Property<int?>("SkiResortsId");

                    b.HasKey("TrailsId");

                    b.HasIndex("SkiResortsId");

                    b.ToTable("Trails");
                });

            modelBuilder.Entity("DiscoverSlopes.Domain.Trails", b =>
                {
                    b.HasOne("DiscoverSlopes.Domain.SkiResorts", "SkiResorts")
                        .WithMany("Trails")
                        .HasForeignKey("SkiResortsId");
                });
#pragma warning restore 612, 618
        }
    }
}
