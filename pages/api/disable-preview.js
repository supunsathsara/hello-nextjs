export default function handler(req, res) {
  res.clearPreviewData();
  res.end('Preview Mode is disabled');
}
