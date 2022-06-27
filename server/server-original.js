const routes = require("./routes");

const path = require("path");
const express = require("express");
// Import Apollo Server
//const apollo
//auth middleware

// import typedefs
// const { typedefs}
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
// new apollo server

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
