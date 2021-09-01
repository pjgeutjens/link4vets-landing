using System.Threading;
using System.Threading.Tasks;
using Domain;
using FluentValidation;
using MediatR;
using Persistence;

namespace Application.Apps
{
    public class Create
    {
        public class Command : IRequest
        {
            public App App { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.App).SetValidator(new AppValidator());
            }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Apps.Add(request.App);
                await _context.SaveChangesAsync();
                
                return  Unit.Value;
            }
        }
    }
}