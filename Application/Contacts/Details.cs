using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Contacts
{
    public class Details
    {
        public class Query : IRequest<Result<Contact>>
        {
            public Guid Id { get; set; }
        }
        
        public class Handler : IRequestHandler<Query, Result<Contact>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<Contact>> Handle(Query request, CancellationToken cancellationToken)
            {
                var app = await _context.Contacts.FindAsync(request.Id);
                return Result<Contact>.Success(app);
            }
        }
    }
}