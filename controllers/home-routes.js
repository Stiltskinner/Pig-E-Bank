const router = require('express').Router();
const { Pigs, User } = require('../models/');

// THIS IS JUST FOR TESTING PURPOSES IT WILL CHANGE IN THE FUTURE

const transactions = [{
  id: 1,
  amount: 12.99,
  transaction: 'HEBCONGRESS',
  createdAt: '12-12-2022',
},{
  id: 2,
  amount: 20,
  transaction: 'Transfer to Savings Pig',
  createdAt: '12-12-2022',
},{
  id: 3,
  amount: 15.99,
  transaction: 'SHELLGAS',
  createdAt: '12-12-2022',
},
{
  id: 4,
  amount: 45.66,
  transaction: 'NOODLEHOUSE',
  createdAt: '12-12-2022',
},
{
  id: 5,
  amount: 45.66,
  transaction: 'NOODLEHOUSEATX',
  createdAt: '12-11-2022',
}
]
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
    user,
    transactions
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
