const router = require('express').Router();
const { Pigs } = require('../../models/');

router.get('/', async (req, res) => {
    try {
      const pigsData = await Pigs.findAll({
        include: [{ all: true, nested: true }],
      });
      res.status(200).json(pigsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;