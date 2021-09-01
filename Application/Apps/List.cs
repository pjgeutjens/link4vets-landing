using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Apps
{
    public class List
    {
        public class Query : IRequest<Result<List<App>>>
        {
            
        } 
        
        public class Handler : IRequestHandler<Query, Result<List<App>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<List<App>>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<List<App>>.Success(await _context.Apps.ToListAsync(cancellationToken));
            }
        }
    }
}