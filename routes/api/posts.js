const router = require('express').Router();

// @Route   GET api/posts
// @Desc    Test route
// @Access  Public
router.get('/', (req, res) => {
  res.send('Posts route');
});

module.exports = router;