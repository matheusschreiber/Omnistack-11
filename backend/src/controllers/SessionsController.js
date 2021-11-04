const connection = require('../database/connection')

module.exports = {
    async createSession(request, response){
        const { id }= request.body
        const ongs = await connection('ongs').where('id', id).select('name').first()

        if (!ongs) return response.status(400).json({error: "Ong not Found"})
        return response.json(ongs)
    }
}