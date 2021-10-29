export async function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: 'Unknown path: ' + req.path,
  });
}
