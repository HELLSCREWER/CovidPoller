const asyncPolling = require("async-polling");
const sourceConfig = require("../configs.json");
const WomStats = require("../model/womStats");
const covidDB = require("../utils/dbUtils");
const reqProm = require("request-promise");
const $ = require("cheerio");

var wOmPoller = asyncPolling((end) => {
  console.log("Polling " + sourceConfig.sourceSite);

  try {
    let html = reqProm(sourceConfig.sourceUrl).then((html) => {
      console.log($("#maincounter-wrap", html).text().split("\n\n"));

      let womStats = $("#maincounter-wrap", html).text().split("\n\n");

      const stats = new WomStats({
        totalCases: parseInt(womStats[1].replace(/,/g,"")),
        deaths: parseInt(womStats[3]),
        recovered: parseInt(womStats[5]),
      });

      covidDB.insertOne(stats);
    });
  } catch (error) {
    end(error);
  }
  end(null, "ended");
}, 3000);

// wOmPoller.run();
module.exports = wOmPoller;
