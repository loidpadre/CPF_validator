import express from 'express'
import router from './routes/routes'

const port = process.env.PORT || 10000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello, world!')
})

app.use('/api', router)
app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`)
})
