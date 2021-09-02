using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context, UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var users = new List<AppUser>
                {
                    new AppUser {DisplayName = "Bob", UserName = "bob", UniqueId = "N1234", Email = "bob@test.com"},
                    new AppUser {DisplayName = "Jean", UserName = "jean", UniqueId = "F4568", Email = "jean@test.com"},
                    new AppUser {DisplayName = "Emma", UserName = "emma", UniqueId = "N1212", Email = "emma@test.com"},
                    new AppUser {DisplayName = "Jane", UserName = "jane", UniqueId = "N2323", Email = "jane@test.com"},
                    new AppUser {DisplayName = "Christine", UserName = "christine", UniqueId = "F2525", Email = "christine@test.com"},
                };

                foreach (var user in users)
                {
                    await userManager.CreateAsync(user, "Pa$$w0rd");
                }
            }
            
            if (context.Apps.Any()) return;
            
            var activities = new List<App>
            {
                new App
                {
                    Name = "ContactList",
                    DisplayName = "Contact List",
                    Description = "A list of useful contacts",
                    Category = "Listing",
                    BaseUrl = "https://contacts.link4vetsportal.be",
                    IsExternal = false,
                },
                new App
                {
                    Name = "RoadMap",
                    DisplayName = "Road Map",
                    Description = "A searchable database of information",
                    Category = "Library",
                    BaseUrl = "https://roadmap.link4vetsportal.be",
                    IsExternal = false,
                },
                new App
                {
                    Name = "PuppyDatabase",
                    DisplayName = "Puppy Database",
                    Description = "The Link4Vets puppy database",
                    Category = "Database",
                    BaseUrl = "https://nestjes.link4vets.be",
                    IsExternal = true,
                },
                
            };

            await context.Apps.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}