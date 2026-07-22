// ----------------------------
// Sections
// ----------------------------

const sections = document.querySelectorAll(".section");
let currentSection = 0;

function showSection(index){

    sections.forEach(sec=>sec.classList.remove("active"));

    sections[index].classList.add("active");

    currentSection=index;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// ----------------------------
// Start Button
// ----------------------------

document.getElementById("startBtn").onclick=function(){

    showSection(1);

}

// ----------------------------
// Continue Buttons
// ----------------------------

const nextButtons=document.querySelectorAll(".nextBtn");

nextButtons.forEach(btn=>{

    btn.onclick=function(){

        showSection(currentSection+1);

    }

});

// ----------------------------
// Proposal Buttons
// ----------------------------

document.getElementById("yesBtn").onclick=function(){

    confetti({
        particleCount:250,
        spread:180,
        origin:{y:0.6}
    });

    setTimeout(()=>{

        showSection(4);

    },1000);

}

document.getElementById("talkBtn").onclick=function(){

    showSection(5);

}

// ----------------------------
// Typing Effect
// ----------------------------

new Typed("#typing",{

    strings:[
        "I don't know if this is the perfect way to tell you...",
        "But every word here comes straight from my heart ❤️",
        "You became someone very special to me.",
        "So today... I wanted to ask you something..."
    ],

    typeSpeed:50,
    backSpeed:25,
    backDelay:1500,
    loop:true

});

// ----------------------------
// Floating Hearts
// ----------------------------

const heartContainer=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="-20px";
    heart.style.fontSize=(15+Math.random()*20)+"px";
    heart.style.opacity=Math.random();

    heart.style.transition="all 6s linear";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="110vh";
        heart.style.transform="rotate(360deg)";

    },50);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,300);

// ----------------------------
// Music
// ----------------------------

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("music");

let playing=false;

musicBtn.onclick=function(){

    if(!playing){

        music.play();

        playing=true;

        musicBtn.innerHTML="⏸️";

    }

    else{

        music.pause();

        playing=false;

        musicBtn.innerHTML="🎵";

    }

}

// ----------------------------
// Keyboard Navigation
// ----------------------------

document.addEventListener("keydown",function(e){

    if(e.key==="ArrowRight"){

        if(currentSection<sections.length-1){

            showSection(currentSection+1);

        }

    }

    if(e.key==="ArrowLeft"){

        if(currentSection>0){

            showSection(currentSection-1);

        }

    }

});

// ----------------------------
// Welcome Animation
// ----------------------------

window.onload=function(){

    showSection(0);

}

// ----------------------------
// Heart Beat Effect
// ----------------------------

setInterval(()=>{

    const heart=document.querySelector(".heartBig");

    if(heart){

        heart.style.transform="scale(1.2)";

        setTimeout(()=>{

            heart.style.transform="scale(1)";

        },300);

    }

},1000);