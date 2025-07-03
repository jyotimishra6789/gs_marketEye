from fastapi import APIRouter

router = APIRouter()

@router.get("/risk")
def get_risk():
    return {"VaR_95": -0.05, "Sharpe_Ratio": 1.23}

@router.get("/sentiment")
def get_sentiment():
    return {"sentiment": "Market is looking positive today."}

@router.get("/top-movers")
def get_top_movers():
    return {
        "gainers": [
            {"name": "TCS", "change": "+5.4%"},
            {"name": "INFY", "change": "+3.2%"}
        ],
        "losers": [
            {"name": "WIPRO", "change": "-4.1%"},
            {"name": "HCLTECH", "change": "-2.5%"}
        ]
    }

