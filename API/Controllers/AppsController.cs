using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class AppsController : BaseApiController
    {
        private readonly DataContext _context;

        public AppsController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<App>>> GetApps()
        {
            return await _context.Apps.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<App>> GetApp(Guid id)
        {
            return await _context.Apps.FindAsync(id);
        }
    }
}