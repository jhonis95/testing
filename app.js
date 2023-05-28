//testing XMLHttpRequests
// const xmlObject= new XMLHttpRequest();//Making the object

// xmlObject.addEventListener('load',()=>{ //event to handle if the request is accept
//   console.log("worked");
//   const data= JSON.parse(xmlObject.response);    
//   for(let items of data){
//     console.log(items) 
//   }
// });
// xmlObject.addEventListener("error",()=>{
//   console.log("deu ruim")
// })
// xmlObject.open('GET','https://fakestoreapi.com/products/')//where to get the request
// xmlObject.send() //majing the request

//************************************************ */
//Nested XHR HTTP Requests
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function() {
// 	console.log('FIRST REQUEST WORKED!!!');
// 	const data = JSON.parse(this.responseText);
// 	const filmURL = data.results[0].films[0];
// 	const filmReq = new XMLHttpRequest();
// 	filmReq.addEventListener('load', function() {
// 		console.log('SECOND REQUEST WORKED!!!');
// 		const filmData = JSON.parse(this.responseText);
// 		console.log(filmData.title);
// 	});
// 	filmReq.addEventListener('error', function(e) {
// 		console.log('ERROR!!', e);
// 	});
// 	filmReq.open('GET', filmURL);
// 	filmReq.send();
// });
// firstReq.addEventListener('error', (e) => {
// 	console.log('ERROR!!!!!!');
// });
// firstReq.open('GET', 'https://swapi.co/api/planets/');
// firstReq.send();
// console.log('Request Sent!');

//************************************************ */
// Async and Await
// async function add(x,y){//async function return a promise
//   if(typeof x!=='number'||typeof y!=='number'){
//     throw 'inputs must be a number'//reject
//   }
//   return x+y;//resolve
// }
// add().then((retorno)=>{
//   console.log(`o valor da  soma foi:${retorno}`)
// }).catch((err)=>{
//     console.log(err)
// })
// //without async
// function add(x,y){
//   return new Promise((resolve,reject)=>{
//     if(typeof x!=='number'||typeof y!=='number'){
//       reject('inputs must be a number')//reject
//     }
//     resolve(x+y);
//   })
// }
// //AWAIT   Await eliminates the use of callbacks in .then()and .catch(). 
// //without await
// function getPlanets(){
//   return axios.get('https://swapi.co/api/planets/');
// }
// getPlanets().then((res)=>{
//   console.log(res.data);
// })
// //with await
// async function getPlanets(){
//   const res= await axios.get('https://swapi.co/api/planets/');
//   console.log(res.data);
// }
// //erro handling with await
// async function getPlanets(){
//   try{
//     const res= await axios.get('https://swapi.co/api/planets/');
//     console.log(res.data);
//   }catch(e){
//     console.log('erro',e)
//   }
// }
//************************************************ */
//testing objects
// class label {
//   constructor(task) {
//     {
//       this.task = [task];
//     }
//   }
//   addTask(task){
//     this.task.push(task);
//   }
// }
// class task {
//   constructor(taskName, description, check, color, date) {
//     this.taskName = taskName;
//     this.description = description;
//     this.check = check;
//     this.color = color;
//     this.date = date;
//   }
//   addName(taskName){
//     this.taskName=taskName;
//   }
//   addDescription(description){
//     this.description=description
//   }
// }
//************************************************ */
// let a=5
// let b='5'
// function compare(numberA,numberB){
//   if(numberA===numberB){
//     console.log('numberes are the same');
//   }else{
//     console.log('numbers are different '+typeof numberA+' and '+typeof numberB);
//   }
// }
// compare(a,b)
//************************************************ */
// function soma(...numbers){
//   // for(let n=0;n=numbers.length;n++){
//   //   return n+n;
//   // } or
//   return numbers.reduce((sum,n)=>sum+=n,0);
// };
// console.log(soma(1,2,3));