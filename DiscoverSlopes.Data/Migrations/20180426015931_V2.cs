using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace DiscoverSlopes.Data.Migrations
{
    public partial class V2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trails_SkiResorts_SkiResortstId",
                table: "Trails");

            migrationBuilder.RenameColumn(
                name: "SkiResortstId",
                table: "Trails",
                newName: "SkiResortsId");

            migrationBuilder.RenameIndex(
                name: "IX_Trails_SkiResortstId",
                table: "Trails",
                newName: "IX_Trails_SkiResortsId");

            migrationBuilder.RenameColumn(
                name: "SkiResortstId",
                table: "SkiResorts",
                newName: "SkiResortsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trails_SkiResorts_SkiResortsId",
                table: "Trails",
                column: "SkiResortsId",
                principalTable: "SkiResorts",
                principalColumn: "SkiResortsId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Trails_SkiResorts_SkiResortsId",
                table: "Trails");

            migrationBuilder.RenameColumn(
                name: "SkiResortsId",
                table: "Trails",
                newName: "SkiResortstId");

            migrationBuilder.RenameIndex(
                name: "IX_Trails_SkiResortsId",
                table: "Trails",
                newName: "IX_Trails_SkiResortstId");

            migrationBuilder.RenameColumn(
                name: "SkiResortsId",
                table: "SkiResorts",
                newName: "SkiResortstId");

            migrationBuilder.AddForeignKey(
                name: "FK_Trails_SkiResorts_SkiResortstId",
                table: "Trails",
                column: "SkiResortstId",
                principalTable: "SkiResorts",
                principalColumn: "SkiResortstId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
