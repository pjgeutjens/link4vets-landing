using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Persistence;

namespace Application.Apps
{
    public class Details
    {
        public class Query : IRequest<Result<App>>
        {
            public Guid Id { get; set; }
        }
        
        public class Handler : IRequestHandler<Query, Result<App>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<App>> Handle(Query request, CancellationToken cancellationToken)
            {
                var app = await _context.Apps.FindAsync(request.Id);
                return Result<App>.Success(app);
            }
        }
    }
}