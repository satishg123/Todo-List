const express = require("express")
const bodyparser = require("body-parser")
const app =express();
const date=require(__dirname + "/date.js");

app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set('view engine', 'ejs');
const items=["Buy Food","Cook Food"];
const workItems=[]

app.get("/", function(req,res)
{
   var day =date.getDate();

    res.render("list", {listTitle:day, newListItems:items});

});

app.get("/work", function(req,res)
{
    res.render("list", {listTitle:"Work List", newListItems:workItems});
});



app.post("/", function(req,res)
{
    var item=req.body.newItem;
    
    if(req.body.list === "Work")
    {
        workItems.push(item);
        res.redirect("/work");
    }
    else
    {
     items.push(item);
     res.redirect("/");
    }
    
    

})

// app.post("/work", function(req,res)
// {
//     let item=req.body.newItem;
//     workItems.push(item);
//     req.redirect("/work");

// })

app.get("/about", function(req,res)
{
    res.render("about");
})



app.listen(3000, function()
{
    console.log("Server is running at port 3000");
})