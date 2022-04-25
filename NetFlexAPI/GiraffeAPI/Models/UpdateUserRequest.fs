module GiraffeAPI.Models.UpdateUserRequest
open System
open GiraffeAPI.Models.User

type UpdateUserRequest =
    {
        Id : Guid
        Avatar: string
        UserName: string
        NormalizedUserName: string
        Email: string
        NormalizedEmail: string
        EmailConfirmed: bool
        PasswordHash: string
    }
    
    member this.HasErrors =
        if this.Email = null || this.Email = "" then Some "Email is required"
        else if this.PasswordHash = null || this.PasswordHash = "" then Some "Password is required"
        else None

    member this.GetUser = {
                                Id = this.Id;
                                Email = this.Email;
                                PasswordHash = this.PasswordHash;
                                Avatar = this.Avatar;
                                UserName = this.Email;
                                NormalizedUserName = this.Email.ToUpper();
                                NormalizedEmail = this.Email.ToUpper();
                                EmailConfirmed = this.EmailConfirmed;
                                IsBanned = false;
                            }