"use strict";

const playlist = require('./controllers/playlist.js');
const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deletesong/:songid', playlist.deleteSong);

router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

module.exports = router;
