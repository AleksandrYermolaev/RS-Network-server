import { Router } from 'express';
import dotenv from 'dotenv';
import UserController from './controllers/UserController.js';
import PostController from './controllers/PostController.js';
import CommentController from './controllers/CommentController.js';
import UserPostsController from './controllers/UserPostsController.js';
import ThreadPostsController from './controllers/ThreadPostsController.js';
import LoginController from './controllers/LoginController.js';
import validateToken from './controllers/middlewares/validateToken.js';

dotenv.config();
const router = new Router();
const USER = process.env.USER_ENDPOINT;
const LOGIN = process.env.LOGIN_ENDPOINT;
const PERMISSION = process.env.PERMISSION_ENDPOINT;
const POST = process.env.POST_ENDPOINT;
const COMMENT = process.env.COMMENT_ENDPOINT;
const COMMENTS = process.env.COMMENTS_ENDPOINT;
const USER_POSTS = process.env.USER_POSTS_ENDPOINT;
const THREAD_POSTS = process.env.THREAD_POSTS_ENDPOINT;

router.get(USER, UserController.getAll);
router.get(`${USER}/:id`, UserController.getUser);
router.post(USER, UserController.create);
router.patch(`${USER}/:id`, UserController.update);
router.delete(`${USER}/:id`, UserController.delete);

router.post(LOGIN, LoginController.login);
router.get(PERMISSION, validateToken, LoginController.getPermission);

router.get(`${USER_POSTS}/:userId`, UserPostsController.getUserPosts);
router.get(`${THREAD_POSTS}/:userId`, ThreadPostsController.getThreadPosts);

router.get(`${POST}/:id`, PostController.getPost);
router.post(POST, PostController.create);
router.patch(`${POST}/:id`, PostController.update);
router.delete(`${POST}/:id`, PostController.delete);

router.get(`${COMMENT}/:id`, CommentController.getComment);
router.post(COMMENT, CommentController.create);
router.patch(`${COMMENT}/:id`, CommentController.update);
router.delete(`${COMMENT}/:id`, CommentController.delete);
router.get(`${COMMENTS}/:postId`, CommentController.getPostComments);

export default router;
