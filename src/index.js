module.exports = function check(str, bracketsConfig) {
  
	let result = true;
	let conf = bracketsConfig;

	for (let i = 0; i < conf.length; i++) {		
		if ( !((str[i] == conf[i][0]) && (str[str.length - (i + 1)] == conf[i][1])) )
		{
			result = false;
		}
	}	
	return result;
}
