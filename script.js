/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 1200);

});


/* =========================
   PIN SYSTEM
========================= */

const unlockBtn = document.getElementById("unlockBtn");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");

const pinScreen = document.getElementById("pinScreen");
const website = document.getElementById("website");


unlockBtn.addEventListener("click", () => {

    const pin = pinInput.value.trim();

    if(pin === "248"){

        pinScreen.style.display = "none";

        website.style.display = "block";

        pinError.innerText = "";

    }else{

        pinError.innerText = "Wrong PIN";

        pinInput.value = "";

        pinInput.focus();

    }

});


/* =========================
   OPEN BOOK
========================= */

const openBookBtn =
document.getElementById("openBookBtn");


openBookBtn.addEventListener("click", () => {

    const music =
        document.getElementById("bgMusic");

    music.play().catch(() => {
        // Browser mungkin memblokir autoplay.
    });

    document
        .getElementById("scrapbook")
        .scrollIntoView({
            behavior:"smooth"
        });

});


/* =========================
   LETTER OPEN
========================= */

const openLetter =
document.getElementById("openLetter");

const letterPaper =
document.getElementById("letterPaper");


openLetter.addEventListener("click", () => {

    if(letterPaper.style.display === "block"){

        letterPaper.style.display = "none";

    }else{

        letterPaper.style.display = "block";

        setTimeout(() => {

            letterPaper.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        },100);

    }

});


/* =========================
   QUIZ
========================= */

const checkQuiz =
document.getElementById("checkQuiz");


function checkAnswers(){

    const a1 =
        document
        .getElementById("answer1")
        .value
        .toLowerCase()
        .trim();

    const a2 =
        document
        .getElementById("answer2")
        .value
        .toLowerCase()
        .trim();

    const result =
        document.getElementById("quizResult");


    /*
       QUIZ 1
       Pertanyaan:
       "ganteng?"

       Jawaban:
       "ganteng"
    */

    const correctAnswer1 =
        a1 === "mordyx";


    /*
       QUIZ 2
       Tanggal jadian:
       3 Maret 2026
    */

    const correctAnswer2 =
        a2 === "3 maret 2026" ||
        a2 === "03 maret 2026" ||
        a2 === "3 maret 2026" ||
        a2 === "03/03/2026" ||
        a2 === "3/3/2026" ||
        a2 === "03-03-2026" ||
        a2 === "3-3-2026";


    if(
        correctAnswer1 &&
        correctAnswer2
    ){

        result.style.color = "#c85d7b";

        result.innerText =
            "Correct! Memory unlocked";

        const specialMemory =
            document.getElementById("specialMemory");

        setTimeout(() => {

            specialMemory.scrollIntoView({
                behavior:"smooth",
                block:"center"
            });

        },500);


    }else{

        result.style.color = "#d96f8d";

        result.innerText =
            "Try again";

    }

}


checkQuiz.addEventListener(
    "click",
    checkAnswers
);


/* =========================
   ENTER KEY FOR QUIZ
========================= */

const answer1 =
document.getElementById("answer1");

const answer2 =
document.getElementById("answer2");


answer1.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        answer2.focus();

    }

});


answer2.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        checkAnswers();

    }

});


/* =========================
   REVEAL MEMORY
========================= */

const revealBtn =
document.getElementById("revealBtn");


revealBtn.addEventListener("click", () => {

    const specialPhoto =
        document.getElementById("specialPhoto");

    specialPhoto.classList.add("show");

    revealBtn.innerText =
        "Memory Revealed";

});


/* =========================
   RELATIONSHIP COUNTER
========================= */

function updateCounter(){

    const startDate =
        new Date("2026-03-03T00:00:00");

    const now =
        new Date();

    const diff =
        now.getTime() -
        startDate.getTime();


    if(diff < 0){

        document.getElementById("days").innerText = "0";

        document.getElementById("hours").innerText = "0";

        document.getElementById("minutes").innerText = "0";

        return;

    }


    /*
       Total hari
    */

    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    /*
       Total jam
    */

    const hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );


    /*
       Total menit
    */

    const minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );


    document.getElementById("days").innerText =
        days;

    document.getElementById("hours").innerText =
        hours;

    document.getElementById("minutes").innerText =
        minutes;

}


updateCounter();

setInterval(
    updateCounter,
    1000
);


/* =========================
   SECRET MESSAGE
========================= */

const stars =
    document.querySelectorAll(".secret-star");

let clickedStars = 0;


stars.forEach(star => {

    star.addEventListener("click", () => {

        if(
            !star.classList.contains("active")
        ){

            star.classList.add("active");

            clickedStars++;


            star.style.transform =
                "scale(1.5)";

            star.style.opacity =
                "0.7";


            /*
               Setelah beberapa saat,
               bintang kembali normal
            */

            setTimeout(() => {

                star.style.transform =
                    "scale(1.15)";

            },300);

        }


        /*
           Semua bintang sudah ditemukan
        */

        if(clickedStars >= 5){

            const secretMessage =
                document.getElementById(
                    "secretMessage"
                );


            secretMessage.style.display =
                "block";


            setTimeout(() => {

                secretMessage.scrollIntoView({
                    behavior:"smooth",
                    block:"center"
                });

            },300);

        }

    });

});


/* =========================
   REPLAY BUTTON
========================= */

const replayBtn =
    document.getElementById("replayBtn");


replayBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


/* =========================
   ENTER KEY PIN
========================= */

pinInput.addEventListener(
    "keypress",
    (e) => {

        if(e.key === "Enter"){

            unlockBtn.click();

        }

    }
);
