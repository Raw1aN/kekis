// this file for admin sql queries ...
const getUserIdByToken = 'select "UserId" from "AspNetUserTokens" where "Value" = $1';
const getRoleName = 'select "Name" from "AspNetRoles" r join "AspNetUserRoles" ur on r."Id" =ur."RoleId" where ur."UserId" = $1';
const findUser = 'select "Id","Avatar","UserName","NormalizedUserName","Email","NormalizedEmail","EmailConfirmed","PasswordHash" from "AspNetUsers" where "Email" = $1';
const addUser = 'insert into "AspNetUsers" ("Id","Email","PasswordHash","EmailConfirmed") values ($1,$2,$3,true);';
const saveToken = 'insert into "AspNetUserTokens" ("UserId", "LoginProvider", "Name", "Value") values ($1,\'user\',\'accessToken\',$2)';
const hasToken = 'select "Value" from "AspNetUserTokens" where "UserId" = $1';
const addUserRole = 'insert into "AspNetUserRoles" ("UserId", "RoleId") values ($1,$2);'
const blockUser = 'update "AspNetUserTokens" set "LoginProvider" = \'blocked\' where "UserId" = $1';
const unblockUser = 'update "AspNetUserTokens" set "LoginProvider" = \'user\' where "UserId" = $1';
const isBlocked = 'select "LoginProvider" from "AspNetUserTokens" where "UserId" = $1';
module.exports = {
    getUserIdByToken,
    getRoleName,
    findUser,
    addUser,
    saveToken,
    hasToken,
    addUserRole,
    blockUser,
    unblockUser,
    isBlocked
};
