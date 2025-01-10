# **Internship Project - Cryptocurrency Data & Standard Deviation**

This project fetches cryptocurrency data (like price, market cap, and 24-hour change) and calculates the standard deviation of the cryptocurrency prices over time.

## **Overview**
This project provides a way to:
- Select a cryptocurrency (Bitcoin, Ethereum, or Matic).
- Fetch the real-time data for the selected cryptocurrency.
- Calculate and display the standard deviation of the cryptocurrency prices.
- Allows the user to choose whether they want to see the cryptocurrency details or its standard deviation.

### **Technologies Used**
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (for storing cryptocurrency data)
- **API**: CoinGecko API for real-time cryptocurrency data

---

## **Features**
- **Coin Selection**: Choose from Bitcoin, Ethereum, or Matic.
- **Real-time Data Fetching**: Fetch price, market cap, and 24-hour change.
- **Standard Deviation**: Calculate the standard deviation for the selected cryptocurrency.
- **Error Handling**: Gracefully handles errors when data cannot be fetched or there is a server issue.

---

## **How It Works**

    - Node.js and Express handle API requests and interact with MongoDB.
    - The backend fetches data from the CoinGecko API.
    - The server calculates the standard deviation based on the stored data in the database and returns it.

3. **Database**:
    - MongoDB is used to store cryptocurrency data (price, market cap, change) for calculating standard deviation.
    - Data is stored and fetched from the database to track cryptocurrency price fluctuations.

---

## **Setup**

### 1. **Clone the repository**:
```bash
git clone https://github.com/saniakouser/Intern.git
cd Internship
