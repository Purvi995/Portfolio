/*=============
SMOOTH SCROLL
==============*/

document.querySelectorAll(".sidebar li").forEach(item=>{

item.addEventListener("click",()=>{

document.querySelectorAll(".sidebar li")
.forEach(i=>i.classList.remove("active"));

item.classList.add("active");

});

});


/*=============
SCROLL ANIMATION
==============*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});


document.querySelectorAll(".card-box,.hero").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


/*=============
THEME TOGGLE
==============*/

const btn=document.createElement("button");

btn.innerHTML="🌙";

btn.style.position="fixed";

btn.style.bottom="30px";

btn.style.right="30px";

btn.style.width="55px";

btn.style.height="55px";

btn.style.borderRadius="50%";

btn.style.border="none";

btn.style.cursor="pointer";

btn.style.fontSize="22px";

btn.style.background="#8b5cf6";

btn.style.color="white";

btn.style.boxShadow="0 0 20px rgba(139,92,246,.5)";

document.body.appendChild(btn);

btn.onclick=()=>{

document.body.classList.toggle("light");

btn.innerHTML=document.body.classList.contains("light")?"☀":"🌙";

};


new Typed("#typing",{

strings:[
"Web Developer",
"Frontend Developer",
"JavaScript Developer",
"UI Designer"
],

typeSpeed:70,
backSpeed:40,
backDelay:1200,
loop:true

});


window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/total)*100;

document.getElementById("progress").style.width=progress+"%";

});


const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


setInterval(()=>{

document.getElementById("clock").innerHTML=

new Date().toLocaleTimeString();

},1000);


