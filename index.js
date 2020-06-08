const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({message: 'ok'});
});

app.get("/greetings", (req, res) => {
  res.json({ message: "ok" });
});




app.listen(PORT, () => console.log(PORT));