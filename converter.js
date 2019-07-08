const io = require('./local-io');
const fs = require('fs');
const maps = require('./maps');

const formats = {
	'aiomoji' : {
		loadFile: io.csv.load,
		saveFile: io.csv.save
	},
	'anbaio' : {
		loadFile: io.csv.load,
		saveFile: io.csv.save
	},
	'balko' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'bnb' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'candypreme' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'cinnasole' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'cyber' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'dashev3' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'eveaio' : {
		loadFile: io.xml.load,
		saveFile: io.xml.save
	},
	'hastey' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'kodai' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'oculus' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'pd' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'phantom' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'prism' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'profiles' : {
		loadFile: function(fileName, cb) {
			let data = fs.readFileSync(fileName, 'utf-8');
			let json = data.split(';').map(JSON.parse);
			cb(json);

			return json;
		},

		saveFile: function (fileName, data) {
			var raw = data.map(JSON.stringify).join(';')
			fs.writeFileSync(fileName, raw);
		}
	},
	'sneaker_copter' : {
		loadFile: io.csv.load,
		saveFile: io.csv.save
	},
	'sole_terminator' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'soleaio' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'whatbot' : {
		loadFile: io.db.load,
		saveFile: io.db.save
	},
	'yitan' : {
		loadFile: io.zip.load,
		saveFile: io.zip.save
	},
	'NSB' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	},
	'TKS' : {
		loadFile: io.json.load,
		saveFile: io.json.save
	}
}

function defaultRemap(data) {
	return data;
}


function intoDefault(input, map) {
	var def = input;
	return def;
}

function fromDefault(def, map) {
	var output = def;
	return output;
}

function xd(v){console.log(v); process.exit();}

identity = x => x;

function convert(sourceFile, targetFile, sourceFormatName, targetFormatName) {

//	io.csv.load('formats/anbaio.csv', xd)

	if(!formats.hasOwnProperty(sourceFormatName))
		throw('Unknown format' + sourceFormatName);
	if(!formats.hasOwnProperty(targetFormatName))
		throw('Unknown format' + targetFormatName);
	let sourceFormat = formats[sourceFormatName];
	let targetFormat = formats[targetFormatName];
	let sourceMap = maps[sourceFormatName];
	let targetMap = maps[targetFormatName];
	let packer = targetMap.pack || identity;
	let unpacker = sourceMap.unpack || identity;

	sourceFormat.loadFile(sourceFile, function(sourceDataRaw) {
		sourceData = sourceMap.hasOwnProperty('unpack') ? sourceMap.unpack(sourceDataRaw) : sourceDataRaw;
		var defaultData = sourceData.map((row) => maps[sourceFormatName].intoDefault(row, maps[sourceFormatName].map));
		var resultDataRaw =  defaultData.map((row) => maps[targetFormatName].fromDefault(row, maps[targetFormatName].map));
		resultData = targetMap.hasOwnProperty('pack') ? targetMap.pack(resultDataRaw) : resultDataRaw;
		console.log(resultData)
		targetFormat.saveFile(targetFile, resultData)

	})
}

module.exports = { convert }






