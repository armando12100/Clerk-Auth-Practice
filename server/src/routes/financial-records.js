import express from "express";

const router = express.Router();

router.get('/getAllByUserID/:userId', async (req, res) => {
    try {
        const q = "SELECT * FROM financialrecord"
        db.query(q, (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json(data)
        })
    } catch (error) {
        console.log(error)
    }
});

export default router;