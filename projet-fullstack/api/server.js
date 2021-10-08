const express = require("express")
const app = express()
const dataCountries = require("./dataCountries.json")

const cors = require('cors')

app.use(cors())

const port = 8015

app.get("/all", (req, res) => {

    const countries = dataCountries.map(elem => {
        return elem.name
    })

    res.json(countries)
})

app.get("/country/:countryName", (req, res) => {
    const countryName = req.params.countryName.toUpperCase()

    const countryFound = dataCountries.filter(elem => {
        return elem.name.toUpperCase() === countryName
    })

    res.json(countryFound[0])
})

app.listen(port, () => {
    console.log(`The server is listening in the port ${port}`)
})