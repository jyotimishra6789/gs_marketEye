import heapq

stock_changes = [
    {"ticker": "AAPL", "change": 1.5},
    {"ticker": "TSLA", "change": -2.3},
    {"ticker": "AMZN", "change": 3.2},
    {"ticker": "GOOGL", "change": -1.0},
    {"ticker": "MSFT", "change": 2.4}
]

def get_top_movers():
    gainers, losers = [], []
    for stock in stock_changes:
        change = stock['change']
        if change >= 0:
            heapq.heappush(gainers, (-change, stock['ticker']))
        else:
            heapq.heappush(losers, (change, stock['ticker']))

    return {
        "top_gainers": [(sym, -chg) for chg, sym in heapq.nsmallest(3, gainers)],
        "top_losers": [(sym, chg) for chg, sym in heapq.nsmallest(3, losers)]
    }