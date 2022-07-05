const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routesUrls = require("./routes/routes")
const cors = require("cors")

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, () =>
  console.log("Connected to MongoDB")
)

app.use(express.json())
app.use(cors())
app.use("/api", routesUrls)
app.listen(4000, () => {
  console.log("Server is running on port 4000")
})
