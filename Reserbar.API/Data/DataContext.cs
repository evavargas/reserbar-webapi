using Microsoft.EntityFrameworkCore;
using Reserbar.API.Models;

namespace Reserbar.API.Data{
    public class DataContext : DbContext 
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<Value> Values {get; set;}//La clase de Models que le corresponde

    }
}