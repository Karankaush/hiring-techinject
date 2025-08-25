A Node.js + Express + MongoDB backend for tracking wellness logs (steps, sleep, mood, notes) with user authentication and admin management.

🚀 Features

🔑 Authentication (JWT-based)

User registration & login

Admin registration (with secret code)

🧘 Wellness Logs

Create, Read, Update, Delete (CRUD) wellness logs

Each user can manage their own logs

🛠️ Admin Features

Manage users (delete)

Manage wellness logs (delete/update any log)

✅ Health check endpoint

🔒 Role-based access control (User vs Admin)

📦 Tech Stack

Node.js + Express.js

MongoDB + Mongoose

JWT (JSON Web Tokens) for authentication

bcryptjs for password hashing

dotenv for environment variables

⚙️ Installation & Setup
1
cd wellness tracker

2️⃣ Install dependencies
npm install

    bcryptjs
    dotenv
    express
    express-validator
    jsonwebtoken
    mongoose
    swagger-jsdoc
    swagger-ui-expre
    yamljs


3️⃣ Setup .env file

Create a .env file in root:

PORT=5000
MONGO_URI=mongodb://localhost:27017/wellness_tracker
JWT_SECRET=ksue$dcncdis
ADMIN_CODE=jdbyd$fof$k




4️⃣ Start the server
nodemon server.js



Server will run on 👉 http://localhost:5000

📌 API Endpoints
🩺 Health Check
GET /api/health

👤 Authentication
Method	Endpoint	Description	Auth
POST	/api/auth/register	Register a new user	❌ Public
POST	/api/auth/login	Login (returns JWT)	❌ Public
POST	/api/auth/register-admin	Register an admin (requires ADMIN_CODE)	❌ Public
🧘 Wellness Logs (User APIs)

Base URL: /api/wellness
🔐 Requires Bearer Token (JWT)

Method	Endpoint	Description	Auth
POST	/api/wellness/	Create a new wellness log	✅ User
GET	/api/wellness/	Get all logs of logged-in user	✅ User
PUT	/api/wellness/:id	Update a log (only owner can update)	✅ User
DELETE	/api/wellness/:id	Delete a log (only owner can delete)	✅ User
🛠️ Admin APIs

Base URL: /api/admin
🔐 Requires Bearer Token (JWT) + Admin Role

Method	Endpoint	Description
DELETE	/api/admin/users/:id	Delete a user
DELETE	/api/admin/logs/:id	Delete any wellness log
PUT	/api/admin/logs/:id	Update any wellness log
🔑 Authentication Flow

Register user → /api/auth/register

Login user/admin → /api/auth/login

Use JWT in headers:

Authorization: Bearer <your_token>


Access user or admin routes.

📂 Project Structure
📦 wellness tracker
 ┣ 📂 controllers
 ┃ ┣ authController.js
 ┃ ┣ wellnessControllers.js
 ┃ ┗ adminControllers.js
 ┣ 📂 middleware
 ┃ ┗ authMiddleware.js
 ┣ 📂 models
 ┃ ┣ isAdmin.js
 ┃ ┣ User.js
 ┃ ┗ WellnessLog.js
 ┣ 📂 routes
 ┃ ┣ authRoutes.js
 ┃ ┣ wellnessRoutes.js
 ┃ ┗ adminRoutes.js
 ┣ app.js
 ┣ server.js
 ┣ .env
 ┣ package.json
 ┣ .gitignore
 ┣ postman_collection.json
 ┣ swagger.yaml
 ┗ README.md


🧪 Testing

You can test the APIs using:

Postman
swagger

👉 Add the JWT token in Authorization header:

## API Documentation
Swagger UI is available at: [http://localhost:5000/api-docs](http://localhost:5000/api-docs)


