const express = require("express");
const telegram = require("./routes/telegram");

const router = express.Router();

router.post("/telegram", telegram);

module.exports = router;
