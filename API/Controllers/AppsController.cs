using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.Apps;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class AppsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetApps(CancellationToken ct)
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<App>> GetApp(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query {Id = id}));
        }

        [HttpPost]
        public async Task<IActionResult> CreateApp(App app)
        {
            return HandleResult(await Mediator.Send(new Create.Command {App = app}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditApp(Guid id, App app)
        {
            app.Id = id;
            return HandleResult(await Mediator.Send(new Edit.Command {App = app}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApp(Guid id)
        {
            return HandleResult(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}