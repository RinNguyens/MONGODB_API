const express  =  require('express');
const router = express.Router();
const Post = require('../../models/Post');

// Get all the posts
router.get('/',(req,res,next) => {
    Post.find()
    .then((posts) => {
        res.json(posts);
    })
    .catch((err) => {
        console.log(err);
    })
});

// create a post

router.post('/add', (req,res,next) => {
   const title = req.body.title;
   const body = req.body.body;

   const newPost = new Post({
       title : title,
       body : body
   });
   
   newPost.save()
    .then((post) => {
        res.json(post);
    })
    .catch((err) => {
        console.log(err);
    })


})

// To Update a Post
router.put('/update/:id',(req,res,next) => {
    // Grab the id of the post : lay id cua bai viiet
    let id = req.params.id;
    // Find the Post By ID from the Databbase
    Post.findById(id)
    .then(post => {
        post.title = req.body.title;
        post.body = req.body.body;

        post.save()
        .then(post => {
            res.send({message: 'Post updated Successfully', status : 'success',post : post})
        })
        .catch((err) =>{ 
            console.log(err);
        })
    })

});

// Delete a Post
router.delete('/delete/:id',(req,res,next) => {
    // Grab the id of Post :  lay id bai viet muon Xoa
    let id  = req.params.id;
    
    // Find id the post By ID from the Database
    Post.findById(id)
    .then(post => {
        post.delete()
        .then(post => {
            res.send({
                message : 'Post Deleted Successfully',
                status  : 'success',
                post : post
            })
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router;