
let e1=document.getElementById("e1")
let e2=document.getElementById("e2")
let e3=document.getElementById("e3")

let btn=document.getElementById("btn")


let values=['🍖','🌭','🍕','🥞','🍿','🍟']
let status=document.getElementById("status")

function randomvalues()
{

    return values[Math.floor(Math.random(values)*6)]
}
let animationid

animationid=setInterval(() => {
        e1.innerText=randomvalues()
        e2.innerText=randomvalues()
        e3.innerText=randomvalues()
}, 100)
if(btn.innerText=="Start")
{
btn.onclick=function()
{
setTimeout(() => {
    clearInterval(animationid)
        
    document.documentElement.style.setProperty('--speed',0)
    if(e1.innerText==e2.innerText && e2.innerText==e3.innerText)

    {
        status.innerText="You Won!!!"
    }

 else
    {
        status.innerText="You Lost!!"
    }
},5000);
btn.disabled=true
}}
