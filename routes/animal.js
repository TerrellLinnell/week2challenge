var express = require('express');
var Router = new express.Router();
var Animal = require('../model/animal');

Router.route('/view')
  .get(function(req, res) {
    Animal.find(function(err, animals) {
      if(err){
        console.log(err, "Error finding tasks");
      } else {
        res.render('view', {animals: animals});
      }
    });
  })

Router.route('/form')
  .get(function(req, res){
    res.render('form')
  });



Router.route('/post')
.post(function(req, res) {
  var animal = new Animal({
    name: req.body.name,
    species: req.body.species,
    color: req.body.color
  });
  animal.save(function (err, animalData) {
    if (err) {
      console.log(err, "Error savng animal");
    } else {
      res.json(animalData)
    }
  })
});

module.exports = Router;
