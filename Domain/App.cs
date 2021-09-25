using System;
using Domain.Localization;

namespace Domain
{
    public class App
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public LocalizationSet DisplayName { get; set; }
        public LocalizationSet Description { get; set; }
        public string Category { get; set; }
        public string BaseUrl { get; set; }
        public bool IsExternal { get; set; }
    }
}