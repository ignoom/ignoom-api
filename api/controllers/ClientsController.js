/**
 * ClientsController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

// TODO remove this registration stuff create a login as usual
module.exports = {
	index: function(req, res){
		Clients.find().then(function(clients){
			return res.json(clients);
		}).fail(function(err){
			return res.json(err);
		});
	},
  register: function(req, res) {
    // Render register view
    res.view({
      errors: req.flash('error')
    });
    //API(Registration.registerClient, req, res);
  },
  'verify/:email': function(req, res) {
    API(Registration.verifyClient, req, res);
  },
  callback: function(req, res) {
    // Add register client action
    var r = API(Registration.registerClient, req, res);
    if (r) {
			console.log(r);
      //return res.redirect('/clients');
    }
  }
};
