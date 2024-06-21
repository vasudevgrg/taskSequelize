const db= require("../models/index");
const userService= require("../services/user");

const getUsers= async (req, res) => {
    try {
      const users = await userService.allUsers();
  
      res.json({"users": users});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const addUser= async (req, res)=>{
    console.log(req.body);
  
      const {name, email,address,payment,qualification,section}= req.body;
  
      try{
      const sec= userService.createSection(section);
  
      const user= await db.User.create({name, email,profile_pic:req.profile_pic,qualification,section_id:sec.id});
    
      console.log(address);
  
      address.map(async (e)=> {
          await db.Address.create({address:e, user_id: user.id});
      });
  
      payment.map(async e=>{
        const payment1=  await db.Payment.create({payment:e});
       
      })
  
      res.status(201).send({"message":"user created"});
  }catch(err){
      console.log("err"+err);
      res.send({"message":err})
  }
  
  };

  module.exports={getUsers, addUser};