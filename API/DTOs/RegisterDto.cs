using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public record RegisterDto([property: Required] string Username, [property: Required] string Gender, [property: Required] string KnownAs, [property: Required] DateOnly? DateOfBirth, [property: Required] string City, [property: Required] string Country, [property: Required][property: StringLength(8, MinimumLength = 4)] string Password);
}