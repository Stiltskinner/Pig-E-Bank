const router = require('express').Router();
const { Money } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get all money
router.get('/', withAuth, async (req, res) => {
    try {
      const moneyData = await Money.findAll({
        include: [{ all: true, nested: true }],
      });
      res.status(200).json(moneyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Create a money entry
router.post('/', withAuth, async (req, res) => {
const body = req.body;

try {
    const newMoney = await Money.create({ ...body, user_id: req.session.userId });
    res.json(newMoney);
} catch (err) {
    res.status(500).json(err);
}
});

// Update money
router.put('/', withAuth, async (req, res) => {
  try {
    const money = await Money.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    money.savings = req.body.savings;
    money.checking = req.body.checking;
    money.user_id = req.session.userId;
      res.json(money);
      res.status(200).end();
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete money
router.delete('/', withAuth, async (req, res) => {
  try {
    const affectedRows = Money.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!affectedRows) {
      res.status(404).json({ message: 'No Money found with that id!'}).end();
    }
    res.status(200).json({message: `Money entry deleted!`}).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;