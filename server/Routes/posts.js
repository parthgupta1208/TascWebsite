const router = require('express').Router();
const { getAllPost, deletePost, createPost, updatePostByPid } = require('../Controller/postControllers')
const { getMail } = require('../Controller/mailController.js')

//create Post
router.post('/create', createPost)

//delete post by ppid
router.delete('/delete/:pid', deletePost)

//get all post 
router.get('/all',getAllPost)

// update post by pid
router.put('/update/:pid',updatePostByPid )


// email contact

router.post('/sendmail', getMail )

//test
module.exports = router;