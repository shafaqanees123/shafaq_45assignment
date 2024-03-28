// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestArr:string[] = ['kamran tessori', 'sir Zia', 'sir Qasim','Sir Ameen']
guestArr.map((item)=>(
console.log(`Dear ${item}, Yor are corodially invited to a dinner`)
))