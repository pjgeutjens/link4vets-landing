using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
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