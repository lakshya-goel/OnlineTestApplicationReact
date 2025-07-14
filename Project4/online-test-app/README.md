# Online Test Application

This is a **React-based Online Test Application** with a JSON Server backend to simulate a real REST API.  
Users can take a quiz, review their answers, and see results instantly.

---

## 📌 **Features**

- Loads questions and answers dynamically from a **JSON Server API**
- Multi-step flow: **Quiz → Review → Result**
- Uses React functional components and Hooks
- Demonstrates API calls using `fetch()`
- Runs React frontend and JSON Server **concurrently**

---

## 📁 **Project Structure**

```
online-test-app/
├── public/
│ ├── index.html
├── src/
│ ├── components/
│ │ ├── Quiz.js
│ │ ├── Review.js
│ │ ├── Result.js
│ ├── App.js
│ ├── index.js
├── db.json
├── package.json
├── README.md
```


---

## ⚙️ **Technologies Used**

- **React** (with Hooks)
- **JSON Server** (mock REST API)
- **Concurrently** (to run multiple scripts)

---

## 🚀 **Getting Started**

1️⃣ **Clone the repo**

```
git clone https://github.com/your-username/online-test-app.git
cd online-test-app
```

2️⃣ **Install dependencies**

```
npm install
```

3️⃣ **Run React + JSON Server together**

```
npm run dev
```

📂 **JSON Server Endpoints**
```
GET /questions → Returns quiz questions

GET /answers → Returns correct answers
```
Edit db.json to update or add questions/answers.

✅ **How to Add New Questions**
Open db.json

Add your new question in the questions array:

```
{
  "id": 6,
  "question": "New question?",
  "options": ["Option1", "Option2", "Option3", "Option4"]
}
```
Add the correct answer in the answers array:

```
{
  "id": 6,
  "answer": 2
}
```
✨ **Scripts**
```
npm start	Runs only the React app
npm run json-server	Runs only the JSON Server
npm run dev	Runs both React and JSON Server together using concurrently
```

👨‍💻 **Developer**
Lakshya Goel
