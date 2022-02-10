const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'db',
})

connection.connect()

app.post('/', function (req, res) {
  console.log(req.body)
  const { id, pw } = req.body
  const query = `SELECT * FROM user WHERE id = '${id}' AND pw = '${pw}'`

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.log(error)
    }
    res.send(results)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})