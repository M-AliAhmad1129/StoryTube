/* =====================================
        STORY TUBE JAVASCRIPT
===================================== */

/* ===========================
      Scroll To Top Button
=========================== */

let topButton=document.createElement("button");

topButton.innerHTML="⬆";

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="30px";
topButton.style.right="30px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="#2E7D32";
topButton.style.color="white";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

window.onscroll=function(){

    if(document.documentElement.scrollTop>250){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

};

topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

/* ===========================
        Dark Mode
=========================== */

let darkButton=document.createElement("button");

darkButton.innerHTML="🌙";

darkButton.id="darkBtn";

document.body.appendChild(darkButton);

darkButton.style.position="fixed";
darkButton.style.bottom="95px";
darkButton.style.right="30px";
darkButton.style.width="55px";
darkButton.style.height="55px";
darkButton.style.borderRadius="50%";
darkButton.style.border="none";
darkButton.style.cursor="pointer";
darkButton.style.fontSize="22px";
darkButton.style.background="#FFD54F";
darkButton.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";

let dark=false;

darkButton.onclick=function(){

    if(!dark){

        document.body.style.background="#1b1b1b";
        document.body.style.color="white";

        let cards=document.querySelectorAll(".story-card");

        cards.forEach(function(card){

            card.style.background="#2c2c2c";
            card.style.color="white";

        });

        dark=true;

    }

    else{

        document.body.style.background="#FFF8E7";
        document.body.style.color="#333";

        let cards=document.querySelectorAll(".story-card");

        cards.forEach(function(card){

            card.style.background="white";
            card.style.color="#333";

        });

        dark=false;

    }

};

/* ===========================
      Welcome Message
=========================== */

window.onload=function(){

   