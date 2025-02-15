const express = require("express");
const { getInvestmentPlan } = require("../controllers/planController");
const router = express.Router();

router.post("/plan", getInvestmentPlan);

module.exports = router;