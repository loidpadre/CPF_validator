import express from 'express'
import router from './routes/routes'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello, world!')
})

app.use('/api', router)
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}`)
})
