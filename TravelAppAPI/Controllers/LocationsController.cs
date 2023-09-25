using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelAppAPI.Models;

namespace TravelAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationsController : ControllerBase
    {
    private readonly TravelAppDbContext _dbContext;
    public LocationsController(TravelAppDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    // get surveys
    [HttpGet]
    public ActionResult<IEnumerable<Location>> GetLocations()
    {
      return _dbContext.Locations.ToList();
    }

    // get one survey
    [HttpGet("{id}")]
    public ActionResult<Location> GetLocation(int id)
    {   
      var location = _dbContext.Locations.Find(id); 
      if (location == null) { return NotFound(); }
      return location;
    }
  }
}
