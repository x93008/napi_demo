const addon = require('./build/Release/build-node-addon-api-with-cmake.node');

var isdd = 0;
const callback = (...args) => { 
    console.log("isdd: ", isdd++);
    console.log(new Date, ...args); 
};

void async function() {
    console.log(await addon.createTSFN(callback));
    //addon.createTSFN(callback);
    console.log("立即结束");
}();

//setTimeout(()=>{
    //console.log("end");
//}, 200000);
