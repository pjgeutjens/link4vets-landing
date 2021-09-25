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

            await context.SaveChangesAsync();
        }
    }
}