const { BlogPost, User } = require('../models');

const dashboardController = {
  async getDashboard(req, res) {
    try {
      const userPosts = await BlogPost.findAll({
        where: { UserId: req.session.user_id },
      });
      res.render('dashboard', { userPosts });
    } catch (err) {
      // Handle error
    }
  },
};

module.exports = dashboardController;
