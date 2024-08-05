const movies = ['InsideOut','Cars','Coco','Luck','Finding Nemo'];

console.log(movies);
console.log(movies[2]);
console.log(movies.at(-2));
console.log(movies.indexOf('InsideOut'));

movies[4]='Nemo';
console.log(movies);


console.log(movies.slice(2, 5)); 
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,-2));
console.log(movies);
console.log(movies[0].slice(-6,-3));
movies.push('Zootopia');
movies.unshift('IceAge')
console.log(movies);
// movies.pop();
// console.log(movies);
// movies.shift();
// console.log(movies);


// movies.splice(4,2);    remove elements (indexnumber,no of elements to remove)
// console.log(movies);
movies.splice(4,0,'Boss Baby');      //insert elements (index at which elements has to be inserted,0 because we are not removing any element)
console.log(movies);

