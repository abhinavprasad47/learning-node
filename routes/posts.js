const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req,res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/spec', (req,res) => {
    res.send('specific powli post');
});

router.post('/',async (req,res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
/*    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        });
*/
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});

router.get('/:postId',async (req,res) =>{
    try
    {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message : err});
    }

});
//Delete Post
router.delete('/postId',async (req,res) => {
    try {
    const removePost = Post.remove({_id: req.params.postId});
    res.json(removePost)
    }catch(err){
        res.json({ message : err });
    }
});

//update post
router.patch('/postId',async (req,res) => {
    try {
    const updatedPost = Post.updateOne({_id: req.params.postId}, { $set: { title :req.body.title }});
    res.json(updatedPost)
    }catch(err){
        res.json({ message : err });
    }
});


module.exports = router