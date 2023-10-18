namespace API.DTOs
{
    public record UserDto(string Username, string Token, string PhotoUrl, string KnownAs, string Gender);
}