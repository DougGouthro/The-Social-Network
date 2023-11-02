const router = require('express').Router();
const courseRoutes = require('./thoughtsRoutes');
const studentRoutes = require('./userRoutes');

router.use('/courses', courseRoutes);
router.use('/students', studentRoutes);

module.exports = router;
