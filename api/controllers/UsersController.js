/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
// TODO remove all this registration stuff, we want a regular login
module.exports = {
  index: function(req, res){
    // TODO implement method
  },
  register: function(req, res) {
    // Render web page
    res.view({
      errors: req.flash('error')
    });
  },
  callback: function(req, res){
    var action = req.param('action');
    switch (action) {
      case 'register':
        API(Registration.registerUser, req, res);
        break;
      default:
        res.redirect('/');
    }
  },
  'verify/:email': function(req, res) {
    API(Registration.verifyUser, req, res);
  },
  current: function(req, res) {
    API(Registration.currentUser, req, res);
  }
};
