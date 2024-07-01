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
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.log(error)
  }
});

router.get('/:userId', async (req, res) => {
    try {
        const id = req.params.userId;
        console.log(id);
        const q = "SELECT * FROM financialrecord WHERE userId = ?"
        db.query(q, [id], (err, data) => {
            // if (err) return res.json(err)
            console.log(data);
            return res.json(data)
        })
    } catch (error) {
        console.log(error)
    }
});

export default router;
