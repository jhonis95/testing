//testing XMLHttpRequests
const xmlObject= new XMLHttpRequest();//Making the object

xmlObject.addEventListener('load',()=>{ //event to handle if the request is accept
  console.log("worked");
  const data= JSON.parse(xmlObject.response);    
  for(let items of data){
    console.log(items) 
  }
});
xmlObject.addEventListener("error",()=>{
  console.log("deu ruim")
})
xmlObject.open('GET','https://fakestoreapi.com/products/')//where to get the request
xmlObject.send() //majing the request

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