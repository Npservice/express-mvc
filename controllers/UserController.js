import { response } from "express";
import User from "../models/UserModel.js"


 
export const getUser = async(req, res)=>{
    const response = await User.findAll();
   res.render('user',{
    response
   });
};
export const Buat = async(req, res)=>{
    let {nama, hobi, sekolah}=req.body;
    const data ={
       nama: nama,
       hobi: hobi,
       sekolah: sekolah,
    }
    await User.create(data);
  const response = await User.findAll();
   res.render('user',{
    response
   });
};
export const Dashboard = async(req,res)=>{
res.render('dashboard')
};