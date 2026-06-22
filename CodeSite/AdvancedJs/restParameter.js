// // console.log(setPermissionLevel('admin','gyan','amam','brock'));


// // function setPermissionLevel(permission,...names) {
// //   names.forEach((names) => {
// //     console.log(`${names} now has ${permission} level access.`);
// //   });
  
// // }


function getLabelHtml(text, sender, ...names) { 
  
  const labelName = names.map(name => 
    `<div class="label">
        <p>Dear ${name.name}</p>
        <p>${text}</p>
        <p>Best wishes,</p>
        <p>${sender}</p>
    </div>`
  );

  return labelName.join(""); // convert array to string
}

const text = `Thank you for all your hard work throughout the year!`;
const sender = "Tom";

document.getElementById('labels-el').innerHTML = getLabelHtml(
  text,
  sender,
  {name:'Sally'},
  {name:'Gyan'},
  {name:'Rohit'},
  {name:'Sakshi'}
);

// console.log(getLabelHtml(
//   text,
//   sender,
//   {name:'Sally'},
//   {name:'Gyan'},
//   {name:'Rohit'},
//   {name:'Sakshi'}
// ));
