// /api/campaign-pipeline.js — placeholder; wire to real backend logic
module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({
    action: req.body?.action || 'unknown',
    status: 'placeholder',
    note: 'Replace with real campaign pipeline handler before production deploy.'
  })
}
