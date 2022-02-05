const cors = require("cors");
const db = require("./db/db");
const cards = require("./routes/cards");
const users = require("./routes/users");
const auth = require("./routes/auth");
const socket = require("./routes/socket");
const express = require("express");
const app = express();
const http = require("http").Server(app);

// const io = require("socket.io-client");
// let socket = io.connect("http://10.0.0.9:3001/realestateapp", {
// path: "/sqws",
// autoConnect: false,
// });

let appData = {
  appname: "realestateApp",
  server_host: "localhost/3001",
  client_host: "localhost/3002",
  auth_path: "realestate",
};
// socket.emit("addApp", appData);

app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/cards", cards);
app.use("/api/socket", socket);

app.get("/", (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

const port = process.env.PORT || 3000;
http.listen(port, () =>
  console.log(`Listening to port ${port}, click http://localhost:${port}`)
);
