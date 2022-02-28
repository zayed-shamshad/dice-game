var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;

var s1="dice"+a+".png";
var s3="images/"
var s2="dice"+b+".png";
var s4=s3+s1;
var s5=s3+s2;
var imgsource=document.querySelectorAll("img")[0];
var imgsource2=document.querySelectorAll("img")[1];
imgsource.setAttribute("src",s4);
imgsource2.setAttribute("src",s5);
if(a>b)
{
    document.querySelector("h1").innerHTML="Player 1 Wins !";
}
if(b>a)
{
    document.querySelector("h1").innerHTML="Player 2 Wins !";
}
else{

    document.querySelector("h1").innerHTML="Draw !";
}