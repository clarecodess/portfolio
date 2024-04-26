document.querySelector('.left-arrow').addEventListener('click', () => {
    document.querySelector('.project-container').scrollBy({
        left:-300,
        behavior: 'smooth'
    })
})

document.querySelector('.right-arrow').addEventListener('click', () => {
    document.querySelector('.project-container').scrollBy({
        left:300,
        behavior: 'smooth'
    })
})

// hamburger menu
//select burger menu and navigation list
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('nav ul');

//function to toggle menu visibility
function toggleMenu(){
    // check if menu has show class
    if (navList.classList.contains('show')){
        //if it does close the menu
        navList.classList.remove('show');
    } else {
        // if it doesn't, open the menu
        navList.classList.add('show');
    }
}

//add event listener to hamburger button
hamburger.addEventListener('click', toggleMenu);