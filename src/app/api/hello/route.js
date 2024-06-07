import { NextResponse } from "next/server";
import ConnectMongo from "../../../../util/db";
import Resorce from "../../../../util/resorceModel";


export async function GET(){
    try {
        await ConnectMongo()
        let data = await Resorce.find()
        return NextResponse.json({ data,ok:true})
    } catch (error) {
        return NextResponse.json({  error  ,ok:false},{status:400})
    }
}

export async function POST(req) {
    try {
        await ConnectMongo()
        let payload = await req.json()
        await Resorce.create(payload)
        return NextResponse.json({ ok: true })
    } catch (error) {
        return NextResponse.json({ ok:false })
    }


    }