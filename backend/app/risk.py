def calculate_risk_metrics():
    returns = [-0.02, 0.01, 0.03, -0.01, 0.04, -0.03]
    sorted_returns = sorted(returns)
    var_95 = abs(sorted_returns[int(0.05 * len(sorted_returns))])
    sharpe = sum(returns) / (len(returns) * (sum([r ** 2 for r in returns]) ** 0.5))
    return {
        "VaR_95": var_95,
        "Sharpe_Ratio": round(sharpe, 4)
    }