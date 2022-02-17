const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
app.set("view engine", "hbs");

app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",

    extname: "hbs",
  })
);

app.use(express.static("public"));

const PORT = 3000;

app.get("/", (req, res) => {
  return res.render("home", { layout: "index" });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
