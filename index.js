const converter = require('./converter');

var files = {
	csv : 'formats/aiomoji.csv',
	json: 'formats/balko.json',
	xml : 'formats/eveaio.xml'
}

var out = {
	csv : 'output/aiomoji.csv',
	json: 'output/balko.json',
	xml : 'output/eveaio.xml'
}

//io.loadCSV('formats/aiomoji.csv', console.log);

//console.log(io.loadJSON('formats/balko.json'));

//io.loadXML('formats/eveaio.xml', console.log);

//io.loadXML(files.xml, function(data) {
//	console.log(JSON.stringify(data))
//});

//var data = io.loadJSON(files.json);

//io.loadCSV(files.csv, function(data) {
//	io.saveCSV(out.csv, data)
//
//});

//converter.convert('formats/aiomoji.csv', 'output/result.txt', 'aiomoji', 'kodai');
//converter.convert('formats/kodai.json', 'output/result.txt', 'kodai', 'oculus');
//converter.convert('formats/whatbot.db', 'output/result.txt', 'whatbot', 'oculus');
//converter.convert('formats/yitan.zip', 'output/result.txt', 'yitan', 'eveaio');
converter.convert('formats/TKS.json', 'output/result.zip', 'TKS', 'yitan');
//converter.convert('formats/oculus.json', 'output/result.txt', 'oculus', 'hastey');
//converter.convert('formats/cyber.json', 'output/result.txt', 'cyber', 'aiomoji');
//converter.convert('formats/profiles.json', 'output/result.txt', 'profiles', 'hastey');
//converter.convert('formats/eveaio.xml', 'output/result.txt', 'eveaio', 'aiomoji');





