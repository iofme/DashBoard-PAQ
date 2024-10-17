using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext(DbContextOptions options) : DbContext(options){
        public DbSet<AppUser> User {get; set;}
        public DbSet<CardEducando> Card { get; set; }
    }
}