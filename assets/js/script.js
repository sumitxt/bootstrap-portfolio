//toaster
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

//typing effect
const typedWord = document.querySelector(".typed-word");
const cursor = document.querySelector(".cursor");

const wordArray = ["Electrical Engineer", "Web Developer"];
let wordArrayIndex = 0;
let letterIndex = 0;

const typingDelay = 200;
const erasingDelay = 100;
const newWordDelay = 2000;

// Typing Function
function type() {
    if (letterIndex < wordArray[wordArrayIndex].length) {
        if (!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }

        typedWord.textContent += wordArray[wordArrayIndex].charAt(letterIndex);
        letterIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursor.classList.remove("typing");
        setTimeout(erase, newWordDelay);
    }
}

// Erase Function
function erase() {
    if (letterIndex > 0) {
        if (!cursor.classList.contains("typing")) {
            cursor.classList.add("typing");
        }
        typedWord.textContent = wordArray[wordArrayIndex].substring(
            0,
            letterIndex - 1
        );
        letterIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursor.classList.remove("typing");
        wordArrayIndex++;
        if (wordArrayIndex >= wordArray.length) {
            wordArrayIndex = 0;
        }
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newWordDelay);
});


//typing effects end

//portfolio filter start

var filter = (filter) => {
    const cards = document.getElementsByClassName("col-sm-12");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card .card-body .card-text");
        if (title.innerText.indexOf(filter) > -1) {
            cards[i].classList.remove("d-none")
        } else {
            cards[i].classList.add("d-none")
        }
    }
}

var clearAll = () => {
    cards = document.getElementsByClassName("col-sm-12")
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove("d-none")
    }
}

//portfolio filter ends



//validation start
function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        // document.querySelector('.status').innerHTML = "Name cannot be empty";
        Toast.fire({
            icon: 'error',
            title: 'Name cannot be empty'
        })
        return false;

    }
    var email = document.getElementById('email').value;
    if (email == "") {
        // document.querySelector('.status').innerHTML = "Email cannot be empty";
        Toast.fire({
            icon: 'error',
            title: 'Email cannot be empty'
        })
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            // document.querySelector('.status').innerHTML = "Email format invalid";
            Toast.fire({
                icon: 'warning',
                title: 'Email format invalid'
            })
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        // document.querySelector('.status').innerHTML = "Subject cannot be empty";
        Toast.fire({
            icon: 'error',
            title: 'Subject cannot be empty'
        })
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        // document.querySelector('.status').innerHTML = "Message cannot be empty";
        Toast.fire({
            icon: 'error',
            title: 'Message cannot be empty'
        })
        return false;
    }
    else {
        // document.querySelector('.status').innerHTML = "Sending...";
        Toast.fire({
            icon: 'success',
            title: 'Demo success message'
        })

    }
}

  //validation ends