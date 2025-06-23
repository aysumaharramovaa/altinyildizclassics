const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const user = {
  email: "aysu.maharramova" + "@icloud.com",
  password: "aysuaysu", 
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === user.email && password === user.password) {
    return res.json({ success: true, token: "demo-token-123" });
  } else {
    return res.status(401).json({ success: false, message: "Birşeyler yanlış oldu" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

