const router = require('express').Router();
const { Transaction } = require('../../models/');
const withAuth = require('../../utils/auth');

// Get all transactions
router.get('/', withAuth, async (req, res) => {
  try {
    const transactionData = await Transaction.findAll({
      include: [{all: true, nested: true}],
    });
    res.status(200).json(transactionData);

  } catch (err) {
    res.status(500).json(err);
  }
});

//  Get one Transaction

router.get('/:id', withAuth, async (req, res) => {
  try {
    const transactionData = await Transaction.findByPk(req.params.id, {
      include: [{all: true, nested: true}],
    });

    if (!transactionData) {
      res.status(404).json({message: 'No Transaction/s found with that Id!'});
      return;
    }
    res.status(200).json(transactionData);

  } catch (err) {
    res.status(500).json(err);
  }
});

// Make a Transaction
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  
  try {
    const newTransaction = await Transaction.create({...body, user_id: req.session.userId });
      res.json(newTransaction);
  } catch (err) {
      res.status(500).json(err);
  }
  });

// Delete a Transaction
router.delete('/:id', withAuth, async (req, res) => {
  try {
<<<<<<< Updated upstream
    const affectedRows =  Transaction.destroy({
=======
    const transactionData = await Transaction.destroy({
>>>>>>> Stashed changes
      where: {
        id: req.params.id,
        user_id: req.session.user_id,

      },
    });
<<<<<<< Updated upstream
    console.log(affectedRows)
    if (!affectedRows) {
      res.status(404).json({message: 'no Transactions found with that id!'}).end();
=======
    if (!transactionData) {
      res.status(404).json({message: 'no Transactions found with that id!'});
      return;
>>>>>>> Stashed changes
    }

    
    res.status(200).json(transactionData); 
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;