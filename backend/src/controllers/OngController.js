const connection = require('../database/connection.js')
const createUniqueId = require('../utils/createUniqueId.js')

module.exports = {
    async createOng(request, response){
        const { name, email, whatsapp, city, uf } = request.body
        const id = createUniqueId()
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
        return response.json({ id })
    },
    async listOngs(request, response){
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    }
}