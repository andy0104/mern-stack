const router = require('express').Router();

// @Route   GET api/auth
// @Desc    Test route
// @Access  Public
router.get('/', (req, res) => {
  res.send('Auth route');
});

module.exports = router;