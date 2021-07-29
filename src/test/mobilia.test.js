const request = require('supertest')

test('/mobilia/id', async()=>{
    await request('http://localhost:3030')
    .get('/mobilia/id')
    .expect(200)
    .then((res) => console.log('passou no teste'))
})