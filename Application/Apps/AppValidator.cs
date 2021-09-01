using Domain;
using FluentValidation;

namespace Application.Apps
{
    public class AppValidator : AbstractValidator<App>
    {
        public AppValidator()
        {
            RuleFor(x => x.Name).NotEmpty();
            RuleFor(x => x.DisplayName).NotEmpty();
            RuleFor(x => x.Category).NotEmpty();
            RuleFor(x => x.Description).NotEmpty();
        }
    }
}