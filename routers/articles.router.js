const articlesRouter = require("express").Router();
const { handle405Errors, handleWrongRoute } = require("../errors/index.js");
const {
  getArticleById,
  patchArticleById,
  getArticles,
  postArticle,
  deleteArticle
} = require("../controllers/articles.controller.js");

const {
  postComment,
  getCommentsByArticleId
} = require("../controllers/comments.controller.js");

articlesRouter
  .route("/")
  .get(getArticles)
  .post(postArticle)
  .all(handle405Errors);

articlesRouter
  .route("/:article_id")
  .get(getArticleById)
  .patch(patchArticleById)
  .delete(deleteArticle)
  .all(handle405Errors);

articlesRouter
  .route("/:article_id/comments")
  .post(postComment)
  .get(getCommentsByArticleId)
  .all(handle405Errors);

articlesRouter.route("/*", handleWrongRoute);

module.exports = articlesRouter;
