using System;
using System.Collections.Generic;

namespace TravelAppAPI.Models;

public partial class Location
{
    public int Id { get; set; }

    public string LocationName { get; set; } = null!;

    public double LatitudeNorth { get; set; }

    public double LongitudeWest { get; set; }

    public double? LatitudeSouth { get; set; }

    public double? LongitudeEast { get; set; }
}
