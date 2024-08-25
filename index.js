const express = require("express");
const connectDB = require("./src/config/db");
const cors = require('cors');
const userProfileRoutes = require("./src/Routes/userProfileRoutes");
const authRoutes = require("./src/Routes/authRoutes");
const profileRoutes = require("./src/Routes/ProfileRoutes");
const categoryRoutes=require('./src/Routes/categoryRoute')
const contactRoute=require('./src/Routes/contactRoute')
const patternRoute= require('./src/Routes/patternRoutes')
const yarnRoutes= require('./src/Routes/yarnRoutes')


const app = express();
const port = 5000;
connectDB();
app.use(express.json());

app.use(cors({
  origin:'http://localhost:3000',
  Credential:true
}));

app.use("/user", userProfileRoutes);
app.use('/api/auth/', authRoutes);

// Serve static files from the 'uploads' directory
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use('/api/profile', profileRoutes);
app.use('/api/category',categoryRoutes)
app.use('/api/contact', contactRoute)
app.use('/api/pattern', patternRoute)
app.use('/api/yarn', yarnRoutes)




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});