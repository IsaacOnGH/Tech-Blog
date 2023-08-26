const { BlogPost, User } = require('../models');

const homeController = {
  async getHomePage(req, res) {
    try {
      const blogPosts = await BlogPost.findAll({
        include: {
          model: User,
          attributes: ['username'],
        },
      });
      res.render('home', { blogPosts });
    } catch (err) {
      // Handle error
    }
  },
};

module.exports = homeController;
