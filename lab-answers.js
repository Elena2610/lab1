for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

  for (let i = 0; i <= 200; i++){
  if (i%2==0 && i!==0) {
    console.log(i);
  } 
  }

  for (let i = 1; i <= 100; i++){
    if (i%5===0 && i%3===0) {console.log("FizzBuzz");} 
    else if (i%3===0 ) {console.log("Fizz");} 
    else if (i%5===0 ) {console.log("Buzz");} 
    else {console.log(i);} 
    }

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant",  5000 , "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"];
plantee[2]=5001;
wolfy[3]="Gotham City";
dart.push("Hawkins");
wolfy.shift(0);
wolfy.unshift("Gameboy");

ninjaTurtles=['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];
for (let i = 0; i < ninjaTurtles.length; i++) {
    console.log(ninjaTurtles[i].toUpperCase());
  }

  
  const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
  
  for (let i = 0; i < favMovies.length; i++) {
    
    if (favMovies[i]==='Titanic') {
      console.log(i);
    } 
  }
  favMovies.sort();
  console.log(favMovies);
  //The array is sorted alphabetically.  Yes.
  favMovies.pop();
  console.log(favMovies);
  favMovies.push('Guardians of the Galaxy');
  console.log(favMovies);
  favMovies.reverse();
  console.log(favMovies);
  favMovies.shift();
  console.log(favMovies);
  favMovies.unshift( 'Guardians of the Galaxy');
  console.log(favMovies);
  for (let i = 0; i < favMovies.length; i++) {
    
    if (favMovies[i]==="Django Unchained" ) {
      console.log(i);
    } 
  }
  favMovies.splice(15,1,"Avatar");
  console.log(favMovies);

  let g= favMovies.length;
  let k;
if (g%2==0){k=g/2-1}
  else(k=(g-1)/2);
  console.log(k,g);
  let i=favMovies.splice(k+1);
  console.log(i);
  console.log(favMovies);
  for (let i = 0; i < favMovies.length; i++) {
    
    if (favMovies[i]==="Fast and Furious") {
      console.log(i);
    } 
  }
  
  const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                      ["Lucinda", "Jacc", "Neff", "Snoop"],
                      ["Petunia", ["Baked Goods", "Waldo"]]];
                      whereIsWaldo.splice(1,1);
                      console.log(whereIsWaldo);
                      whereIsWaldo[1][2]="No One";
                      console.log(whereIsWaldo);
                      console.log(whereIsWaldo[2][1][1]);