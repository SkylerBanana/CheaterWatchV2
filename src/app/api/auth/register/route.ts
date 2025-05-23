import { NextResponse } from "next/server"

export  async function POST(request: Request){
    try{
     const {email, password,confirmPassword , username} = await request.json()
// ima do validation in here 
if(password !== confirmPassword){
   return NextResponse.json({message: 'Passwords Dont Match'}, {status: 400})
     
}
if(password.length < 9 ){
    return NextResponse.json({message: 'Password Length To Short'}, {status: 400})
}
//Another for Username

console.log({email,password, confirmPassword , username})
    }catch(e){
        console.log({e})
    }
    return NextResponse.json({message: 'success'})
}