var Logmodule = require(__dirname + '/Log.js');
var arr = Array.from({ length: 40 }, (v, i) =>  i + 1);
arr = arr.join(' ')

Logmodule.silly(arr)
Logmodule.input(arr)
Logmodule.prompt(arr)
Logmodule.verbose(arr)
Logmodule.data(arr)
Logmodule.help(arr)
Logmodule.info(arr)
Logmodule.debug(arr)
Logmodule.prompt(arr)
Logmodule.table(arr)
Logmodule.warn(arr)
Logmodule.log(arr)
Logmodule.error(arr)