const db= require("../models/index");
class UserServices{

    allUsers=async ()=>{
       const users= await db.User.findAll({
            include: [
              {
                model: db.Address,  
                // as: 'Addresses',    
              },
              {
                model: db.Payment,
                // as:'Payments',
    
              }
            ]
          });

          return users;
    }
    createSection=async(section)=>{
      const sec=  await db.Section.create({name:section});
      return sec;
    }

}

module.exports= new UserServices();