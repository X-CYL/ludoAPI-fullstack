const express = require('express');
const { setPosts, getPosts, editPost, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const router = express.Router(); // on utilise l'objet routes de express


router.get("/", getPosts)
router.post("/", setPosts)
router.put("/:id", editPost)
router.delete("/:id", deletePost)

// pour les likes et unlikes

router.patch("/like-article/:id", likePost)

router.patch("/dislike-article/:id" , dislikePost)

module.exports = router;