using System;
using System.Threading;
using System.Threading.Tasks;
using Application.Contacts;
using Application.Core;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ContactsController : BaseApiController
    {
        [HttpGet]
        public async Task<IActionResult> GetContacts([FromQuery]PagingParams param)
        {
            return HandlePagedResult<Contact>(await Mediator.Send(new List.Query{Params = param}));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Contact>> GetContact(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query {Id = id}));
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateContact(Contact contact)
        {
            return HandleResult(await Mediator.Send(new Create.Command {Contact = contact}));
        }
    }
}