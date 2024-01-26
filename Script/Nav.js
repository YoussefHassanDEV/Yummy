let boolTog=0;
let setting=document.querySelector("#setting")
$("#setting").click(function(){
    if(boolTog===0)
    {
        boolTog=1;
        document.getElementById("setting").style.color="blue";
    }
    else
    {
        boolTog=0;
    }
})