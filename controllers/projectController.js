const projects = require('../models/projectModel')
// add projects
exports.addProjectController = async (req,res)=>{
    console.log("Inside addProjectController");
    const userId = req.userId
     console.log(userId);
     console.log(req.body);
     console.log(req.file);
     
    
    res.status(200).json("Add Project request recieved!!!")

}