const { Comment } = require('../models');

const commentController = {
  async addComment(req, res) {
    try {
      const newComment = await Comment.create({
        content: req.body.content,
        BlogPostId: req.params.postId,
        UserId: req.session.user_id,
      });
      // Handle success or error
    } catch (err) {
      // Handle error
    }
  },
};

module.exports = commentController;
