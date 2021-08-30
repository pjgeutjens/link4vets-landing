﻿using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Apps
{
    public class Edit
    {
        public class Command : IRequest
        {
            public App App { get; set; }
        }
        
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var app = await _context.Apps.FindAsync(request.App.Id);

                _mapper.Map(request.App, app);

                await _context.SaveChangesAsync();
                
                return Unit.Value;
            }
        }
    }
}