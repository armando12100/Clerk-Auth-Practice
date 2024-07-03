import express from "express";
import mysql from "mysql";

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "personalfinancetracker",
});

router.get("/", async (req, res) => {
  try {
    const q = await "SELECT * FROM financialrecord";
    db.query(q, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const q = "SELECT * FROM financialrecord WHERE userId = ?";
    db.query(q, [id], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const q =
      "INSERT INTO personalfinancetracker.financialrecord (`date`, `description`, `amount`, `category`, `paymentMethod`) VALUES (?)";
    const values = [
      req.body.date,
      req.body.description,
      req.body.amount,
      req.body.category,
      req.body.paymentMethod,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json("User has been succesfully added to the database!");
    });
  } catch (error) {
    return error;
  }
});

router.put("/:userId", (req, res) => {
  const id = req.params.userId;
  const q =
    "UPDATE financialrecord SET `date` = ?,`description` = ?, `amount` = ?,`category` = ?, `paymentMethod` = ? WHERE userId = ?";

  const values = [
    req.body.date,
    req.body.description,
    req.body.amount,
    req.body.category,
    req.body.paymentMethod,
  ];

  db.query(q, [...values, id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been updates successfully!");
  });
});

router.delete("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const q = "DELETE FROM financialrecord WHERE userId = ?";
    db.query(q, [id], (err, data) => {
      if (err) return res.json(err);
      return res.json("User has been succesfully deleted from the database!");
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
