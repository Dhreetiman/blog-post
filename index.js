const express = require("express");
let connectDB = require("./database");
const app = express();

connectDB();
app.use(express.json({ extended: false }));

// app.use('/api/auth', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`);
});
