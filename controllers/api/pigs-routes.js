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
    const newPost = await Post.create({ ...body, user_id: req.session.userId });
    res.json(newPost);
} catch (err) {
    res.status(500).json(err);
}
});

  module.exports = router;