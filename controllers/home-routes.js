const router = require('express').Router();
const { Pigs, User } = require('../models/');

// THIS IS JUST FOR TESTING PURPOSES IT WILL CHANGE IN THE FUTURE
router.get('/dashboard', async (req, res) => {
  const userData = await User.findByPk(1, {
    where: {
      id: 1
    },
})
  const pigData = await Pigs.findAll({
    where: {
      user_id: 1
    },
  });

  const pigs = pigData.map((pig) => pig.get({ plain: true }));
  const user = userData.get({ plain: true });
  res.render('main-view', {
    layout: 'dashboard',
    pigs,
    user
  });
});
// END OF TESTER

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
