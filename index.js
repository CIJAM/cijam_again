let portraits = document.getElementById("portraits");
let number = 0;
let numberToTakeFrom = 430;
portraits.style.transform = `translateX(${number}px)`;
let counter = 0;

function movePortraitToTheRight() {
    if (counter < 15 && number > -6200) {
        number = number - numberToTakeFrom;
        portraits.style.transform = `translateX(${number}px)`;
        console.log(number);  
        console.log(counter);  
        counter++;    
    }
}

function movePortraitToTheLeft() {
    if (counter > 0) {
        number = number + numberToTakeFrom;
        portraits.style.transform = `translateX(${number}px)`;
        console.log(number);    
        counter--;    
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        movePortraitToTheRight();
    } else if (event.key === "ArrowLeft") {
        movePortraitToTheLeft();
    }
});

document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchend", touchEnd, false);
var xDown = null;
var yDown = null;

function touchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function touchEnd(evt) {
    var xUp = evt.changedTouches[0].clientX;
    var yUp = evt.changedTouches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            movePortraitToTheRight();
        } else {
            movePortraitToTheLeft();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};








    document.addEventListener('DOMContentLoaded', function () {
        const elements = document.querySelectorAll('.actualPicture, .individualMission, .newdiv2, .newdiv');

        function checkVisibility() {
            const windowHeight = window.innerHeight;

            elements.forEach(element => {
                const rect = element.getBoundingClientRect();

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    element.classList.add('visible');
                } else {
                    element.classList.remove('visible');
                }
            });
        }

        window.addEventListener('scroll', checkVisibility);
        window.addEventListener('resize', checkVisibility);

        // Initial check
        checkVisibility();
    });
