using System;

namespace Domain
{
    public class Contact
    {
        public Guid Id { get; set; }
        public string DisplayName { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public string PhoneNumber { get; set; }
        public string GsmNumber { get; set; }
        public string Email { get; set; }
        public string Website { get; set; }
        public string Address { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}