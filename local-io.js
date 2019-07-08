const csv = require('fast-csv');
const fs = require('fs');
const xml2js = require('xml2js');
const xmlParser = (new xml2js.Parser({ attrkey: "ATTR"})).parseString;
const jsonCSVParser = require('json2csv').parse;

function xd(v){console.log(v); process.exit();}

const io = {
	csv : {
		load: function (fileName, cb) {
			var rows = [];
			fs.createReadStream(fileName)
			  .pipe(csv.parse({ headers: true }))
			  .on('data', row => rows.push(row))
			  .on('end', () => cb(rows))
		},

		save: function (fileName, data) {
			const fields = Object.keys(data[0]);
			const opts = { fields, quote:''};

			try {
			  const csv = jsonCSVParser(data, opts);
			  fs.writeFileSync(fileName, csv);
			} catch (err) {
			  console.error(err);
			}

		}
	},

	json: {
		load: function (fileName, cb) {
			let data = fs.readFileSync(fileName);
			let json = JSON.parse(data);

			cb(json);

			return json;
		},

		save: function (fileName, data) {
			var json = JSON.stringify(data, null, 2);
			//xd([data,json])
			fs.writeFileSync(fileName, json);
		}
	},

	db: {
		load: function (fileName, cb) {
			throw 'Implement';
			let data = fs.readFileSync(fileName);
			let json = JSON.parse(data);

			cb(json);

			return json;
		},

		save: function (fileName, data) {
			throw 'Implement';
			let json = JSON.stringify(data, null, 2);
			fs.writeFileSync(fileName, json);
		}
	},

	xml : {
		load: function (fileName, cb) {
			let string = fs.readFileSync(fileName, 'utf8');

			xmlParser(string, function(error, result) {
			    if(error === null) {
			        cb(result);
			    }
			    else {
			        throw 'LOAD XML ' + fileName + ' error: ' + error;
			    }
			});
		},
		save: function (fileName, data) {
			throw 'Implement';
		}
	},
	zip : {
		load: function (fileName, cb) {
			throw 'Implement';
		},
		save: function (fileName, data) {
			throw 'Implement';
		}
	}
}

module.exports = io;




