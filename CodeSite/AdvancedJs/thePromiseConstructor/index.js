const firstPromise = new Promise(  (resolve,reject)=>{
    const success = Math.random()>0.5;
    if (success) {
      resolve("opr success");
    }
    else{
      reject("opr failed");
    }
  });
  
// firstPromise.then(response => console.log(response));

try {
  const response = await firstPromise;
  console.log(response);
} catch (err) {
  console.error('Error:', err);
  
}