const Contact= require('../Models/contactModel')
//controllers to create users
const createContact=async(req, res)=>{

   const {name, email, message}=req.body;//deconstructing

   const addContact= new Contact({
    name:name,
    email:email,
    message:message,
   });
  
   try{
    const response = await addContact.save();
    if(response){
        res.status(201).json({message:"contact created successfully", response})
    }
   }
   catch(err){
    res.status(500).json({message:"internal server error",err})
   }
};

module.exports = createContact;
