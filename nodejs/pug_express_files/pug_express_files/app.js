const express = require("express");
const {join} = require("path");
const app = express();
const morgan = require("morgan");
const {createWriteStream} = require("fs");

const logFile = join(__dirname, "blogchefNew.log");   // create the log file in the current project directory

/*--------------Morgan module ------------------*/
app.use(morgan(":method - :url - :date - :response-time ms"));  // morgan template
app.use(
  morgan(":method -:url - :date - :response-time ms", {
    stream: createWriteStream(logFile, { flags: "a" }),
  })
);
//---------------- end ------------------------//

app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => {
    const { email, password } = req.body;
    console.log("E-Mail:", email);
    console.log("Password:", password);
    res.redirect("/admin/dashboard");
  });

app.get("/admin/dashboard", (req, res) =>
  res.render("dashboard", {
    user: "Joe Mockery",
    posts: [
      {
        id: 1,
        author: "Joe M",
        title: "I love Express",
        content: "Express is a wonderful framework for building Node.js apps",
      },
      {
        id: 2,
        author: "Mike F",
        title: "Have you tried Pug?",
        content:
          "I recently tried the Pug templating language and its excellent",
      },
    ],
  })
);

app.get("/admin/logout", (req, res) => res.redirect("/admin/login"));

app.post("/admin/approve", (req, res) => res.redirect("/admin/dashboard"));

app.post("/api/posts", (req, res) => {
  console.log(req.body);
  res.json({ message: "Got it!" });
});

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
