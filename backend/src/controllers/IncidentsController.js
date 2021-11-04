const connection = require('../database/connection')

module.exports = {
    async createIncident(request, response){
        const { title, description, value } = request.body
        const ong_id = request.headers.authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value, 
            ong_id
        })

        return response.json({id})
    },
    async listIncidents(request, response){
        const {page=1} = request.query
        const count = await connection('incidents').count()
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page-1) * 5)
            .select([
                'incidents.*',
                "ongs.name",
                "ongs.email",
                "ongs.whatsapp",
                "ongs.city",
                "ongs.uf"
            ])
        response.header('X-Total-Count', count[0]['count(*)'])
        return response.json(incidents)
    },
    async deleteIncident(request, response){
        const { id } = request.params
        const ong_logged = request.headers.authorization
        const ong_authorized = await connection('incidents').where('id', id).select('ong_id').first()

        if (!ong_authorized) return response.status(404).json({error: "Incident not found"})

        if (ong_authorized.ong_id != ong_logged) return response.status(401).json({
            error: "Not allowed"
        })

        await connection('incidents').where('id', id).delete()
        
        return response.status(204).send()
    }
}