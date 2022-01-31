const express = require('express')
const getCompras = require('./services/notion')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static('public'))

app.get('/compras', async(req, res) => {
    const compras = await getCompras()
    res.json(compras)
})

app.listen(PORT, console.log(`Server started on port ${PORT}`))