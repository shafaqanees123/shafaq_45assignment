let userNames: string[] = ['admin','user1','user2','user3']

userNames.forEach(userNames => {
    if(userNames === 'admin'){
        console.log('Hellow admin, would you like to see a status report?')
    }
    else{
        console.log(`Hey ${userNames} , thank you for logging in again`)
    }
})