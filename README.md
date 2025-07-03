# 📊 GS MarketEye — Stock Analytics Dashboard

GS MarketEye is a full-stack, interactive market analytics dashboard that simulates real-time stock sentiment, top movers, and risk metrics. Built using **React.js**, **FastAPI**, and **DSA (Heap)** concepts — this project demonstrates the intersection of **finance, software engineering, and data analysis**.

<div align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-brightgreen" />
  <img src="https://img.shields.io/badge/DataStructures-Heap-orange" />
  <img src="https://img.shields.io/badge/Deployed-Localhost-lightgrey" />
</div>

---

## 🚀 Features

- 📉 **Risk Metrics Panel**
  - Simulates **Value at Risk (VaR)** and **Sharpe Ratio**
  - Shows financial risk exposure for sample portfolios

- 📰 **Market Sentiment**
  - Simulates NLP-driven sentiment analysis on market news
  - Displays dynamic updates on market tone (Bullish, Bearish)

- 📈 **Top Movers**
  - Uses **heap-based sorting** to display top gainers and losers
  - Efficiently ranks stocks based on % price change

---

## 🧠 Tech Stack

| Layer         | Tech                     |
|---------------|--------------------------|
| Frontend      | React.js, Vite, Axios    |
| Backend       | FastAPI, Python 3.11     |
| Data Handling | Custom APIs, Mocked Data |
| DSA Usage     | Heap for stock sorting   |
| Tools         | Git, VS Code, JSON, REST |

---

---

## 🛠️ How to Run

### 🖥 Backend (FastAPI)
```bash
cd backend
pip install -r ../requirements.txt
uvicorn main:app --reload
```
---
### 🌐 Frontend (React + Vite)
```bash
Copy
Edit
cd frontend
npm install
npm run dev
Runs on: http://localhost:5173
```
🔗 API Endpoints
| Endpoint      | Method | Description                     |
| ------------- | ------ | ------------------------------- |
| `/risk`       | GET    | Returns VaR & Sharpe Ratio      |
| `/sentiment`  | GET    | Returns mocked market sentiment |
| `/top-movers` | GET    | Returns top gainers & losers    |



