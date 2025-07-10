import { Router } from "express";
import { createPost, deletePostById, getAllPublishedPosts, getPublishedPostById, updatePostById } from "../controllers/post.controller";

const router = Router();

router.post('/' , createPost);
router.get('/' , getAllPublishedPosts);
router.get('/:id' , getPublishedPostById);
router.put('/:id' , updatePostById);
router.delete('/:id' , deletePostById);

export default router;