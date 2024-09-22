import express from 'express'
import { dbConnection } from './databases/dbConnection.js'
import userRouter from './src/modules/user/user.routes.js'
const app = express()

app.use(express.json())
app.use(userRouter)
app.get('/', (req, res) => res.send('Hello World!'))

dbConnection()
app.listen(3000, () => console.log(`Example app listening on port 3000!`))