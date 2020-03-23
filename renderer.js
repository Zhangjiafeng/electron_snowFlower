// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const SnowFlower = require('./snowFlower.js');
setInterval(()=>{
    for(let i=0;i<Math.ceil(Math.random()*10+10);i++){
        document.body.appendChild(new SnowFlower().img)
    }
},800)
