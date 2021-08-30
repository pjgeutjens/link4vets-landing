using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Apps
{
    public class Details
    {
        public class Query : IRequest<App>
        {
            public Guid Id { get; set; }
        }
        
        public class Handler : IRequestHandler<Query, App>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<App> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Apps.FindAsync(request.Id);
            }
        }
    }
}