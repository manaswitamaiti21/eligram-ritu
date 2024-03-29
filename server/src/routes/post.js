const express = require('express');

const multer = require('./../middlewares/multer');

const {
  createPost,
  getAllPostsByUsername,
  getImageById,
  getFeed,
} = require('../controllers/post');

const auth = require('./../middlewares/auth');

const router = express.Router();

router.post('/', auth(), multer.array('photos', 5), createPost);

router.get('/u/:username', getAllPostsByUsername);

router.get('/images/:id', getImageById);

router.get('/feed', getFeed);

module.exports = router;
