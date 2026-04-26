
// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს,
//  თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function feedb (m,n){
    if(m > n) return m;
    else if(m < n) return n;
    else return 0;
}
// console.log(feedb());
// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
function numb (a,b){
    return a+b;
}
// console.log(numb())
// 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function flname (){
    console.log("Achii Tsiklauri");
}
// 4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ 
// (ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function filaname (FirstName,LastName){
    return FirstName+' '+LastName;
}
// console.log(filaname("Achii"+' '+"Tsiklauri"))
// 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  
//     (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა,
//      დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
//      Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function change(n){
    let result = 1;
    for(let i=1; i <=n; i++ ){
        result=result * i;
    }
   return result;
}
// console.log(change())
// 6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
const student={
    firstName: "test1",
    lastName: "test2",
    age: 21,
    scoreы:[4,7,5,3,2],

    FLname: function(){
        return this.firstName+' '+this.lastName;
    }
}
// console.log(student.FLname());
// 7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function score(scores){
    let summ = 0;
    for(let i of scores){
        summ=summ + i;
    }
    return summ;
}
// console.log(score([]))
// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
// console.log(student.FirstName, student.age);
