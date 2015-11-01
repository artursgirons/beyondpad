var app = require('../../app');
var upgrade = require('../controllers/upgrade');

app.get('/api/upgrade/v1/upgrade_to_support_sync', upgrade.v1.upgradeToSupportSync);