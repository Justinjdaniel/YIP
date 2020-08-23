const express = require("express");
const gameRouter = express.Router();
const activatedMonth=require('../Model/activatedMonth')
const gameHistory = require("../Model/gameHistory");
const teamSummary=require("../Model/teamSummary");


gameRouter.get("/activeGame", function (req, res) {
    //to get all months that admin set to 'active' : from 'activemonths' collection
  console.log("active games")
  const activatedMonths=[];
  activatedMonth.find().then((months)=>{
    months.forEach(month=>{
      if(month.activated){
        activatedMonths.push(month);
      }
    })
    return activatedMonths;
  }).then(activatedMonths => {
    if(activatedMonths.length>0) {
      res.status(200).json({message:"active",games:activatedMonths});
    }else{
      res.status(200).json({message: "none"})
      //if none is active
    }
  })

});
gameRouter.post("/activate",(req,res)=>
{
  console.log(req.body.activateMonths);
  let months=req.body.activateMonths;// array of months
  months.forEach(month=>{
    activatedMonth.updateOne({month:month},{$set:{activated:true}},(err,doc)=>
    {
      console.log(doc);
    });
  })
  res.send({message:"months activated!"}); 
  //to activate the months selected by the admin while clicking 'activate' btn
});
gameRouter.post("/vote", function (req, res) {
   teamSummary.findOne({teamName:req.body.teamName}).then((team)=> //fetching finalBalance of the team
   {
     let data=
  {
    teamName:req.body.teamName,
    vote:req.body.vote,
    month:req.body.month,
    totalBalance:team.balance
  };
   gameHistory(data).save().then(value => res.status(200).json({message:'successfully voted!'}));
  //saving
   })
    //to save the vote of a team into the database : to 'gameHistorys' collection
});
gameRouter.post("/publish",(req,res)=>
{
  gameHistory.findOneAndUpdate({month:req.body.month},req.body).then(value => res.status(200).json({message:'successfully published!'}));
  //to publish the votes of the teams to calculate the results {determines whether contribution or gain}
  //changes 'gameHistorys' collection(amount,isContribute,totalBalance) + 'teamSummary' collection(balance)

});
gameRouter.post("/addRemarks",(req,res)=>
{
  gameHistory.findOneAndUpdate({month:req.body.month},req.body).then(value => res.status(200).json({message:'successfully added remark!'}));
  //to add bonus/penalty to the balances of each team whose votes are published
  //changes 'gameHistorys' collection(ramarks) + 'teamSummary' collection(balance)

})
module.exports = gameRouter;
