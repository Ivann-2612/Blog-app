import express from 'express'
const app = express()



app.get('/', (req, res) => res.json({ username: 'Flavio' }))
app.listen(3001, () => console.log('Server is ready on localhost 3001'))


