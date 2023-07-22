var ans=0;
str="";
function sum()
{
    var a=parseInt(document.getElementsById("a").value);
    
}
function sum(){
    var a=parseInt(document.getElementById("a").value);
    ans+=a;
    if(str=="")
        str+=a;
    else
        str+=" + "+a;
}
function dif(){
    var a=parseInt(document.getElementById("a").value);
    ans-=a;
    if(str=="")
        str+=a;
    else
        str+=" - "+a;
}
function mul(){
    var a=parseInt(document.getElementById("a").value);
    ans*=a;
    if(str=="")
        str+=a;
    else
        str+=" * "+a;
}
function div(){
    var a=parseInt(document.getElementById("a").value);
    ans/=a;
    if(str=="")
        str+=a;
    else
        str+=" / "+a;
}
function equ(){
    document.getElementById('p').innerText = str +" = "+ans;
    ans=0;
    str="";
}