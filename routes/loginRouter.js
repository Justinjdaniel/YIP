const express = require("express");
const loginRouter = express.Router();
const user = require("../model/user");
const cors=require('cors');
app.use(cors({ origin: "*" }));
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
/* copy paste as of now,Eventually i will correct it.. */
loginRouter.post("/",function(req,res){
    user.find({id:req.body._id}).exec()
        .then(
            user=>{
                if(user.length<1){
                    return res.status(401).json(
                        {
                            message:"Auth failed user not present in database",

                        }
                    )
                }
                else{

                    bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
                        if(err){

                            return res.status(401).json({
                                message:"Auth failed"
                            })
                        }
                        else if(result){

                            const token=jwt.sign(
                                {
                                    userId:user[0]._id,
                                    username:user[0].name
                                },
                                process.env.JWT_KEY,
                                {
                                    expiresIn:"1hr"
                                }
                            )
                            console.log("authsuccessful")
                            return res.status(200).json({
                                message:"Auth successful",
                                redirect:true,
                                token:token
                            })

                        }
                        else{
                            return res.status(401).json({
                                message:"Auth failed wrong password"
                            })
                        }
                    })
                }
            }
        )
        .catch(
            (err=>{
                console.log(err);
                res.status(500).json({
                    error:err
                })
            })
        )
})
module.exports=loginRouter;