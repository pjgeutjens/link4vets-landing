using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Apps
{
    public class List
    {
        public class Query : IRequest<List<App>>
        {
            
        } 
        
        public class Handler : IRequestHandler<Query, List<App>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<List<App>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.Apps.ToListAsync(cancellationToken);
            }
        }
    }
}