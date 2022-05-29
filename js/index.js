let slideIndex = 1
showSlides(slideIndex)
showSlides2(slideIndex)

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function currentSlide2(n) {
  showSlides2(slideIndex = n)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-event1-image");
  let dots = document.getElementsByClassName("event1-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-event2-image");
  let dots = document.getElementsByClassName("event2-dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const closeIcon = document.querySelector('.close-icon')
const burgerIcon = document.querySelector('.burger')
const sidebar = document.querySelector('.container nav > div')

burgerIcon.addEventListener('click', () => {
  sidebar.classList.add('sidebar-active')
})

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('sidebar-active')
})

const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const phoneInput = document.querySelector('#phone')
const eventInput = document.querySelector('#event')

const emailError = document.querySelector('.email-error')
const nameError = document.querySelector('.name-error')
const phoneError = document.querySelector('.phone-error')
const eventError = document.querySelector('.event-error')

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!nameInput.value) {
    nameError.innerHTML = 'Please provide your name.'
  } else if (nameInput.value.length < 3) {
    nameError.innerHTML = 'Name should be at least 3 characters.'
  } else {
    nameError.innerHTML = ""
  }

  if (!emailInput.value) {
    emailError.innerHTML = 'Please provide your email address.'
  } else if (!emailInput.value.includes('@')) {
    emailError.innerHTML = 'Email address should contains @.'
  } else {
    emailError.innerHTML = ""
  }

  if (!phoneInput.value) {
    phoneError.innerHTML = 'Please provide your phone number.'
  } else if (!phoneInput.value.startsWith('08')) {
    phoneError.innerHTML = 'Phone number should start with 08.'
  } else if (phoneInput.value.length > 14) {
    phoneError.innerHTML = 'Maximum length for phone number is 14 digits.'
  } else {
    phoneError.innerHTML = ""
  }

  if (!eventInput.value) {
    eventError.innerHTML = 'Please select the event.'
  } else {
    eventError.innerHTML = ""
  }

  var params = '';
  for( var i=0; i<document.ticketsForm.elements.length; i++ )
  {
     var fieldName = document.ticketsForm.elements[i].emailInput;
     var fieldValue = document.ticketsForm.elements[i].value;
     
     params += fieldName + '=' + fieldValue + '&';
  }
})