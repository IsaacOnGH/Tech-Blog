const postController = {
    async getPost(req, res) {
      try {
        const post = await BlogPost.findByPk(req.params.id, {
          include: [
            { model: User, attributes: ['username'] },
            {
              model: Comment,
              include: [{ model: User, attributes: ['username'] }],
            },
          ],
        });
        res.render('post', { post, loggedIn: req.session.logged_in });
      } catch (err) {
        // Handle error
      }
    },
  };
  