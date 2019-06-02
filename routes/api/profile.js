const router = require('express').Router();

// @Route   GET api/profile
// @Desc    Test route
// @Access  Public
router.get('/', (req, res) => {
  res.send('Profile route');
});

module.exports = router;