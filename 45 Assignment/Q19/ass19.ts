let guestArr:string[] = [ 'Kamran tessori', 'sir zia', 'sir qasim']
let canNotAttend: string='Sir zia'
let newGuest:string='Sir ameen'
guestArr[guestArr.indexOf(canNotAttend)]=newGuest
guestArr.unshift('class mates')
let middleGuest:string ='Prime minister'
let middleIndex = guestArr.length/2
guestArr.splice(middleIndex,0,middleGuest)
guestArr.push('IT chairman')
// console.log(guestArr)
// guestArr.map((item)=>
// console.log(`Dear ${item},you are invited to a dinner`))

console.log(guestArr.length+" "+"People"+ 'are invited to dinner')