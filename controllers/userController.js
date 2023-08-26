const userController = {
    async loginUser(req, res) {
      try {
        const user = await User.findOne({
          where: { username: req.body.username },
        });
  
        if (!user) {
          // Handle no user found
          return;
        }
  
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
  
        if (!validPassword) {
          // Handle incorrect password
          return;
        }
  
        req.session.save(() => {
          req.session.user_id = user.id;
          req.session.logged_in = true;
          res.redirect('/');
        });
      } catch (err) {
        // Handle error
      }
    },
  };
  