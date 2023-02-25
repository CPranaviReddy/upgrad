const express = require("express");
const {join} = require("path");
const app = express();

app.use("/assets", express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));     // ---> This is buit in middleware function to handle url encoded request for parsing
app.use(express.json());   //--> this will show the json object on the console

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("<h1>BlogChef</h1>");
});

app
  .get("/admin/login", (req, res) => res.render("login"))
  .post("/admin/login", (req, res) => {
    const { email, password } = req.body;    // ---> extract the username + password and put in the request body
    console.log("E-Mail:", email);
    console.log("Password:", password);
    if(email === "admin" && password === "admin")    //validating the user data and then redirecting
    res.redirect("/admin/dashboard");
    else
    res.redirect("/admin/login");
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

app.post("/api/posts", (req, res) => {      //---> this is the url for the api to handle post request if that reuqest body has data
  console.log(req.body);                    // this is used to pull data from the the POSTMAN request body
  res.json({ message: "Got it!" });
});

app.listen(3000, () => console.log("Blog Chef is cooking on port 3000"));
