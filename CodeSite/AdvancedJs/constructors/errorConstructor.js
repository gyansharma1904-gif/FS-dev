function checkUser(userName) {
  if(userName){
    console.log(userName);
  }else{
    console.log(`i execute`);
    throw new Error('no user provided');
    console.log(`i do not execute`);
  }
}

checkUser();


//these are also the build in constructor
String();
Number();
Array();
Object({});
Boolean();
//example 

const person = new Object({});
person.name="tom";
console.log(person);