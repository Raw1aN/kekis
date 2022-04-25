module GiraffeAPI.Models.User

open System

[<CLIMutable>]  
type User =
    {
        Id : Guid
        Avatar: string
        UserName: string
        NormalizedUserName: string
        Email: string
        NormalizedEmail: string
        EmailConfirmed: bool
        PasswordHash: string
        IsBanned: bool
    }