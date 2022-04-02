const crmController = require("../controllers/crmController");
const middleware = require("../middlewares/middlewware");

exports.routes = (app) => {
	app.route("/contact").get(middleware, crmController.getContacts).post(crmController.addNewContact);

	app.route("/contact/:contactId")
		.get(crmController.getContactByİd)
		.put(crmController.updateContact)
		.delete(crmController.deleteContact);
};
