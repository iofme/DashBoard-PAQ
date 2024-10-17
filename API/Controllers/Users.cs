using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class UsersController(DataContext context) : BaseApiController
{
    [HttpGet]
     public async Task<ActionResult<IEnumerable<AppUser>>> GetUser(){
        var users = await context.User.ToListAsync();

        return users;
    }
}
