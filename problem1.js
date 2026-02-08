function newPrice(currentPrice, discount){
  const discountPrice = currentPrice - (currentPrice * discount / 100);  
  return discountPrice.toFixed(3);
if (typeof currentPrice !== 'number' || typeof discount !== 'number') {
        return 'Invalid';
}
 
else if (discount < 0 || discount > 100) {
      return 'Invalid'
}
}
// let output = newPrice(2500, 20);
// console.log(output);
