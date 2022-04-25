// this file for admin sql queries ...
const addRoles = 'insert into "AspNetRoles" ("Id", "Name") values ($1,$2)';
const removeRoles = 'delete from "AspNetRoles" where "Id" = $1';
const addRoleToUser = 'insert into "AspNetUserRoles" ("UserId", "RoleId") values ($1,$2)';


module.exports = {
  addRoles,
  removeRoles,
  addRoleToUser
};
