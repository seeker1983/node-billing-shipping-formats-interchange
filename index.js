/* Example usage file */
var __scriptName = __filename.slice(__filename.lastIndexOf(require('path').sep)+1);
const USAGE = `
	Usage:
		node ${__scriptName} <input-file> <output-file> <input-format> <output-format>
	Example:
		node ${__scriptName} formats/aiomoji.csv profiles_result.json aiomoji profiles

	Supported formats(and appropriate example file)		
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
`;
/* Demo formats
	formats/NSB.json NSB
	formats/cyber.json cyber
	formats/prism.json prism
	formats/TKS.json TKS
	formats/dashev3.json dashev3
	formats/profiles.json profiles
	formats/aiomoji.csv aiomoji
	formats/eveaio.xml eveaio
	formats/sneaker_copter.csv sneaker_copter
	formats/anbaio.csv anbaio
	formats/hastey.json hastey
	formats/sole_terminator.json sole_terminator
	formats/balko.json balko
	formats/kodai.json kodai
	formats/soleaio.json soleaio
	formats/bnb.txt bnb
	formats/oculus.json oculus
	formats/whatbot.db whatbot
	formats/candypreme.json candypreme
	formats/pd.json pd
	formats/yitan.zip yitan
	formats/cinnasole.json cinnasole
	formats/phantom.json phantom
*/

if(process.argv.length < 6) {
	console.log(USAGE);
	process.exit();
}

const converter = require('./converter');

converter.convert(process.argv[2],process.argv[3],process.argv[4],process.argv[5]);





