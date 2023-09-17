using Microsoft.AspNetCore.Mvc;
using TravelAppAPI.Models;

namespace TravelAppAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ValuesController : ControllerBase
  {
    private readonly TravelAppDbContext _dbContext;
    public ValuesController(TravelAppDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    // read
    [HttpGet]
    public ActionResult<IEnumerable<Survey>> GetSurveys()
    {
      return _dbContext.Surveys.ToList();
    }

    // create
    [HttpPost]
    public IActionResult CreateSurvey([FromBody] Survey survey)
    {
      _dbContext.Surveys.Add(survey);
      _dbContext.SaveChanges();

      return CreatedAtAction(nameof(GetSurveys), new { id = survey.Id }, survey);
    }

    //update
    [HttpPut("{id}")]
    public IActionResult UpdateSurvey(int id, [FromBody] Survey updatedSurvey)
    {
      var survey = _dbContext.Surveys.Find(id);
      if (survey == null) { return NotFound(); }
      survey.UserId = updatedSurvey.UserId;
      survey.Location = updatedSurvey.Location;
      survey.Message = updatedSurvey.Message;
      survey.Rating = updatedSurvey.Rating;
      survey.Username = updatedSurvey.Username;
      _dbContext.Surveys.Update(survey);
      _dbContext.SaveChanges();
      return NoContent();
    }

    // delete
    [HttpDelete("{id}")]
    public IActionResult DeleteSurvey(int id)
    {
      var survey = _dbContext.Surveys.Find(id);

      if (survey == null) { return NotFound(); }
      _dbContext.Surveys.Remove(survey);
      _dbContext.SaveChanges();
      return NoContent();
    }
  }
}
