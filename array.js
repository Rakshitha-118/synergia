
// let fruits=[];
// fruits.push('apple')
// fruits.push('banana')
// fruits.push('cherry')
// console.log(fruits)
// fruits.shift()
// console.log(fruits)
// in order to delete the top most element type shift
//shift and unshift at starting 




//inorer to print sepertae element
 let cars=['bmw','alto','balano','audi']
console.log(cars.length)
cars.forEach((car)=>{
console.log(car)
 })

//want index also
cars.map((car,index)=>{
    console.log(car+ ' '+index)
    if(cars=='alto')
    {
        cars[index]='audi'
    }
})

//filter is used to delete 
cars=cars.filter((cars,index)=>{
    return cars!='bmw'
})
console.log(cars)

console.log(cars.indexOf('bmw'))

let name="rakshitha"
let namearray=name.split(" ")
console.log(namearray)
console.log(cars.join("@"))


let student={
    "name":"rakshitha",
    "age":2,
    "skills":[
        "HTML","css"
    ]
}