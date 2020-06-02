const sourceConfig = require("./configs.json");
const womPoller = require("./service/WorldoMeterPoller");

if(sourceConfig.sourceSite == "worldometers"){
    womPoller.run();

}