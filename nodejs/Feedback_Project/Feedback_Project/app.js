const express = require("express");

// Creating express object
const app = express();

// Require path module
const path = require('path');

// Require pug template engine
const pug = require("pug");

// Require mongoose to use mongoDb in a easier way
const mongoose = require("mongoose");

// Make a static route to use your static files in client side
app.use('/static', express.static('static'));

// Middleware for parsing
app.use(express.urlencoded());

// Define and use pug engine so also declare path on rendering
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Database Connection
mongoose.connect("mongodb+srv://Raju-NodeJS:9507619399@raju.gpfkoiq.mongodb.net/?retryWrites=true&w=majority",
	{ 
        useUnifiedTopology: true 
    }
);

// Create schema = you can create inside the model layer as well
const feedSchema = mongoose.Schema({
	name: String,
	email: String,
	feed: String
});

// Making a modal on our already defined schema
const feedModal = mongoose.model('feeds',feedSchema);

// Handling get request
app.get('/', function (req, res) {
	// Rendering your form
	res.render('feedback_form');
});

// Handling data after submission of form
app.post("/feedback_form", function (req, res) {
	const feedData = new feedModal({
		name: req.body.name,
		email: req.body.email,
		feed: req.body.feedback
	});
	feedData.save()
		.then(data => {
			res.render('feedback_form',
           { msg: "Your feedback successfully saved." });
		})
		.catch(err => {
			res.render('feedback_form',
				{ msg: "Check Details." });
		});
})

// Server setup
app.listen(3001, () => {
	console.log("server is running");
});
