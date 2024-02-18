// const logEvents= require('./logEvents');
// const fsPromisse= require('fs').promises;
const fs= require('fs');
const path= require('path');
const http= require('http')
const calculate=require('./calculate')
const operations= require('./operation');


// const EventEmitter= require('events');
// class Emitter extends EventEmitter{};

const PORT= process.env.PORT || 3500;

const serve=http.createServer((req,res)=>{


    if(req.method == 'GET'){
        if(req.url=="/"){
            const fileurl = 'index.html';
            const filepath = path.resolve('./views/' + fileurl);
            fs.createReadStream(filepath).pipe(res)
        }
    }
    if(req.method=='POST'){
        if(req.url=='/calculate'){
            //making request body parse to get the data
            const chunks = [];
            req.on("data", (chunk) => {
              chunks.push(chunk);
            });
            req.on("end", () => {
                console.log("all parts/chunks have arrived");
                const data = Buffer.concat(chunks);
                const stringData = data.toString();
                const parsedData = new URLSearchParams(stringData);
                const dataObj = {};
                for (var pair of parsedData.entries()) {
                  dataObj[pair[0]] = pair[1];
                }
                console.log("DataObj: ", dataObj);
                const int1=parseInt(dataObj.input1)
                const int2=parseInt(dataObj.input2)

                const tosend=(response)=>{
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.write(`
                        <h1>the result is:</h1>
                        <p>${response}</p>
                    `)
                }
                console.log(typeof(soma))
                switch(dataObj.operations){
                    case dataObj.operations='soma':
                        tosend(calculate(int1,int2,operations.soma))
                        break;
                    case dataObj.operations='subtracao':
                        tosend(calculate(int1,int2,operations.subtracao))
                        break;
                    case dataObj.operations='divisao':
                        tosend(calculate(int1,int2,operations.divisao))
                        break;
                    case dataObj.operations='multiplicacao':
                        tosend(calculate(int1,int2,operations.multiplicacao))
                        break;
                    default:
                        break;
                }
            });
        }
    }
})
//initialize object
// const myEmitter = new Emitter;

// myEmitter.on('log',(msg)=>{logEvents(msg)})

serve.listen(PORT,()=>{
    console.log(`serve running at port ${PORT}`);
})
// myEmitter.emit('log','log event emitted')
// try{
//     const data =await fsPromisse.readFile(path.join(__dirname,'logs','eventLog.txt'),'utf-8')
//     console.log(`\n${data}`)
// }catch(err){
//     console.log(err)
// }
