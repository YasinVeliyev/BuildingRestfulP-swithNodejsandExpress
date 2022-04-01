const crmController = require("../controllers/crmController");

exports.routes = (app) => {
	app.route("/contact")
		.get((req, res, next) => {
			console.log(`Request from ${req.originalUrl}`);
			console.log(`Request type ${req.method}`);
			next();
		}, crmController.getContacts)
		.post(crmController.addNewContact);

	app.route("/contact/:contactId")
		.put((req, res) => {
			res.send("PUT request successful");
		})
		.delete((req, res) => {
			res.send("Delete request successful");
		});
};
