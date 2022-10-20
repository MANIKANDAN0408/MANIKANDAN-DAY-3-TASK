//ITERATE (FOR, FOR IN, FOR OF, FOR EACH)

//for loop 

var array = [5,6,7,8,9,"mani","kandan"]
for (var i=0; i,array.length; i++){
    console.log(i)
}
 for (let i=9; i>0; i--){
    console.log(i)
 }



 //for in loop
 //obj

 var obj = {
    age:"twenty four",
    place:"coimbatore"
 }
  for (var key in obj){
    console.log(key)
    console.log(obj[key])
    //console.log(obj.age,obj.place)
  }



  //for of loop
  //array

  var bikes = ["apache","pulsar","platina","juprter"]

  for(var index of bikes){
    console.log(bikes.index)
    console.log(index)
  }



  //for.Each 

  let arr = [9,8,7,6,5,4]

  arr.forEach((elementy)=> console.log(element*4))
  //[36,32,28,24,20,16]

  const bus = ["manis","city","sivasakthi"]
  bus.forEach((element)=> console.log(element))

  bus.forEach((index,element)=> console.log(element,index))
  //bus