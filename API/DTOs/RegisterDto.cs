using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string DisplayName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string UserName { get; set; }
        [Required]
        [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,56}$", ErrorMessage = "Password must be complex")]

        public string Password { get; set; }
        [Required]
        [RegularExpression("[FN]\\d{4,5}$", ErrorMessage = "Unique Id must have format F1234[5] or N1234[5]")]
        public string UniqueId { get; set; }
    }
}