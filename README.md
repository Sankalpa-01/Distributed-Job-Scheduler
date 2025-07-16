# 🗓️ Distributed Job Scheduler

A powerful and extensible MERN-based job scheduling system that allows users to schedule and manage jobs with dependency handling, retry policies, priority levels, and simulated distributed worker assignment.

![Preview](./preview.png) <!-- Optional: Replace with your actual image or remove -->

## 🚀 Features

- 🌐 Full MERN Stack (MongoDB, Express, React, Node.js)
- ⏰ Cron-based job scheduling
- 🔁 Retry policies with configurable attempts
- 🔗 Dependency management between jobs
- 🧠 Simulated worker assignment
- 🟢 Live job tracking with status indicators (Pending, Running, Success, Failed)
- 💅 Green & black themed UI for a sleek console-style look

## 🛠️ Technologies Used

- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Express.js, Node.js, Mongoose
- **Database:** MongoDB
- **Scheduler:** node-cron, cron-parser

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

🧰 Getting Started
📦 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/Sankalpa-01/Distributed-Job-Scheduler.git
cd Distributed-Job-Scheduler
🔧 2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Create a .env file in the backend/ directory:

env
Copy
Edit
MONGO_URI=mongodb://localhost:27017/jobSchedulerDB
PORT=5000
Run the backend server:

bash
Copy
Edit
npm run dev
🎨 3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
The frontend will be running at:
👉 http://localhost:5173

🌍 Future Enhancements
✅ Job logs & audit trails

✅ Worker load balancing

🔔 Notification system (Slack, email)

📊 Analytics dashboard

👥 Multi-user support

Built with ❤️ by Sankalpa Panda

yaml
Copy
Edit

---

✅ **This will render cleanly and match the styling shown in your screenshot** when viewed on GitHub.

Let me know if you'd like:
- a license section
- deployment instructions (Vercel/Render)
- dark/light mode badges or GitHub stats
