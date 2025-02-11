const hana ={
    fathername:"bolkul",
    100: "deshi",
    age: 21,
    school: 'rifle square',
    isPassed: true,
    subjects: ['bangla', 'English', 'Physics', 'Math'],
    bottle_wrong: ['white', 45],
    bottleColor: 'white',
}

const hanaFathername =hana.fathername;
console.log(hanaFathername); //bolkul

const hana100 = hana[100];
console.log(hana100); //deshi


const friends = ['abul', 'babul', 'cabul', 'dabul', 'fabul'];


console.log(friends[0]); //cabul



for (let i =0; i < friends.length; i++){
    const friend = friends[i];
    if(friend === 'dabul'){
        continue;
    }
    console.log(friend);
}
const num = 50;
console.log(num%3==0 || num%5==0)

let temp = [];
for(let i= 1; i < 52; i++){
    if(i % 3 == 0 && i % 5 == 0){
        temp.push(i);
    
    }
}
console.log(temp);




var friends1 = ['abul', 'babul', 'cabul', 'dabul', 'fabul'];

let bestFriend = friends1[0];

for (let i = 0; i < friends1.length; i++){
    const element = friends1[i];
    if(element.length > bestFriend.length){
        bestFriend = element;
    }
}

console.log(bestFriend);