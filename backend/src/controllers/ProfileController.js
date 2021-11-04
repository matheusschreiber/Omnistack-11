const connection = require('../database/connection')

module.exports = {
    async listIncidents(request, response){
        const ong_logged = request.headers.authorization
        const incidents = await connection('incidents').where('ong_id', ong_logged).select('*')
        return response.json(incidents)
    }
}