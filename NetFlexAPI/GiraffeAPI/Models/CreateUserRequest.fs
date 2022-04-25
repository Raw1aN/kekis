module GiraffeAPI.Models.CreateUserRequest

open System
open GiraffeAPI.Models.User


type CreateUserRequest =
    {
        Email: string
        PasswordHash: string
    }
    
    member this.HasErrors =
        if this.Email = null || this.Email = "" then Some "Email is required"
        else if this.PasswordHash = null || this.PasswordHash = "" then Some "Password is required"
        else None

    member this.GetUser = {
                                Id = Guid.NewGuid();
                                Email = this.Email;
                                PasswordHash = this.PasswordHash;
                                Avatar = null;
                                UserName = this.Email;
                                NormalizedUserName = this.Email.ToUpper();
                                NormalizedEmail = this.Email.ToUpper();
                                EmailConfirmed = false;
                                IsBanned = false;
                            }