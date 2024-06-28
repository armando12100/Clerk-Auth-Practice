import express from "express";
import mysql from 'mysql'

const router = express.Router();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "personalfinancetracker"
});


router.get("/", async (req, res) => {
  try {
    const q = await "SELECT * FROM financialrecord";
    console.log(q)
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.log(error)
  }
});

// router.get('/getAllByUserID/:userId', async (req, res) => {
//     try {
//         const q = "SELECT * FROM financialrecord"
//         db.query(q, (err, data) => {
//             if (err) return res.json(err)
//             return res.json(data)
//         })
//     } catch (error) {
//         console.log(error)
//     }
// });

export default router;
