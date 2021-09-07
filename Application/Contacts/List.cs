using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Contacts
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<Contact>>>
        {
            public PagingParams Params { get; set; }
        } 
        
        public class Handler : IRequestHandler<Query, Result<PagedList<Contact>>>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Result<PagedList<Contact>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.Contacts.OrderByDescending(x => x.CreatedAt).AsQueryable();
                return Result<PagedList<Contact>>.Success(
                    await PagedList<Contact>.CreateAsync(query, request.Params.PageNumber, 
                        request.Params.PageSize));
            }
        }
    }
}