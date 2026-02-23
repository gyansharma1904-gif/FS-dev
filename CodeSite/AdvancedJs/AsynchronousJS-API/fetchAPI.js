
// try{async function getset() {
  
// const test01 = await fetch('https://api.scrimba.com/bored/api/activity');
// const data =await test01.json();
  
// console.log(data);}
// } catch(error) {
//   console.log (error)
//   throw new Error('Promise Catch:')
  
// } finally {
//   console.log('cool');
// }


try{
  const test01 = await fetch('https://api.scrimba.com/bored/api/activity');
  const data =await test01.json();
  console.log(data);
} catch(error) {
  console.log (error);
  throw new Error('Promise Catch:');
  
} finally {
  console.log('cool');
}




// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     const imageEle = document.createElement('img') ;
//     imageEle.src=data.message;
//     imageEle.alt='random dog pic';
//     document.getElementById('img-container').appendChild(imageEle);
    
//   })
//   .catch(err => console.error(err))
//   .finally (()=>console.log('error completed'));