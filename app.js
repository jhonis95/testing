//testing async functions promises
const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});
const myDate = function() {
    date
      .then(function(done) {
        console.log('We are going on a date!')
        console.log(done)
      })
      .catch(function(error) {
          console.log(error.message)
      })
  }
  
  myDate();
//Chaining Promises
/*
const weather = true
const date    = new Promise(function(resolve, reject) {
  if (weather) {
    const dateDetails = {
      name:     'Cubana Restaurant',
      location: '55th Street',
      table:    5
    };

    resolve(dateDetails)
  } else {
    reject(new Error('Bad weather, so no Date'))
  }
});
const oderUber= function(dateDetails){
	return new Promise(function(resolve,reject){
		const message=`Get me an Uber ASAP to ${dateDetails.location},we are going on a date!`;;
		resolve(message)	
	})
}
const myDate = function() {
  date
    .then(orderUber)  //chaining promises(execute two or more asynchronous operations based on the result of preceding promises.)
    .then(function(done) {
      console.log(done);
    })
    .catch(function(error) {
      console.log(error.message)
    })
}

myDate();
 */

//exemple by mmyself
const Uber=true
const callUber= new Promise(function(resolve,reject){
  if(Uber){
    const address={
      location: 'vilamix',
      price:50,
      people:3
    }
    resolve(address)
  }else{
    reject(new Error('didnt pick the call'))
  }
});
const calling=function(){
  callUber.then(function(address){
    console.log('got the uber')
    console.log(address)
  })
  callUber.catch(function(refuse){
    console.log(refuse)
  })
}
calling();