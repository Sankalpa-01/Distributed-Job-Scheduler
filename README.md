# 🗓️ Distributed Job Scheduler

A powerful and extensible MERN-based job scheduling system that allows users to schedule and manage jobs with dependency handling, retry policies, priority levels, and simulated distributed worker assignment.

![Preview](./preview.png) <!-- Optional: Add your screenshot image named preview.png -->

---

## 🚀 Features

- 🌐 Full MERN Stack (MongoDB, Express, React, Node.js)
- ⏰ Cron-based job scheduling
- 🔁 Retry policies with configurable attempts
- 🔗 Dependency management between jobs
- 🧠 Simulated worker assignment
- 🟢 Live job tracking with status indicators (Pending, Running, Success, Failed)
- 💅 Green & black themed UI for a sleek console-style look

---

## 🛠️ Technologies Used

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Express.js, Node.js, Mongoose
- **Database:** MongoDB
- **Scheduler:** node-cron, cron-parser

---

## 🧪 Sample Job Input

You can use the following example when creating a new job:

```json
{
  "name": "Backup Logs",
  "schedule": "*/5 * * * *",
  "command": "backup.sh",
  "priority": "High",
  "retryPolicy": 3,
  "dependencies": []
}
```

## 🧰 Getting Started

📦 1. Clone the repository
--- git clone https://github.com/Sankalpa-01/Distributed-Job-Scheduler.git
--- cd Distributed-Job-Scheduler

🔧 2. Backend Setup
--- cd backend
--- npm install

--- Create a .env file:
--- MONGO_URI=mongodb://localhost:27017/jobSchedulerDB
--- PORT=5000

Run the backend server:
npm run dev

🎨 3. Frontend Setup
cd ../frontend
npm install
npm run dev
The frontend will be running at: http://localhost:5173

🌍 Future Enhancements
✅ Job logs & audit trails
✅ Worker load balancing
🔔 Notification system (Slack, email)
📊 Analytics dashboard
👥 Multi-user support
