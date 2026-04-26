// for(let i=2; i <=8; i++){
//     console.log(i)
// }

// for(let i=5; i <=35; i+=4 ){
//     console.log(i)
// }

// let x = 1;
// for (let i=3; i <=8; i++){
//     x = x * i
// }
// console.log(x)

// const person = {
//     FirstName: 't1',
//     LastName: 't2',
//     age: 't3'
// }
// console.log(person.FirstName + '  ' + person.LastName)

// let salary = 1000;
// let bonus = 0;
// if(salary <= 1000){
//     bonus = salary * 0.2;
// }
// else if(salary <=2000){
//     bonus = salary * 0.1;
// }
// else if(salary <=5000){
//     bonus = salary * 0.05;
// }
// else{bonus = 0;}
// console.log(bonus)

// const Fruits  = [ "apple", "banana", "orange" ]
//     for(let i=0; i < Fruits.length; i++)
//         console.log(Fruits[i])

// const fruits = ["apple", "banana", "orange"];
// fruits.unshift ("grapes")
// fruits.push ("pineapples")
// for (let i=0; i< fruits.length; i++)
// console.log(fruits[i])

// let x = 0;
// for(let i=1; i<=34; i++){
//     x = x + i
// }
// console.log (x)


// let a1=87
// let b1=65
// console.log(a1+b1)

// let student = {
//     FirstName:'t1',
//     LastName: 't2',
//     Age: '22',
//     email: 't3',
//     marks:[8, 6, 4, 12]
// }
// console.log(student.marks[2])

// let a= 23
// let b= a/2
// let c= a+b
// console.log(c)

// let phones = ['Iphone', 'Samsung', 'Pixel', 'Huawei', 'Xiaomi']
// console.log(phones)

// let phones = ['Iphone', 'Samsung', 'Pixel', 'Huawei', 'Xiaomi']
// console.log(phones[0])
// console.log(phones[phones.length - 1])


// დავბეჭდოთ 1-20 რიცხვი, თუ ამ რიცხვებში შეგვხვდა 3,5,7- გამოვტოვოთ, თუ 15-18 ჩათვლის შეგვხვდა რიცხვები-შევწყვიტოთ ციკლი

// for (let i=1; i <=20; i++){
// if (i==3 || i==5 || i==7) continue
// if (i > 15 && i < 18)break
// console.log(i)
// }






// let arr= [2, 5, 6, 7, 19, 21, 60, 69, 101, 456]
// for (const i in arr) {
//     if(arr[i] > 20 && arr[i] < 50)continue
//     if(arr[i] > 100) break
//     console.log(arr[i])
// }
// const greed = () => console.log("hello!");

// function (a, b) {
//     return a + b + 100;
// }

// (a + b) => a + b + 100

// const a =4
// const b =4









// function ff(a,b){
//     let sum = 1
//     for (let i = a; i < b; i++ ) {
//         sum =sum+1;
        
//     }
//     return sum;
// }
// console.log(ff(7, 25));

// შევქმნათ ფუნქცია რომელსაც გადავცემთ სტუდენტის ქულას რომელის დაგვითვლის 

// function gg (qula){
//     if(qula >=90) return "A"
//     else if(qula >=80) return "B";
//     else if(qula >=70) return "C";
//     else if(qula >=60) return "D";
//     else return "F"
// }
// console.log (gg(95))
// console.log (gg(85))
// console.log (gg(75))
// console.log (gg(65))
// console.log (gg(55))
// console.log (gg(45))

// function gg (qula){
//     if(qula >90) 
//         console.log ("A")
//     else if(qula >80) return "B";
//     else if(qula >70) return "C";
//     else if(qula >60) return "D";
//     else return "F"
// }

// gg(78);


let student = {
    FirstName: 'Archil',
    scores: [10, 15, 20],
    grade:function(){
        let jami = 0
        for (const element of this.scores) {
            jami = jami +element
        }
        return jami
    }
}
console.log(student.grade())