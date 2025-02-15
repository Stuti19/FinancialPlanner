// backend/financialPlan.js

function generateFinancialPlan(income, expenses, goals, riskTolerance) {
    let savingsRate = 0;
    if (riskTolerance === "low") {
        savingsRate = 0.20; // Save 20% for low risk tolerance
    } else if (riskTolerance === "medium") {
        savingsRate = 0.30;
    } else {
        savingsRate = 0.40; // High risk tolerance
    }

    const savingsGoal = income * savingsRate;
    const investmentSuggestions = riskTolerance === "low"
        ? "Invest in government bonds or low-risk mutual funds."
        : riskTolerance === "medium"
        ? "Consider a mix of stocks and bonds."
        : "Consider investing in high-growth stocks or ETFs.";
    
    return {
        savingsGoal,
        investmentSuggestions,
        goals: goals.split(', ').map(goal => `Goal: ${goal}`).join('\n'),
    };
}

module.exports = generateFinancialPlan; // Export the function
