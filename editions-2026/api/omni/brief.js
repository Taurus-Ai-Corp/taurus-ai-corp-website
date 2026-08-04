// /api/omni/brief.js — clean REST path delegating to campaign-pipeline handler
const pipeline = require('../campaign-pipeline.js')

module.exports = async (req, res) => {
  req.body = req.body || {}
  req.body.action = 'omni_brief'
  return pipeline(req, res)
}
