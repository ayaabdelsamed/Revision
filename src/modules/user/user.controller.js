import { userModel } from "../../../databases/models/user.model.js"
import { sendEmail } from "../../emails/sendEmail.js"
import jwt from "jsonwebtoken"

const signup = async(req,res)=>{
    await userModel.insertMany(req.body)

    sendEmail(req.body.email)
    res.json({mesaage:"success"})
}

const verify = (req,res)=>{
    jwt.verify(req.params.token,'myNameIsOtii',async(err,decoded)=>{
    if(err) res.json({mesaage:"err"})
        await userModel.findOneAndUpdate({email:decoded.email},{verifyEmail:true})
        res.json({mesaage:"success"})

    })

}

export{
    signup,
    verify
}