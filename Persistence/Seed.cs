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
            
            if (!context.Apps.Any())
            {
                var apps = new List<App>
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

                await context.Apps.AddRangeAsync(apps);
            }

            if (!context.Contacts.Any())
            {
                var contacts = new List<Contact>
                {
                    new Contact
                    {
                        Category = "Practice",
                        Description = "Dierenartsenpraktijk in Heusden-Zolder",
                        Email = "info@voortbroek.be",
                        DisplayName = "DAP Het Voortbroek",
                        Address = "Koerselsebaan 180",
                        Zip = "3550",
                        City = "Heusden-Zolder",
                        Country = "BE",
                        Website = "https://www.voortbroek.be/",
                        PhoneNumber = "+32 476 891 381"
                    },
                    new Contact
                    {
                        Category = "Practice",
                        Description = "Test Practice 2",
                        Email = "info@testpractice2.be",
                        DisplayName = "Test Praktijk 2",
                        Address = "Teststraat 1",
                        Zip = "1234",
                        City = "Ergens-In",
                        Country = "BE",
                        Website = "https://www.testpractice2.be/",
                        PhoneNumber = "+32 123 456"
                    },
                    new Contact
                    {
                        Category = "Practice",
                        Description = "Test Practice 3",
                        Email = "info@testpractice3.be",
                        DisplayName = "Test Praktijk 3",
                        Address = "Teststraat 1",
                        Zip = "1334",
                        City = "Ergens-In",
                        Country = "BE",
                        Website = "https://www.testpractice3.be/",
                        PhoneNumber = "+32 133 456"
                    },
                    new Contact
                    {
                        Category = "Practice",
                        Description = "Test Practice 4",
                        Email = "info@testpractice4.be",
                        DisplayName = "Test Praktijk 4",
                        Address = "Teststraat 1",
                        Zip = "1444",
                        City = "Ergens-In",
                        Country = "BE",
                        Website = "https://www.testpractice4.be/",
                        PhoneNumber = "+42 133 456",
                        CreatedAt = DateTime.Now.AddMonths(-1),
                    },
                    new Contact
                    {
                        Category = "Professional Organisation",
                        Description = "Beroepsvereniging voor dierenartsen",
                        Email = "info@veda.vlaanderen.be",
                        DisplayName = "VeDa",
                        Address = "Industriepark-West 75",
                        Zip = "9100",
                        City = "Sint-Niklaas",
                        Country = "BE",
                        Website = "https://veda.vlaanderen/",
                        PhoneNumber = "+32 3 780 17 90",
                        CreatedAt = DateTime.Now.AddDays(-6)
                    },
                    new Contact
                    {
                        Category = "Professional Organisation",
                        Description = "Test Organisation 1",
                        Email = "info@testorg3.be",
                        DisplayName = "Test Praktijk 3",
                        Address = "Teststraat 1",
                        Zip = "1134",
                        City = "ErgensAnders",
                        Country = "BE",
                        Website = "https://www.testorg3.be/",
                        PhoneNumber = "+32 133 456",
                        CreatedAt = DateTime.Now.AddMonths(-2),
                    },
                    new Contact
                    {
                        Category = "Professional Organisation 2",
                        Description = "Test Organisation 2",
                        Email = "info@testorg3.be",
                        DisplayName = "Test Praktijk 3",
                        Address = "Teststraat 2",
                        Zip = "2234",
                        City = "ErgensAnders",
                        Country = "BE",
                        Website = "https://www.testorg3.be/",
                        PhoneNumber = "+32 233 456",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                    new Contact
                    {
                        Category = "Professional Organisation 3",
                        Description = "Test Organisation 3",
                        Email = "info@testorg3.be",
                        DisplayName = "Test Praktijk 3",
                        Address = "Teststraat 3",
                        Zip = "3334",
                        City = "ErgensAnders",
                        Country = "BE",
                        Website = "https://www.testorg3.be/",
                        PhoneNumber = "+32 333 456",
                        CreatedAt = DateTime.Now.AddDays(-4)
                    },
                    new Contact
                    {
                        Category = "Breeder",
                        Description = "Golden Retriever Kennel",
                        Email = "info@distelheide.be",
                        DisplayName = "Van De Distelheide Golden Retriever Kennel",
                        Address = "Broekstraat 83",
                        Zip = "2491",
                        City = "Olmen",
                        Country = "BE",
                        Website = "https://www.distelheide.be",
                        PhoneNumber = "+32 14 309 614",
                        GsmNumber = "+32 476 606 402",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                    new Contact
                    {
                        Category = "Breeder",
                        Description = "Test Breeder 1",
                        Email = "info@testbreeder1.be",
                        DisplayName = "Test Fokker 1",
                        Address = "Teststraat 1",
                        Zip = "1138",
                        City = "NogErgensAnders",
                        Country = "BE",
                        Website = "https://www.testbreeder1.be/",
                        PhoneNumber = "+32 139 456",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                    new Contact
                    {
                        Category = "Breeder",
                        Description = "Test Breeder 2",
                        Email = "info@testbreeder2.be",
                        DisplayName = "Test Fokker 2",
                        Address = "Teststraat 2",
                        Zip = "2238",
                        City = "NogErgensAnders",
                        Country = "BE",
                        Website = "https://www.testbreeder2.be/",
                        PhoneNumber = "+32 239 456",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                    new Contact
                    {
                        Category = "Breeder",
                        Description = "Test Breeder 3",
                        Email = "info@testbreeder3.be",
                        DisplayName = "Test Fokker 3",
                        Address = "Teststraat 3",
                        Zip = "3338",
                        City = "NogErgensAnders",
                        Country = "BE",
                        Website = "https://www.testbreeder3.be/",
                        PhoneNumber = "+32 339 456",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                    new Contact
                    {
                        Category = "Breeder",
                        Description = "Test Breeder 4",
                        Email = "info@testbreeder4.be",
                        DisplayName = "Test Fokker 4",
                        Address = "Teststraat 4",
                        Zip = "4438",
                        City = "NogErgensAnders",
                        Country = "BE",
                        Website = "https://www.testbreeder4.be/",
                        PhoneNumber = "+32 439 456",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                };

                await context.Contacts.AddRangeAsync(contacts);
            }
            await context.SaveChangesAsync();
        }
    }
}