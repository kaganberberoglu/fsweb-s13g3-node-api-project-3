const userModel = require("../users/users-model");

function logger(req, res, next) {
  let method = req.method;
  let url = req.originalUrl;
  let timestamp = new Date().toLocaleString();

  console.log(`${method} -- ${url} -- ${timestamp}`);
  next();
}

async function validateUserId(req, res, next) {
  try {
    const user = await userModel.getById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "kullanıcı bulunamadı" });
    } else {
      req.currentUser = user;
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateUser(req, res, next) {
  try {
    let { name } = req.body;
    if (!name) {
      res.status(400).json({ message: "gerekli name alanı eksik" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validatePost(req, res, next) {
  try {
    let { text } = req.body;
    if (!text) {
      res.status(400).json({ message: "gerekli text alanı eksik" });
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = {
  logger,
  validateUserId,
  validateUser,
  validatePost
}
