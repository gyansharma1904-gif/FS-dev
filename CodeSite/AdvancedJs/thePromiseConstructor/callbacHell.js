function upload() {
  return new Promise((resolve,reject)=>{
    console.log("file uploaded");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
function processFile() {
  return new Promise((resolve,reject)=>{
    console.log("file processing");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}
function notifyUser() {
  return new Promise((resolve,reject)=>{
    console.log("process completed");
    setTimeout(() => {
      resolve();
    }, 3000);
  });
}


async function app() {
  try {
    await upload();
    await processFile();
    await notifyUser();
  } catch (err) {
    console.error('Error:', err);
  
  }
}

