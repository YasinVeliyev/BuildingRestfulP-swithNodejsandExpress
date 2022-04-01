const Contact = require("../models/crmModel");

const catchAsync = (func) => {
	return (req, res, next) => {
		func(req, res).catch(next);
	};
};

exports.addNewContact = catchAsync(async (req, res) => {
	const { firstName, lastName, email, company, phone } = req.body;
	let newContact = await Contact.create({ firstName, lastName, email, company, phone });
	return res.json({ newContact });
});

exports.getContacts = catchAsync(async (req, res) => {
	let contacts = await Contact.find();
	return res.json({ contacts });
});
