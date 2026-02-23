// financial-manager.ts

// This module manages financial operations including tracking revenue and expenses,
// as well as implementing survival tier logic.

class FinancialManager {
    private revenue: number;
    private expenses: number;

    constructor() {
        this.revenue = 0;
        this.expenses = 0;
    }

    // Method to track revenue
    public trackRevenue(amount: number): void {
        this.revenue += amount;
    }

    // Method to track expenses
    public trackExpenses(amount: number): void {
        this.expenses += amount;
    }

    // Calculate net profit
    public calculateNetProfit(): number {
        return this.revenue - this.expenses;
    }

    // Implement survival tier logic
    public getSurvivalTier(): string {
        const netProfit = this.calculateNetProfit();
        if (netProfit > 10000) {
            return 'High Tier';
        } else if (netProfit > 0) {
            return 'Medium Tier';
        } else {
            return 'Low Tier';
        }
    }
}

export default FinancialManager;