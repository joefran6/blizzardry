const r = require('restructure')
const Entity = require('../entity')

module.exports = Entity({
  id: r.uint32le,
  realmType: r.uint32le,
  pvp: r.uint32le,
  roleplay: r.uint32le
})
