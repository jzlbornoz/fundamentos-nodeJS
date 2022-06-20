const os = require('os');

console.log("===Operative System===");
console.log("Arch: " + os.arch());
console.log("Platform: " + os.platform());
console.table(os.cpus());
console.log("Cpu cores: " + os.cpus().length);
//console.table(os.constants);

const size = 1024;
const kb = os.freemem() / size;
const mb = kb / size;
const gb = mb / size;
const sizeGB = size * size * size;

console.log("Free memory(kb): " + kb);
console.log("Free memory(mb): " + mb)
console.log("Free memory(gb): " + gb)
console.log("Total memory(gb): " + os.totalmem / sizeGB)
console.log("home: " + os.homedir());
console.log("home: " + os.hostname());
console.log("=== RED INTERFACES ===");
console.log(os.networkInterfaces());