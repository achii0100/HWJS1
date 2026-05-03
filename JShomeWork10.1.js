// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვის კვადრატს, 
// თუ რიცხვები ტოლია დააბრუნებს მათ ნამრავლს -ს
function feedb (m,n){
    if(m > n) return m*m;
    else if(m < n) return n*n;
    else return m*n;
}
// console.log(feedb(4,9))
// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი უმცირესი რიცვიდან უდიდესამდე 
// ( მაგალითად თუ რიცხვები არის 5 და 9 - უნდა დაბრუნდეს 5+6+7+8+9, თუ რიცხვებია 4 და 1 უნდა დაბრუნდეს 1+2+3+4)
function numb (a,b) {
    let plus = 0;
    let min = Math.min (a,b);
    let max = Math.max (a,b);
    for (let i = min; i <=max; i++){
        plus += i
    }
    return plus
}
// console.log(numb(4,1))
// 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს “hello world”- ს ( ფუნქციას არ აქვს პარამეტრი)
function hw() {
    console.log("hello world");
}
// hw()
// 4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ “firstname-ს გვარია “lastname” 
// (მაგალიად “გიორგის გვარია გიორგაძე” ( ფუნქცია აბრუნებს ტექსტს და ფუნქციის გარეთ ბეჭდავთ)
function fullname(firstname,lastname){
    return firstname+ "-ს გვარია" +lastname
}
// console.log(fullname("firstname"," lastname"))
// 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე)
//  კენტი რიცხვების ჯამი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1+3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის 
// გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function numm(n){
    let sub =0;
    for(let i = 1; i <= n; i += 2){
        sub += i;
    }
    return sub;
}
// console.log(numm(n))
// 6. დაბეჭდეთ  მფლობელების რაოდენობა (გამოიყენეთ ობიექტის getOwnerCount მეთოდი)
let car = {
    make: "test1",
    model: "test3",
    age: 50,
    owners:[
        { "სახელი": "გიორგი", "გვარი": "გიორგაძე", "ასაკი": 21 },
 { "სახელი": "ანა", "გვარი": "ანიძე", "ასაკი": 34 },
 { "სახელი": "ია", "გვარი": "იაძე", "ასაკი": 18 },
 { "სახელი": "დოდო", "გვარი": "დოდეშვილი", "ასაკი": 57 }

    ],
    getOwnerCount: function(){
        return this.owners.length;
    }
}
// console.log(car.getOwnerCount())
// 7. Დაწერეთ ფუნქცია addOwner გადაეცით  თქვენი მონაცემები (სახელი , გვარი, ასაკი)  რომელსაც ფუნქცია დაამატებს 
// car.owners- ში 
function addOwner(firstName, lastName, age){
    car.owners.push({
        "სახელი":firstName,
        "გვარი":lastName,
        "ასაკი":age
    })
}
// addOwner("test5", "test6", 57);
// console.log(car.owners);
// 8. დაბეჭდეთ თითოეული owner-ის  სახელი და ასაკი
// for(let owner of car.owners){
//     console.log(owner["სახელი"], owner["ასაკი"]);
// }
