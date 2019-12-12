using RESTApi.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace RESTApi.DAL
{
    public class CustomerDbContext : DbContext
    {
        public CustomerDbContext() : base("CustomerDbContext") { }
        public DbSet<Customer> Customers { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}