using System;
using System.Collections.Generic;

namespace TravelAppAPI.Models;

public partial class TravelUser
{
    public int Id { get; set; }

    public string Username { get; set; } = null!;

    public bool? Lgbt { get; set; }

    public bool? Gender { get; set; }

    public int? Age { get; set; }

    public bool Passport { get; set; }

    public virtual ICollection<Survey> Surveys { get; set; } = new List<Survey>();
}
