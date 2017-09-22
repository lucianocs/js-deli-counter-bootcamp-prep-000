var katzDeli = [];

function takeANumber(katzDeli,name){

  if (katzDeli.length ==0) {
    katzDeli[0] = name
  }else {
    katzDeli.push(name)
  }
return 'Welcome, '+name+'. You are number '+(katzDeli.length) +' in line.'
}
