require("dotenv").config();
const createError = require("../errors/createError");
const db = require("../database/db");
const queries = require("../queries/rolesQueries");

class RolesController {
    async createRole(req,res,next){
        try {
            const {roleId, roleName} = req.body
            const results = await db.query(queries.addRoles, [roleId, roleName])
            if (results.error)
                return next(new createError(401, results.error))
            return res.status(200).json({
               roleId : roleId,
                roleName : roleName
            })
        }catch (e) {
            return next(new createError(400, e.message))
        }
    }
    async removeRoles(req,res,next){
        try {
            const {roleId} = req.body
            const results = await db.query(queries.removeRoles, [roleId])
            if (results.error)
                return next(new createError(401, results.error))
            return res.status(200).json({
                roleId: roleId
            })
        }catch (e) {
            return next(new createError(400, e.message))
        }
    }
    async assignRole(req,res,next){
        try {
            const {userId,roleId} = req.body
            const results = await db.query(queries.addRoleToUser, [userId,roleId])
            if (results.error)
                return next(new createError(401, results.error))
            return res.status(200).json({
                roleId: roleId
            })
        }catch (e) {
            return next(new createError(400, e.message))
        }
    }

}


module.exports = new RolesController();