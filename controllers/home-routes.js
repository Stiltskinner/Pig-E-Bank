const router = require('express').Router();
const { Pigs, User, Money, Transaction  } = require('../models/');

// THIS IS JUST FOR TESTING PURPOSES IT WILL CHANGE IN THE FUTURE

router.get('/'), (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }
    res.redirect('/login');
    return
}

router.get('/dashboard', async (req, res) => {
  const userData = await User.findByPk(1, {
    include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
    where: {
      id: 1
    },
})
  
  const user = userData.get({ plain: true });
  console.log(user)
  res.render('accounts', {
    layout: 'dashboard',
    user
  });
});
// END OF TESTER

router.get('/login', (req, res) => {
  console.log(req.session.loggedIn);
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
  return;
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }

  res.render('signup');
});

module.exports = router;
