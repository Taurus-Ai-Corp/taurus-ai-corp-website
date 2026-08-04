// /api/campaigns.js — runtime catalog of campaigns
const fs = require('fs')
const path = require('path')

function readCampaigns(base) {
  const campaigns = []
  const dir = path.join(base, 'public', 'campaigns')
  if (!fs.existsSync(dir)) return campaigns
  for (const id of fs.readdirSync(dir)) {
    const metaPath = path.join(dir, id, 'metadata.json')
    if (fs.existsSync(metaPath)) {
      try {
        campaigns.push(JSON.parse(fs.readFileSync(metaPath, 'utf8')))
      } catch {}
    }
  }
  return campaigns
}

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.status(200).json({ campaigns: readCampaigns(process.cwd()) })
}
