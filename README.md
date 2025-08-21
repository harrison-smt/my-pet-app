# 🐾 My Pet App  

A **full-stack Tamagotchi-style web app** where users can create and care for a virtual pet in real time. Users can **feed, clean, and put their pet to sleep**, with stats updating instantly and persisting across sessions.  

---

## 🚀 Highlights  

- 🐶 **Interactive Gameplay** – Feed, clean, and rest your pet with live updates.  
- 🔑 **User Authentication** – Secure login powered by Firebase.  
- 💾 **Persistent State** – Pet data stored in Firestore for continuity.  
- 📱 **Responsive UI** – Mobile-friendly design with Tailwind CSS.  

---

## 📸 Screenshots

<img width="1903" height="943" alt="Screenshot 2025-08-21 at 3 08 35 PM" src="https://github.com/user-attachments/assets/2b0fcc3b-2867-4871-b52f-0925a77914a4" />

---

## 🛠️ Built With  

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS  
- **Backend & Database:** Firebase (Auth, Firestore, Hosting)  
- **Other Tools:** Node.js, Git/GitHub  

---

## 🔒 Security & Best Practices

Firebase Security Rules restrict access so users can only modify their own pet data.

API keys in firebaseConfig are safe to expose (they’re project identifiers, not secrets).

Service account keys and sensitive environment variables must never be committed.

Use .env.local for config and add .env* to .gitignore.

---

## ⚡ Quick Start  

```bash
git clone https://github.com/your-username/my-pet-app.git
cd my-pet-app
npm install
npm run dev
