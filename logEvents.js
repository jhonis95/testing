//no native modules
const {format}= require('date-fns');
const {v4:uuid}= require('uuid');

//native modules
const fs= require('fs')
const fsPromisse= require('fs').promises;
const path= require('path');

const logEvents= async (message)=>{
    const dataTime= `${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem= `${dataTime}\t${uuid()}\t${message}\n`;

    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromisse.mkdir(path.join(__dirname,'logs'));
        }
        //test
        await fsPromisse.appendFile(path.join(__dirname,'logs','eventLog.txt'),logItem)
    }catch(err){
        console.log(err)
    }
}

module.exports= logEvents;