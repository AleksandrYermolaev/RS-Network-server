import { Router } from 'express';
import dotenv from 'dotenv';
import UserController from './controllers/UserController.js';
import PostController from './controllers/PostController.js';
import CommentController from './controllers/CommentController.js';
import UserPostsController from './controllers/UserPostsController.js';
import ThreadPostsController from './controllers/ThreadPostsController.js';
import LoginController from './controllers/LoginController.js';
import validateToken from './middlewares/validateToken.js';
import FileController from './controllers/FileController.js';
import LikesController from './controllers/LikesController.js';
import FollowingController from './controllers/FollowingController.js';
import DialogsController from './controllers/DialogsController.js';
import MessageController from './controllers/MessageController.js';

dotenv.config();
const router = new Router();
const USER = process.env.USER_ENDPOINT;
const USER_REMOVE = process.env.USER_REMOVE_ENDPOINT;
const LOGIN = process.env.LOGIN_ENDPOINT;
const PERMISSION = process.env.PERMISSION_ENDPOINT;
const POST = process.env.POST_ENDPOINT;
const IMAGE_UPLOAD = process.env.IMAGE_UPLOAD_ENDPOINT;
const COMMENT = process.env.COMMENT_ENDPOINT;
const COMMENTS = process.env.COMMENTS_ENDPOINT;
const USER_POSTS = process.env.USER_POSTS_ENDPOINT;
const THREAD_POSTS = process.env.THREAD_POSTS_ENDPOINT;
const LIKES = process.env.LIKE_ENDPOINT;
const FOLLOWING = process.env.FOLLOWING_ENDPOINT;
const DIALOGS = process.env.DIALOGS_ENDPOINT;
const MESSAGES = process.env.MESSAGES_ENDPOINT;

router.get(USER, UserController.getAll);
router.get(`${USER}/:id`, UserController.getUser);
router.post(USER, UserController.create);
router.patch(`${USER}/:id`, UserController.update);
router.delete(`${USER}/:id`, UserController.delete);
router.delete(`${USER_REMOVE}/:id`, UserController.userRemove);

router.post(LOGIN, LoginController.login);
router.get(PERMISSION, validateToken, LoginController.getPermission);

router.get(`${USER_POSTS}/:userId`, UserPostsController.getUserPosts);
router.get(`${THREAD_POSTS}/:userId`, ThreadPostsController.getThreadPosts);

router.get(`${POST}/:id`, PostController.getPost);
router.post(POST, PostController.create);
router.patch(`${POST}/:id`, PostController.update);
router.delete(`${POST}/:id`, PostController.delete);
router.post(IMAGE_UPLOAD, FileController.upload);

router.post(`${LIKES}/:postId`, LikesController.likeOrUnlike);

router.get(`${COMMENT}/:id`, CommentController.getComment);
router.post(COMMENT, CommentController.create);
router.patch(`${COMMENT}/:id`, CommentController.update);
router.delete(`${COMMENT}/:id`, CommentController.delete);
router.get(`${COMMENTS}/:postId`, CommentController.getPostComments);

router.get(`${FOLLOWING}/:userId`, FollowingController.getFollowings);

router.post(DIALOGS, DialogsController.createDialog);
router.get(`${DIALOGS}/:userId`, DialogsController.getUserDialogs);

router.post(MESSAGES, MessageController.createMessage);
router.get(`${MESSAGES}/:dialogId`, MessageController.getMessages);

export default router;
