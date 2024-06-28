import express from 'express'
import mysql from 'mysql'
import 'dotenv/config'
import financialRecordRouter from "./routes/financial-records.js"

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "finance"
});

app.use("/financial-records", financialRecordRouter)

app.get("/", (req, res) => (
    res.json("hello this is the backend")
));

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