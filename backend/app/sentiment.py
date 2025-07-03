from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

news_samples = [
    "Markets rally as inflation data eases",
    "Tech stocks tumble amid Fed uncertainty",
    "Tesla reports record earnings"
]

def get_sentiment_score():
    analyzer = SentimentIntensityAnalyzer()
    scores = [analyzer.polarity_scores(text)['compound'] for text in news_samples]
    average = round(sum(scores) / len(scores), 4)
    return {"average_sentiment": average}
