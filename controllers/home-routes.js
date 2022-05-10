const router = require('express').Router();
const {  } = require('../models/');

// THIS IS JUST FOR TESTING PURPOSES IT WILL CHANGE IN THE FUTURE
router.get('/dashboard', (req, res) => {
  res.render('main-view', {
    layout: 'dashboard',
  });
});

router.get('/login', (req, res) => {
  
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
