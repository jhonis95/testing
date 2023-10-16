const logEvents= require('./logEvents');
const fsPromisse= require('fs').promises;
const path= require('path');

const EventEmitter= require('events');
const { throws } = require('assert');

class MyEmitter extends EventEmitter{};

//initialize object
const myEmitter = new MyEmitter;

//adding the event listener
myEmitter.on('log',(msg)=>{logEvents(msg)})

setTimeout(async ()=>{
    myEmitter.emit('log','log event emitted')
    try{
        const data =await fsPromisse.readFile(path.join(__dirname,'logs','eventLog.txt'),'utf-8')
        console.log(`\n${data}`)
    }catch(err){
        console.log(err)
    }
},2000)