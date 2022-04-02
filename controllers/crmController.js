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

exports.getContactByİd = catchAsync(async (req, res) => {
	let contact = await Contact.findById(req.params.contactId);
	return res.json({ contact });
});

exports.updateContact = catchAsync(async (req, res) => {
	const { firstName, lastName, email, company, phone } = req.body;
	let contact = await Contact.findByIdAndUpdate(
		req.params.contactId,
		{ firstName, lastName, email, company, phone },
		{ new: true },
	);
	return res.json({ contact });
});

exports.deleteContact = catchAsync(async (req, res) => {
	let contact = await Contact.findByIdAndDelete(req.params.contactId);
	return res.status(204).json({ contact });
});
