import {Router} from "express";
import PostController from "./post-controller.js";
import postController from "./post-controller.js";

const router = new Router()

router.post('/posts', PostController.create)
router.get('/posts', PostController.getAll)
router.get('/posts/:id', postController.getOne)
router.put('/posts', PostController.update)
router.delete('/posts/:id', PostController.delete)

export default router;