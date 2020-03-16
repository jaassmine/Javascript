// //document.getElementByClassName

// const item = document.getElementsByClassName('collection-item');
// console.log(item);
// console.log(item[0]);
// item[4].style.color = 'red';
// //item[3].textContent = 'helloo';

// const listitem = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listitem);

// // document.getElementByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'blue';
// //lis[1].textContent = 'World';

// // Convert Html collection into array 
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li,index){
//     console.log(li.className);
//   //  li.textContent = `${index}:Hello`;
// });
// console.log(lis);

//document.querySelectorAll
const items = document.querySelectorAll('ul.collection li-collection-item');
items.forEach(function(item,index){
    item.textContent = `${index}: Hello`;
});
const liodd = document.querySelectorAll('li:nth-child(odd)');
const lieven = document.querySelectorAll('li:nth-child(even)');

liodd.forEach(function(li,index){
    li.style.background = '#ccc';
});

for(let i = 0; i<lieven.length; ++i){
    lieven[i].style.background = '#f4f4f4';
}
console.log(items);