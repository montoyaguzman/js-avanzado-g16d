const os = require('os');

console.log('version sistema: ', os.version()); 
console.log('arquitectura: ',os.arch()); 
console.log('da información acerca de los cpus: ', os.cpus());
console.log('memoria libre en bytes', os.freemem()); 
console.log('carpeta del usuario actual: ', os.homedir()); 
console.log('mi direccion ip o mi hostname (local): ', os.hostname()); 
console.log('version del sistema: ', os.platform());
console.log('version del sistema detallada: ', os.version());