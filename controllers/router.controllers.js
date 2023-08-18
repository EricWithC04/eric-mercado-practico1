ctrl = {
  renderExpressFileupload: (req, res) => {
    res.render("index");
  },
  renderCloudinary: (req, res) => {
    res.render("cloudinaryForm");
  },
};

module.exports = ctrl;
