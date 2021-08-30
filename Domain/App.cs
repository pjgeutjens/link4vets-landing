using System;

namespace Domain
{
    public class App
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string BaseUrl { get; set; }
        public bool IsExternal { get; set; }
    }
}