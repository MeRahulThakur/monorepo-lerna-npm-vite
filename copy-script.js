var fs = require('fs');
var path = require('path');

const commonPackagePath = path.resolve(__dirname, "./packages/common/package.json");
const buildPackagePath = path.resolve(__dirname, "./build/package.json");
const mode = "DEFAULT"; //CUSTOM_ROLLUP

fs.readFile(commonPackagePath, 'utf-8', function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    let commonPackageJSONData = JSON.parse(data);
    commonPackageJSONData.name = 'ui_library';
    commonPackageJSONData.description = "Description of Ui Library";
    delete commonPackageJSONData.devDependencies;
    delete commonPackageJSONData.scripts;
    if (mode === "CUSTOM_ROLLUP") {
      commonPackageJSONData.main = "dist/cjs/index.js";
      commonPackageJSONData.module = "dist/esm/index.js";
      commonPackageJSONData.types = "dist/index.d.ts";
    } else {
      commonPackageJSONData.main = "dist/index.cjs.js";
      commonPackageJSONData.module = "dist/index.es.js";
      commonPackageJSONData.types = "dist/index.es.d.ts";
    }
    commonPackageJSONData.files = ["/dist"];

    json = JSON.stringify(commonPackageJSONData, null, 4);
    fs.writeFile(buildPackagePath, json, 'utf8', (err) => {
      if (err) return console.log('Error occured- ', err);
      console.log('writing finished');
    })
  }
})