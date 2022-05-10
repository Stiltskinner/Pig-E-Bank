const router = require('express').Router();
const { Pigs } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get all pigs
router.get('/', withAuth, async (req, res) => {
    try {
      const pigsData = await Pigs.findAll({
        include: [{ all: true, nested: true }],
      });
      res.status(200).json(pigsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  // get one pig
router.get('/:id', withAuth, async (req, res) => {
    try {
      const pigsData = await Pigs.findByPk(req.params.id, {
        include: [{ all: true, nested: true }],
      });
  
      if (!pigsData) {
        res.status(404).json({ message: 'No Pigs found with that id!' });
        return;
      }
      res.status(200).json(pigsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Make a pig
router.post('/', withAuth, async (req, res) => {
const body = req.body;

try {
    const newPig = await Pigs.create({ ...body, user_id: req.session.userId });
    res.json(newPig);
} catch (err) {
    res.status(500).json(err);
}
});

// Update a pig
router.put('/:id', withAuth, async (req, res) => {
  try {
    const pigs = await Pigs.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    pigs.name = req.body.name;
    pigs.is_savings = req.body.is_savings;
    pigs.amount_due = req.body.amount_due;
    pigs.amount_held = req.body.amount_held;
    pigs.direct_deposit = req.body.direct_deposit;
    pigs.due_date = req.body.due_date;
    pigs.user_id = req.session.userId;
      res.json(pigs);
      res.status(200).end();
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a pig
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const affectedRows = Pigs.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!affectedRows) {
      res.status(404).json({ message: 'No Pigs found with that id!'}).end();
    }
    res.status(200).json({message: `Pigs id ${req.params.id} deleted!`}).end();
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;