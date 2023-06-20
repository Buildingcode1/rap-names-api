const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'birthname': 'sheya bin abrham-joseph' 
}

app.get('/', (request, response) => {
     response.sendFile(__dirname + '/index.html')
})


app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`)
})

app.get('/api:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers [rapperName]){
        response.json(rappers[rapperName])
    }
    response.json(savage)
     
}) 