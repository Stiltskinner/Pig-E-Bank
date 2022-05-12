const router = require('express').Router();
const { Pigs, User, Money, Transaction  } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    if(req.session.userId) {
        const userData = await User.findByPk(req.session.userId, {
            include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
          })
          const user = userData.get({ plain: true });
          const userMoney = user.money.checking
          const userPigs = user.pigs;
          const userPigsAmountArr = [];
          for (let i = 0; i<userPigs.length; i++) {
            let parsedPig = parseFloat(userPigs[i].amount_held)
            userPigsAmountArr.push(parsedPig)
          }
        let totalPigAmount = userPigsAmountArr.reduce(function(a, b) {
          return a+b;
        });
        
        let safeToSpend = userMoney-totalPigAmount;
          res.render('accounts', {
            layout: 'dashboard',
            user,
            safeToSpend
          });
          return;
    }
    res.redirect('login');
    return;
  });

router.get('/savings', withAuth, async (req, res) => {
  if(req.session.userId) {
      const userData = await User.findByPk(req.session.userId, {
          include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
        })
        let user = userData.get({ plain: true });
        let userPigs = user.pigs;
        const filterPigs = (userPigs) => {
          let pigsArr = [];
          for (let i = 0; i<userPigs.length; i++) {

            if (userPigs[i].is_savings===true) {
              pigsArr.push(userPigs[i])
            }
            
          }
          return pigsArr;
        };
        // Array of only the pigs where is_savings===true
        const savingsPigs = filterPigs(userPigs);
        // Replace all pigs under the user with only savingspigs
        user.pigs=savingsPigs;
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
  if(req.session.userId) {
      const userData = await User.findByPk(req.session.userId, {
          include: [{ model: Pigs}, { model: Money }, { model: Transaction }],
        })
        let user = userData.get({ plain: true });
        let userPigs = user.pigs;
        const filterPigs = (userPigs) => {
          let pigsArr = [];
          for (let i = 0; i<userPigs.length; i++) {

            if (userPigs[i].is_savings===false) {
              pigsArr.push(userPigs[i])
            }
            
          }
          return pigsArr;
        };
        // Array of only the pigs where is_savings===false
        const checkingPigs = filterPigs(userPigs);
        // Replace all pigs under the user with only checkingPigs
        user.pigs=checkingPigs;
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
