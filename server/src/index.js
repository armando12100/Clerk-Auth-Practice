import express from 'express'
import dotenv from 'dotenv'
import financeRouter from './routes/financial-records.js'

const app = express();
dotenv.config();

const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Hello from the backend!")
});

app.use("/finance", financeRouter)

// app.get("/finance", (req, res) => {
//     const q = "SELECT * FROM financialrecord"
//     db.query(q, (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })

app.listen(port, () => {
    console.log(`Connected to port: ${port}`)
});