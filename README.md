
# 🛒 E-Commerce Website – Flipkart Clone

## 📄 Abstraction  
The **E-Commerce Payment Flow System** is a complete **MERN‑stack application** that simulates the end‑to‑end online shopping experience — from browsing items to confirming orders with secure payment. Designed to replicate platforms like **Flipkart** and **Paytm**, it offers users a seamless, responsive, and trustworthy shopping journey.

---

## 🚀 Project Highlights

- **🔐 User Login & Authentication**  
  Users must log in to access the cart and make purchases, ensuring secure access control and a personalized experience.

- **🛍️ Product Browsing & Selection**  
  Browse products, view detailed information, and add items to cart.

- **🛒 Real‑Time Cart Management**  
  Cart state is managed using Redux to keep it synced across the app.

- **🔥 Deals of the Day**  
  A promotional section shows limited-time offers to increase engagement.

- **🧾 Dynamic Price Calculation**  
  Automatically calculates total cost, discounts, and delivery charges.

- **💳 Paytm‑Style Payment Flow**  
  Includes secure confirmation screen showing Paytm-like UI with balance, taxes, total payable, and a checkbox for terms.

- **✅ Order Confirmation**  
  A beautiful payment success screen confirms the order and payment.

---

## 🧰 Technologies Used

### 🔹 Frontend

| Technology             | Purpose                                                      |
|------------------------|--------------------------------------------------------------|
| **React JS**           | Component-based frontend UI framework                        |
| **Redux**              | State management for cart and user sessions                  |
| **React Router DOM**   | Client-side routing between pages                            |
| **Material UI (MUI)**  | Pre-built responsive and styled components                   |
| **Styled Components**  | Scoped component-level styling with CSS-in-JS               |

### 🔹 Backend

| Technology     | Purpose                                                 |
|----------------|---------------------------------------------------------|
| **Node.js**    | JavaScript runtime for server-side code                |
| **Express.js** | Lightweight framework for building REST APIs           |
| **MongoDB**    | NoSQL database for storing products, users, and cart   |
| **Mongoose**   | ODM for schema definitions and MongoDB queries         |



## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/JumbarathiTejasri/Flipkart-Clone_Ecommerce.git
cd Flipkart-Clone_Ecommerce
```

### 2. Install Dependencies

#### Server:
```bash
cd server
npm install
```

#### Client:
```bash
cd ../client
npm install
```

### 3. Add Environment Variables

#### 📁 server/.env
```
DB_USERNAME="your_username"
DB_PASSWORD="your_password"
```

### 4. Run the Project

#### Start the Server:
```bash
cd server
npm start
```

#### Start the Client:
```bash
cd ../client
npm start
```

---

## 🌐 Open in Browser

Visit: [http://localhost:3000](http://localhost:3000)

You’ll see:
- Browseable products
- Deals of the Day
- Login and Cart
- Paytm-style Confirm Payment
- Order Success screen

---

## ✅ Features in Summary

- Login and protected routes
- Add to cart with Redux
- Real-time price summary
- Secure payment simulation
- Stylish responsive UI (MUI + styled-components)
- Continue Shopping on success

---

> 🔐 `.env` and `/node_modules` are ignored in both server and client using `.gitignore` to protect sensitive credentials and reduce clutter in version control.

---



