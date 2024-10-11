const express = require("express");
const router = express.Router();
const Access = require("../models/Access");

router.post("/connect", async (req, res) => {
  try {
    const newAccess = new Access();
    await newAccess.save();
    res
      .status(201)
      .json({ message: "Conexão iniciada", guid: newAccess.userGuid });
  } catch (error) {
    res.status(500).json({ message: "Erro ao iniciar conexão", error });
  }
});

router.post("/disconnect", async (req, res) => {
  try {
    const { guid } = req.body;
    const access = await Access.findOne({ userGuid: guid });
    if (access) {
      access.disconnectedAt = Date.now();
      await access.save();
      res.status(200).json({ message: "Conexão encerrada" });
    } else {
      res.status(404).json({ message: "Conexão não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao encerrar conexão", error });
  }
});

module.exports = router;
