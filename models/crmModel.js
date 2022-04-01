const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: "Enter first name",
	},
	lastName: {
		type: String,
		required: "Enter last name",
	},
	email: { type: String, required: true },
	company: String,
	phone: { type: String, required: true },
	created_date: {
		type: Date,
		default: Date.now,
	},
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;
