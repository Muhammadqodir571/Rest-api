const {Router} = require('express')
const {getAllPost,addNewPost,getByIdPost,updatePost,deletePost} = require('../controllers/post.controller')
const router = Router()

router.get('/all',getAllPost)

router.post('/add',addNewPost)
router.get('/:id',getByIdPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)
module.exports = router
