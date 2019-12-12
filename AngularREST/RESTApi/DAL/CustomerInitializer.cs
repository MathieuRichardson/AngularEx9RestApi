using RESTApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RESTApi.DAL
{
    public class CustomerInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<CustomerDbContext>
    {
        protected override void Seed(CustomerDbContext context)
        {
            //var customers = new List<Customer>
            //{
            //new Customer{FirstName="Chris",LastName="Cusack",SSN="111-222-333"},
            //new Customer{FirstName="Jennifer",LastName="Cusack",SSN="222-333-444"},
            //new Customer{FirstName="Alex",LastName="Noseworthy",SSN="123-123-123"},
            //new Customer{FirstName="Wallace",LastName="Girvan",SSN="444-333-111"},
            //new Customer{FirstName="Cathy",LastName="Pierce",SSN="555-444-555"},
            //new Customer{FirstName="Caitlyn",LastName="Cull",SSN="233-443-222"},
            //new Customer{FirstName="Lenny",LastName="Go",SSN="555-333-444"},
            //new Customer{FirstName="Jill",LastName="Smith",SSN="234-678-543"},
            //};

            //customers.ForEach(c => context.Customers.Add(c));
            //context.SaveChanges();
        }
    }
}