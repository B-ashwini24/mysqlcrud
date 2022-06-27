const express=require("express");
const app=express();
const port=process.env.PORT || 5001
const User=require("./models/User");
const cors=require("cors")
app.use(cors())

app.use(express.json());

app.get("/get",async(req,res)=>{
    try {
        const users = await User.findAll();
        res.json({
            message:"Success",
            data:users
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }


})

app.put("/edit",async(req,res)=>{

    const id=req.body.id;

    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    try {
      // Change everyone without a last name to "Doe"
await User.update({ lastName: lastName ,firstName:firstName}, {
    where: {
      id: id
    }
  });
        res.json({
            message:"Success",
         
        })
    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }


})

app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    console.log("inside delete")
    try {
        
        await User.destroy({
            where: {
              id: id
            }
          });
          res.json({
            message:"SuccessFully Deleted",
         
        })

    } catch (error) {
        res.json({
            message:error,
           
        })
        
    }

})

app.post("/post",async(req,res)=>{
  
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;

    try {
        if(User){
            const jane = await User.create({ firstName: firstName, lastName: lastName });
            console.log("Jane's auto-generated ID:", jane.id);
            res.json({
                message:"Success",
                id:jane.id
            })

        }
        else{
            res.send("Problem with db connection");
        }
 
    
        
    } catch (error) {

        console.log(error);
        
    }

 


})


app.listen(port,async()=>{

 
    console.log("Server is up at port "+port )
})