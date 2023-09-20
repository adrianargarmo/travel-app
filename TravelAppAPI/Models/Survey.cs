using System;
using System.Collections.Generic;

namespace TravelAppAPI.Models;

public partial class Survey
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string Location { get; set; } = null!;

    public string Message { get; set; } = null!;

    public int? Rating { get; set; }

    public string? Username { get; set; }
}
