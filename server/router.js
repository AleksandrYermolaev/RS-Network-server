import { Router } from "express";
import dotenv from 'dotenv';
import UserController from "./UserController.js";
import PostController from "./PostController.js";

dotenv.config();
const router = new Router();

router.get(process.env.USER_ENDPOINT, UserController.getAll);
router.get(`${process.env.USER_ENDPOINT}/:id`, UserController.getUser);
router.post(process.env.USER_ENDPOINT, UserController.create);
router.patch(`${process.env.USER_ENDPOINT}/:id`, UserController.update);
router.delete(`${process.env.USER_ENDPOINT}/:id`, UserController.delete);

//TO DO ------------------------------------------------------
router.get(`${process.env.USER_POSTS_ENDPOINT}/:userId`);
router.get(`${process.env.THREAD_POSTS_ENDPOINT}/:userId`);
//-----------------------------------------------------------

router.get(`${process.env.POST_ENDPOINT}/:id`, PostController.getPost);
router.post(process.env.POST_ENDPOINT, PostController.create);
router.patch(`${process.env.POST_ENDPOINT}/:id`, PostController.update);
router.delete(`${process.env.POST_ENDPOINT}/:id`, PostController.delete);

router.get(`${process.env.COMMENT_ENDPOINT}/:id`);
router.post(process.env.COMMENT_ENDPOINT);
router.patch(`${process.env.COMMENT_ENDPOINT}/:id`);
router.delete(`${process.env.COMMENT_ENDPOINT}/:id`);

router.get(`${process.env.COMMENTS_ENDPOINT}/:postId`);

export default router;