export default function handler(req, res) {
  res.setPreviewData({ redirect: req.query.redirect });
  res.redirect(req.query.redirect);
  //res.end('Preview Mode is enabled');
}
