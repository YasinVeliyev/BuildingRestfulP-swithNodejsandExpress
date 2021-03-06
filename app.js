const express = require("express");
const { routes } = require("./routes/crmRoutes");
require("dotenv").config();
const mongoose = require("mongoose");

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

routes(app);

app.get("/", (req, res) => {
	res.send(`Node and express server running on port ${PORT}`);
});
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/crmdb").then(() => {
	app.listen(PORT, () => {
		console.log(`Your running on port ${PORT}`);
	});
});
