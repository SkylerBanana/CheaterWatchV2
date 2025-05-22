export default async function POST(request: Request){
    try{
     const {email, password} = await request.json()
// ima do validation in here 
console.log({email,password})
    }catch(e){
        console.log({e})
    }
}