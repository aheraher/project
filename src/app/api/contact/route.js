
import { NextResponse } from "next/server";
import Contact from "../../../../models/contactModel";
import ConnectMongo from "../../../../util/db";

export async function POST(req){
    let {email,message}= await req.json()
    try {
        await ConnectMongo()
    let data= await Contact.create({email,message})
        if(!data){
            return NextResponse.json({result:"Not Found "})
        }
        else{
            return NextResponse.json({ok:true})
        }
        
    } catch (error) {
        
    }

    return NextResponse.json({result:"Some thing error come"})
}