function selectIten(item){
  let price = 0;
  
  switch (item) {
    case 'coffee':
      price=2;
      break;
    case 'tea':
      price=5;
      break;
    default:
      return(`we don't sell ${item}`);
  }
  return (`you selected ${item}. this will be ${price}`);
}

console.log(selectIten('milk'));

