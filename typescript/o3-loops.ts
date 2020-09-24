for(let i=1; i<=5; i++) {
    // console.log(i);
}
let reviews: number[] = [1.2,2.8,3.5,4.6,5.7,1.0,3.9];
let total: number = 0;
for(let i=0;i<reviews.length;i++) {
    console.log(reviews[i]);
    total+=reviews[i];
}
let average: number = total/reviews.length;
console.log('Review average: '+average);

let sports: string[] = ['cricket','football','volleyball','chess','golf'];
// Growable an array using push()
sports.push("basket ball");
sports.push("Tennis");
for(let game of sports) {
    if(game == 'cricket') {
        console.log('my favorite game is '+game);
    } else {
        console.log(game);
    }    
}