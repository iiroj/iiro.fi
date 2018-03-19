module.exports = (req, res, next) => {
  const host = req.get("host");

  if (host.startsWith("www.")) {
    res.redirect(301, `https://${host.replace(/$www\./, "")}`);
  } else {
    next();
  }
};
