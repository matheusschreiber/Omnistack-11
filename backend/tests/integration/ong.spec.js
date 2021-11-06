const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Criar ONG', ()=>{
  beforeEach(async () => {
    await connection.migrate.rollback()
    await connection.migrate.latest()
  })

  afterAll(async () => {
    await connection.destroy()
  })

  it('should create a valid new ONG', async ()=>{
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "Criança Esperança",
        email: "hopechild@ong.com.br",
        whatsapp: "27995032304",
        city: "São Paulo",
        uf:"SP"	
      })
    
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })
})
