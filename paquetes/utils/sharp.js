const sharp = require("sharp");

sharp('logo.png').resize(20).toFile('logoResized.png');