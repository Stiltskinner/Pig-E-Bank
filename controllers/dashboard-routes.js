const router = require('express').Router();
const { Pigs, User, Money, Transaction  } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    console.log(req.session.userId)
    if(req.session.userId) {
        const userData = await User.findByPk(req.session.userId, {
            include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
          })
          const user = userData.get({ plain: true });
          console.log(user)
          res.render('accounts', {
            layout: 'dashboard',
            user
          });
          return;
    }
    res.redirect('login');
    return;
  });

router.get('/savings', withAuth, async (req, res) => {
  console.log(req.session.userId)
  if(req.session.userId) {
      const userData = await User.findByPk(req.session.userId, {
          include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
          where: {
            is_savings: true,
          }
        })
        const user = userData.get({ plain: true });
        console.log(user)
        res.render('accounts', {
          layout: 'dashboard',
          user
        });
        return;
  }
  res.redirect('login');
  return;
});

router.get('/checking', withAuth, async (req, res) => {
  console.log(req.session.userId)
  if(req.session.userId) {
      const userData = await User.findByPk(req.session.userId, {
          include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
          where: {
            is_savings: false,
          }
        })
        const user = userData.get({ plain: true });
        console.log(user)
        res.render('accounts', {
          layout: 'dashboard',
          user
        });
        return;
  }
  res.redirect('login');
  return;
});

module.exports = router;
