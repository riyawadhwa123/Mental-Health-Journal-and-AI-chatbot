const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token, authorization denied.' });
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.userId };
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token is not valid.' });
  }
}

module.exports = auth; 