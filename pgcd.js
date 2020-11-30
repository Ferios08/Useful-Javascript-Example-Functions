function pgcd(a, b) { // Algorithme d'Euclide  
  while (b>0) {   
    var r=a%b;  
    a=b;  
    b=r;  
  }   
  return a;  
}
console.log(pgcd(100,70))