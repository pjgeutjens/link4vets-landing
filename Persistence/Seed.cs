using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Domain.Localization;
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
                var applications = new List<App>
                {
                    new App
                    {
                        Name = "ContactList",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Contacten Lijst"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Contacts List"
                                }
                            }
                        },
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Een lijst met nuttige contactinformatie"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "A list of useful contact information"
                                }
                            }
                        },
                        Category = "Listing",
                        BaseUrl = "https://contacts.link4vetsportal.be",
                        IsExternal = false,
                    },
                    new App
                    {
                        Name = "RoadMap",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Wegwijzer"
                                },
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Roadmap"
                                }
                            }
                        },
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "De link4vets Informatie Wegwijzer"
                                },
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "The Link4Vets Information Roadmap"
                                }
                            }
                        },
                        Category = "Library",
                        BaseUrl = "https://roadmap.link4vetsportal.be",
                        IsExternal = false,
                    },
                    new App
                    {
                        Name = "PuppyDatabase",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Puppy Databank"
                                },
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Puppy Database"
                                }
                            }
                        },
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "De link4vets Puppy Database"
                                },
                                new Localization
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "The Link4Vets Puppy Database"
                                }
                            }
                        },
                        Category = "Database",
                        BaseUrl = "https://nestjes.link4vets.be",
                        IsExternal = true,
                    },

                };

                await context.Apps.AddRangeAsync(applications);
            }

            if (!context.Contacts.Any())
            {
                var contacts = new List<Contact>
                {
                    new()
                    {
                        Category = "Practice",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Dierenartsenpraktijk in Heusden-Zolder"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Veterinary Practice in Heusden-Zolder"
                                }
                            }
                        },
                        Email = "info@voortbroek.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "DAP Het Voortbroek"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Het Voortbroek"
                                }
                            }
                        },
                        Address = "Koerselsebaan 180",
                        Zip = "3550",
                        City = "Heusden-Zolder",
                        Country = "BE",
                        Website = "https://www.voortbroek.be/",
                        PhoneNumber = "+32 476 891 381"
                    },
                    new()
                    {
                        Category = "Practice",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Praktijk 2"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Practice 2"
                                }
                            }
                        },
                        Email = "info@testpractice2.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Praktijk 2"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Practice 2"
                                }
                            }
                        },
                        Address = "Teststraat 1",
                        Zip = "1234",
                        City = "Ergens-In",
                        Country = "BE",
                        Website = "https://www.testpractice2.be/",
                        PhoneNumber = "+32 123 456"
                    },
                    new()
                    {
                        Category = "Practice",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Praktijk 3"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Practice 3"
                                }
                            }
                        },
                        Email = "info@testpractice3.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Praktijk 3"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Practice 3"
                                }
                            }
                        },
                        Address = "Teststraat 1",
                        Zip = "1334",
                        City = "Ergens-In",
                        Country = "BE",
                        Website = "https://www.testpractice3.be/",
                        PhoneNumber = "+32 133 456"
                    },
                    new()
                    {
                        Category = "Professional Organisation",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Beroepsvereniging voor Dierenartsen"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Professional Veterinary Organisation"
                                }
                            }
                        },
                        Email = "info@veda.vlaanderen.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "VeDa"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "VeDa"
                                }
                            }
                        },
                        Address = "Industriepark-West 75",
                        Zip = "9100",
                        City = "Sint-Niklaas",
                        Country = "BE",
                        Website = "https://veda.vlaanderen/",
                        PhoneNumber = "+32 3 780 17 90",
                        CreatedAt = DateTime.Now.AddDays(-6)
                    },
                    new()
                    {
                        Category = "Professional Organisation",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Organisatie 1"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Organisation 1"
                                }
                            }
                        },
                        Email = "info@testorg3.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Organisatie 1"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Organisation 1"
                                }
                            }
                        },
                        Address = "Teststraat 1",
                        Zip = "1134",
                        City = "ErgensAnders",
                        Country = "BE",
                        Website = "https://www.testorg3.be/",
                        PhoneNumber = "+32 133 456",
                        CreatedAt = DateTime.Now.AddMonths(-2),
                    },
                    new()
                    {
                        Category = "Professional Organisation 2",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Organisatie 2"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Organisation 2"
                                }
                            }
                        },
                        Email = "info@testorg3.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Test Organisatie 2"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Test Organisation 2"
                                }
                            }
                        },
                        Address = "Teststraat 2",
                        Zip = "2234",
                        City = "ErgensAnders",
                        Country = "BE",
                        Website = "https://www.testorg3.be/",
                        PhoneNumber = "+32 233 456",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    },
                    new()
                    {
                        Category = "Breeder",
                        Description = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Golden Retriever kweker en kennel"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Golden Retriever Breeder and Kennel"
                                }
                            }
                        },
                        Email = "info@distelheide.be",
                        DisplayName = new LocalizationSet
                        {
                            Id = new Guid(),
                            Localizations = new List<Localization>
                            {
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "nl-BE"
                                    },
                                    Value = "Van De Distelheide"
                                },
                                new()
                                {
                                    Culture = new Culture
                                    {
                                        Code = "en-US"
                                    },
                                    Value = "Van De Distelheide"
                                }
                            }
                        },
                        Address = "Broekstraat 83",
                        Zip = "2491",
                        City = "Olmen",
                        Country = "BE",
                        Website = "https://www.distelheide.be",
                        PhoneNumber = "+32 14 309 614",
                        GsmNumber = "+32 476 606 402",
                        CreatedAt = DateTime.Now.AddDays(-3)
                    }
                };

                await context.Contacts.AddRangeAsync(contacts);
            }
            await context.SaveChangesAsync();
        }
    }
}