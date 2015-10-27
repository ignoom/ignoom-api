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
    Users.find().then(function(users) {
      return res.json(users);
    }).fail(function(err) {
      return res.json(err);
    });
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
  show: function(req, res){
    var params =  req.params.all(); // {id: '7'}
    var id = params.id;
    Users.find(id).then(function(user) {
      return res.json(user) ;
    });
   
  },

  'verify/:email': function(req, res) {
    API(Registration.verifyUser, req, res);
  },
  current: function(req, res) {
    API(Registration.currentUser, req, res);
  },

  login: function(req, res) {
    res.view({
      errors: req.flash('error')
    });
  }
};
