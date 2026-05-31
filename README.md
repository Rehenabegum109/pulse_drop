#  PulseDrop - Limited Stock Reservation System

PulseDrop is a full-stack limited-time reservation system where users can reserve products for a fixed time window before automatic expiration.

---

##  Live Links

- 🔗 Backend: https://pulse-drop-backend.onrender.com  
- 🔗 Frontend:https://pulsedrop.pxxl.click
video :https://www.loom.com/share/1ebf4a6520d64896afe642986bcd9a0b

---

## 🧠 Project Purpose

This project demonstrates a real-world reservation system with:

- Stock locking
- Expiration system
- Race condition handling
- Clean scalable architecture

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Cron Jobs
- JWT Authentication

### Frontend
- React
- TypeScript
- Custom Hooks
- Axios API Layer

---

##  Race Condition Handling

Multiple users can try to reserve the same product at the same time.

### Solution:
- Atomic stock update in backend
- Server-side validation before reservation
- Prevents double booking

---

##  Testing Strategy

### Backend
- Reservation logic test
- Expiration job test
- Concurrency simulation test

### Frontend
- Timer logic test
- API error handling test

---

##  Architecture Decisions

- Service layer used for clean logic separation
- API layer separated in frontend for scalability
- Cron job used for expiration system

---

## Trade-offs

- Used Cron Job instead of Redis Queue → simpler but less scalable
- No distributed locking → faster development but limited concurrency control

---

##  Scaling Notes (10k users)

Possible issues:
- MongoDB write contention
- Cron job delay under heavy load

Solutions:
- Add Redis locking
- Use BullMQ queue system
- Separate worker service

---

# ❓ Interview Questions & Answers

## Q1: How did you handle race conditions?
**Answer:**  
I used atomic database updates and server-side validation to ensure stock is checked and updated in a single operation. This prevents multiple users from reserving the same product simultaneously.

---

## Q2: How does the expiration system work?
**Answer:**  
A cron job runs periodically and checks expired reservations. If a reservation is expired, it automatically releases the stock back to the product.

---

## Q3: Why did you separate API layer in frontend?
**Answer:**  
To centralize all API calls, make components clean, and improve maintainability and scalability.

---

## Q4: What would break at 10k concurrent users?
**Answer:**  
MongoDB write contention and cron job delays could become bottlenecks. Also, without Redis locking, race condition handling is limited under extreme load.

---

## Q5: How would you scale this system?
**Answer:**  
I would add Redis for locking, use a queue system like BullMQ for background jobs, and separate worker services for handling expiration tasks.

---

## Q6: Why cron job instead of queue system?
**Answer:**  
Cron job is simpler to implement and sufficient for small-medium scale projects. Queue systems are more complex but better for large-scale production.

---

## 🚀 Deployment

- Backend: Render  
- Frontend: Pxxl.app  

---

## 📌 API Base URL

https://pulse-drop-backend.onrender.com/api

---

## 👨‍💻 Author

Full-stack system design project focusing on:
- Concurrency handling
- Expiration system
- Clean architecture
- Production deployment