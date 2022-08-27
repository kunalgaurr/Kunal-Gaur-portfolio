const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -100px 0px'
};

const appearOnScroll = new IntersectionObserver (function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add('appear')
            appearOnScroll.unobserver(entry.target)
        }
    })
}, appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});

$(document).ready(function(){
    $("button.project-button").click(function(){
        $(".hide").slideToggle(500);
    });
});