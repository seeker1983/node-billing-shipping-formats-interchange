## Format converter
Nodejs based converter for various formats.
Supported formats:
		- NSB                formats/NSB.json
		- cyber              formats/cyber.json
		- prism              formats/prism.json
		- TKS                formats/TKS.json
		- dashev3            formats/dashev3.json
		- profiles           formats/profiles.json
		- aiomoji            formats/aiomoji.csv
		- eveaio             formats/eveaio.xml
		- sneaker_copter     formats/sneaker_copter.csv
		- anbaio             formats/anbaio.csv
		- hastey             formats/hastey.json
		- sole_terminator    formats/sole_terminator.json
		- balko              formats/balko.json
		- kodai              formats/kodai.json
		- soleaio            formats/soleaio.json
		- bnb                formats/bnb.txt
		- oculus             formats/oculus.json
		- whatbot            formats/whatbot.db
		- candypreme         formats/candypreme.json
		- pd                 formats/pd.json
		- yitan              formats/yitan.zip
		- cinnasole          formats/cinnasole.json
		- phantom            formats/phantom.json
### Prerequisites
- [node.js](https://nodejs.org)
- [git](https://git-scm.com/downloads)

### Installation

    git clone https://github.com/ThompsonThom/profile-conveter.git
    npm install
    
### Usage

	node index.js <input-file> <output-file> <input-format> <output-format>
Example.

	node index.js formats/aiomoji.csv profiles_result.json aiomoji profiles

### Structure

- **formats/**
Example of format files.
- **index.js**
Command-line interface.
- **local-io.js**
Package for operating local file system for most formats io. Some formats have special behaviour overriden in converter.js
- **converter.js**
Base engine for conversion
- **maps.js**
Format bindings and override of behavior for some custom format cases.

### Dependencies
- fast-csv
- json2csv
- jszip
- lodash
- unzip
- xml2js