using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Apps;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class AppsController : BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<App>>> GetApps(CancellationToken ct)
        {
            return await Mediator.Send(new List.Query(), ct);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<App>> GetApp(Guid id)
        {
            return await Mediator.Send(new Details.Query {Id = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateApp(App app)
        {
            return Ok(await Mediator.Send(new Create.Command {App = app}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivity(Guid id, App app)
        {
            app.Id = id;
            return Ok(await Mediator.Send(new Edit.Command {App = app}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}