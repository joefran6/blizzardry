var Entity, r;

r = require('restructure');

Entity = require('../entity');

module.exports = Entity({
  id: r.uint32le,
  bloodRuneCost: r.uint32le,
  unholyRuneCost: r.uint32le,
  frostRuneCost: r.uint32le,
  runePowerGain: r.uint32le
});