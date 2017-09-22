var katzDeli = [];

function takeANumber(katzDeli,name){

  if (katzDeli.length ==0) {
    katzDeli[0] = name
  }else {
    katzDeli.push(name)
  }
return 'Welcome, '+name+'. You are number '+(katzDeli.length) +' in line.'
}


/*
2. Build a function `nowServing`. This function should return the first person in line
 and then remove that individual from the line. If there is nobody in line,
  it should return "There is nobody waiting to be served!"

*/

function nowServing(katzDeli){

  if(katzDeli.length == 0){
    var person = katzDeli[0]
    return 'Currently serving '+person+'.';
  }else {
    return  "There is nobody waiting to be served!"
  }   
}