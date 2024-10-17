using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities;

public class CardEducando
{
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Role { get; set; }
    public required int Idade { get; set; }
    public required string TextAbout { get; set; }
}
