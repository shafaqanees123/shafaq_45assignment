let GuestArr:string[]=['saba','farah','ali','sania']
console.log('I can invite only two person for a dinner')
while(GuestArr.length>2){
    let removeGuest = GuestArr.pop()
    console.log(`Dear ${removeGuest}, you are not invited for a dinner`)

}
GuestArr.map((item)=>
console.log(`Dear ${item}, You are still invited`))

GuestArr.pop()
GuestArr.pop()
console.log(GuestArr)