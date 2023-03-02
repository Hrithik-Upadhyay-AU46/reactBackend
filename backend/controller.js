import express from 'express'
import User from "../model.js";



const signup = async (req,res)=>{
    let userData = req.body
    try{
        let user = await User.create(userData)
        res.send({status:'success',user:user})
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

export const login = async (req,res)=>{
    let logUser = req.body
    let existingUser
    try{
        existingUser = await User.findOne({email:logUser.email})
        console.log(existingUser)
    }catch(err){
        return console.log(err)
    }
    if(!existingUser){
        return res.status(404).json({msg:"User not find"})
    }
    if(existingUser.password != logUser.password){
        return res.status(404).json({msg:"Password is incorect"})
      }
      return res.status(200).json({status:'success',user:existingUser})
}

export default signup