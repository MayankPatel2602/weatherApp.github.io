const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname,"../public")
const views = path.join(__dirname,"../templates/views")
const template_path = path.join(__dirname,"../templates/partials")

app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',views)
hbs.registerPartial('navbar','navbar.hbs')
hbs.registerPartial('footer','footer.hbs')

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/*",(req,res)=>{
    res.render("404Error");
})
app.listen(port,()=>{
    console.log(`listening at ${port}`)
})