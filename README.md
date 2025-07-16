# 🗓️ Distributed Job Scheduler

A powerful and extensible MERN-based job scheduling system that allows users to schedule and manage jobs with dependency handling, retry policies, priority levels, and simulated distributed worker assignment.

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

---

## 🧰 Getting Started

### 📦 1. Clone the Repository

```bash
git clone https://github.com/Sankalpa-01/Distributed-Job-Scheduler.git
cd Distributed-Job-Scheduler
```

### 🔧 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
MONGO_URI=mongodb://localhost:27017/jobSchedulerDB
PORT=5000
```

Run the backend server:

```bash
npm run dev
```

### 🎨 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will be running at 👉 [http://localhost:5173](http://localhost:5173)

---

## 🌍 Future Enhancements

- ✅ Job logs & audit trails  
- ✅ Worker load balancing  
- 🔔 Notification system (Slack, email)  
- 📊 Analytics dashboard  
- 👥 Multi-user support

---

> Built with ❤️ by [Sankalpa Panda](https://github.com/Sankalpa-01)
