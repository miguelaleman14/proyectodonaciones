const express = require("express");
const router = express.Router();
const Donation = require("../models/Donation");

router.post("/", async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const nuevaDonacion = new Donation(req.body);
    await nuevaDonacion.save();

    res.json({ mensaje: "Donación guardada correctamente" });
  } catch (error) {
  console.error("ERROR COMPLETO:", error);
  res.status(500).json({ error: error.message });
}
});

module.exports = router;