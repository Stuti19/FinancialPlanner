const calculateInvestmentPlan = (goal, amount, years, riskLevel) => {
    const investmentOptions = {
        "low": { stocks: 20, bonds: 50, savings: 30 },
        "medium": { stocks: 50, bonds: 30, savings: 20 },
        "high": { stocks: 70, bonds: 20, savings: 10 },
    };

    if (!investmentOptions[riskLevel]) {
        return { error: "Invalid risk level" };
    }

    const allocation = investmentOptions[riskLevel];
    const projectedGrowth = { stocks: 1.08, bonds: 1.04, savings: 1.02 };
    
    const investmentBreakdown = {
        stocks: amount * (allocation.stocks / 100) * (projectedGrowth.stocks ** years),
        bonds: amount * (allocation.bonds / 100) * (projectedGrowth.bonds ** years),
        savings: amount * (allocation.savings / 100) * (projectedGrowth.savings ** years)
    };

    const totalValue = Object.values(investmentBreakdown).reduce((acc, val) => acc + val, 0);
    
    return {
        goal,
        years,
        riskLevel,
        totalProjectedValue: totalValue.toFixed(2),
        breakdown: Object.fromEntries(
            Object.entries(investmentBreakdown).map(([key, val]) => [key, val.toFixed(2)])
        )
    };
};

exports.getInvestmentPlan = (req, res) => {
    const { goal = "General", amount = 1000, years = 5, riskLevel = "medium" } = req.body;
    const plan = calculateInvestmentPlan(goal, amount, years, riskLevel);
    res.json(plan);
};