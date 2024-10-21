
// CONSTANTS AND VARIABLES
const closeContact = document.querySelector('#cross2');
const openContact = document.querySelector('#Contact');
const openContact2 = document.querySelector('#contact-btn');
const timeSec = document.querySelector('#Namaz-times');
const icon = document.querySelector('.icon');
const more = document.querySelector('#More-Detail');
const contactSec = document.querySelector('#contact-sec')
const Openbtn = document.querySelector('#About');
const Closebtn = document.querySelector('#cross');
const AboutSection = document.querySelector('#About-Sec');
const firstPage = document.querySelector('#started');
const startButton = document.querySelector('#start');
const loader2 = document.querySelector('#loader2');
const content = document.querySelector('.content');
const userName = document.querySelector('.authentication input');
const field = document.querySelector('.inputs');
const placeholder = document.querySelector('.inputs label[for="text"]');
const nameSubmitBtn = document.querySelector('#name-submit-btn');
const authentication = document.querySelector('.authentication');
const profileName = document.querySelector('#userName');
const signOutBtn = document.querySelector('#SignOut');

function isLogIn(){
    const state = localStorage.getItem('isSignIn') || false;
    if(state == false){
        firstPage.style.display = '';
        authentication.style.display = 'block';
        content.style.display = 'none';
    }
    else{
        firstPage.style.display = '';
        authentication.style.display = 'none';
        content.style.display = 'block';
        timeSec.style.display = 'none';
        userName.value = '';
    }
}
isLogIn();

function logOut(){
    signOutBtn.addEventListener('click',(e)=>{
        localStorage.removeItem('isSignIn');
        localStorage.removeItem('username');
        more.style.display = 'none';
        timeSec.style.display = 'none';
        isLogIn();
    })
}
logOut();

    const svg = `
<svg width="30" height="30" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="none">
  <!-- Pulsing Circles -->
  <circle cx="50" cy="20" r="10" stroke="#27ae60" stroke-width="6" fill="none">
    <animate
      attributeName="r"
      values="10;15;10"
      dur="0.6s"
      repeatCount="indefinite"
      keyTimes="0;0.5;1"
      keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
      calcMode="spline" />
  </circle>

  <circle cx="80" cy="50" r="10" stroke="#27ae60" stroke-width="6" fill="none">
    <animate
      attributeName="r"
      values="10;15;10"
      dur="0.6s"
      repeatCount="indefinite"
      begin="0.5s"
      keyTimes="0;0.5;1"
      keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
      calcMode="spline" />
  </circle>

  <circle cx="50" cy="80" r="10" stroke="#27ae60" stroke-width="6" fill="none">
    <animate
      attributeName="r"
      values="10;15;10"
      dur="0.6s"
      repeatCount="indefinite"
      begin="1s"
      keyTimes="0;0.5;1"
      keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
      calcMode="spline" />
  </circle>
  
  <circle cx="20" cy="50" r="10" stroke="#27ae60" stroke-width="6" fill="none">
    <animate
      attributeName="r"
      values="10;15;10"
      dur="0.6s"
      repeatCount="indefinite"
      begin="1.5s"
      keyTimes="0;0.5;1"
      keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
      calcMode="spline" />
  </circle>
</svg>
    `
const logo2 = `
<svg width="100" height="50" viewBox=" 0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Gradient Definitions -->
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#5ab1f6; stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#0044cc; stop-opacity:1" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ffffff; stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#c0c0c0; stop-opacity:1" />
                      </linearGradient>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                        <feOffset in="blur" dx="5" dy="5" result="offsetBlur" />
                        <feMerge>
                          <feMergeNode in="offsetBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <!-- 3D "T" with Gradient and Shadow -->
                    <text x="50%" y="95%" text-anchor="middle" fill="url(#gradient1)" font-size="100" font-family="Arial, sans-serif" font-weight="bold" filter="url(#shadow)">
                      T
                    </text>
                    
                    <!-- 3D "Faith" with Gradient and Shadow -->
                    <text x="50%" y="85%" text-anchor="middle" fill="url(#gradient2)" font-size="50" font-family="Arial, sans-serif" font-weight="bold" filter="url(#shadow)">
                      Faith
                    </text>
                    
                    <!-- 3D Effect for "T" -->
                    <text x="49.5%" y="94.5%" text-anchor="middle" fill="#000000" font-size="100" font-family="Arial, sans-serif" font-weight="bold" opacity="0.3" transform="translate(5,5)">
                      T
                    </text>
                    
                    <!-- 3D Effect for "Faith" -->
                    <text x="49.5%" y="84.5%" text-anchor="middle" fill="#000000" font-size="50" font-family="Arial, sans-serif" font-weight="bold" opacity="0.3" transform="translate(5,5)">
                      Faith
                    </text>
                  </svg>
`
const logo = `
                <svg width="100" height="30" viewBox=" 0 0 160 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Gradient Definitions -->
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#5ab1f6; stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#0044cc; stop-opacity:1" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#ffffff; stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#c0c0c0; stop-opacity:1" />
                      </linearGradient>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
                        <feOffset in="blur" dx="5" dy="5" result="offsetBlur" />
                        <feMerge>
                          <feMergeNode in="offsetBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    
                    <!-- 3D "T" with Gradient and Shadow -->
                    <text x="50%" y="95%" text-anchor="middle" fill="url(#gradient1)" font-size="100" font-family="Arial, sans-serif" font-weight="bold" filter="url(#shadow)">
                      T
                    </text>
                    
                    <!-- 3D "Faith" with Gradient and Shadow -->
                    <text x="50%" y="85%" text-anchor="middle" fill="url(#gradient2)" font-size="50" font-family="Arial, sans-serif" font-weight="bold" filter="url(#shadow)">
                      Faith
                    </text>
                    
                    <!-- 3D Effect for "T" -->
                    <text x="49.5%" y="94.5%" text-anchor="middle" fill="#000000" font-size="100" font-family="Arial, sans-serif" font-weight="bold" opacity="0.3" transform="translate(5,5)">
                      T
                    </text>
                    
                    <!-- 3D Effect for "Faith" -->
                    <text x="49.5%" y="84.5%" text-anchor="middle" fill="#000000" font-size="50" font-family="Arial, sans-serif" font-weight="bold" opacity="0.3" transform="translate(5,5)">
                      Faith
                    </text>
                  </svg>
                  `;
                  
                  document.querySelector('.logo').innerHTML = logo;
                  document.querySelector('#FirstPagelogo').innerHTML = logo2;
                  
                  function resetInnerHTML(query) {
                      document.querySelector('.loaderDiv').innerHTML = query;
                    }
                    resetInnerHTML(svg);
                    
                    fetch('https://nominatim.openstreetmap.org/reverse?lat=34.3706&lon=73.4702&format=json')
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
            for (index in data) {
                if (index == "address") {
                    return data[index].city;
                }
            }
        })
        .then((location1) => {
            let location = location1;
            return location;
        })
        .then((location) => {
            // fetching timing

            fetch(`https://api.aladhan.com/v1/timingsByCity?city=${location}&country=Pakistan&method=1`)
                .then(response => response.json())
                .then(data => {
                    resetInnerHTML(`Your location : ${location}`);
                    for (index in data) {
                        if (index == "data") {
                            let fajr = data[index].timings.Fajr;
                            document.getElementById("Fajr").innerHTML = fajr;
                            let zuhr = data[index].timings.Dhuhr;
                            document.getElementById("Zuhr").innerHTML = zuhr;
                            let Asr = data[index].timings.Asr;
                            document.getElementById("Asr").innerHTML = Asr;
                            let maghrib = data[index].timings.Maghrib;
                            document.getElementById("Maghrib").innerHTML = maghrib;
                            let isha = data[index].timings.Isha;
                            document.getElementById("Isha").innerHTML = isha;
                            document.getElementById("Sunset").innerHTML = data[index].timings.Sunset;
                            document.getElementById("Sunrise").innerHTML = data[index].timings.Sunrise;
                            document.getElementById("LastThird").innerHTML = data[index].timings.Lastthird;
                            document.getElementById("Midnight").innerHTML = data[index].timings.Midnight;
                            document.querySelector('#ED').innerHTML = new Date().toLocaleDateString();
                            document.querySelector('#ED-Date').innerHTML = new Date().toLocaleDateString();
                        }
                    }
                    showOther(data);
                })
        })
        .catch((error)=>{
            resetInnerHTML('');
            document.querySelectorAll('.timings').forEach((each)=>{
                each.innerHTML = `<span style="color:red;">No Internet Connection! </span>`;
            });
        });


    function showOther(data) {
        for (index in data) {
            if (index == 'data') {
                document.querySelector('#IS-Week').innerHTML = data[index].date.hijri.weekday.ar + " (" + data[index].date.hijri.weekday.en +")";
                document.querySelector('#IS-Month').innerHTML = data[index].date.hijri.month.ar + " (" + data[index].date.hijri.month.en +")" ;
                document.querySelector('#Year').innerHTML = data[index].date.hijri.year;
                document.querySelector('#timezone').innerHTML = data[index].meta.timezone;
                document.querySelector('#IS').innerHTML = data[index].date.hijri.date;                                
            }
        }
    }

// Open More Detail 

let hide = false;
icon.addEventListener('click', ()=>{
    if(hide == true){
        more.style.display = 'none';
        hide = false;
    }else{
        more.style.display = 'block';
        hide = true;
    }
})

// Open About Section
Openbtn.addEventListener('click', ()=>{
    AboutSection.style.display = 'block';
    contactSec.style.display = 'none';
    more.style.display = 'none';
    timeSec.style.display = 'block';
    hide = false;
})
Closebtn.addEventListener('click',()=>{
    AboutSection.style.display = 'none';
})

//Open Contact Section

openContact.addEventListener('click', ()=>{
    AboutSection.style.display = 'none';
    more.style.display = 'none';
    timeSec.style.display = 'none';
    contactSec.style.display = 'block';
    hide = false;
})
openContact2.addEventListener('click', ()=>{
    AboutSection.style.display = 'none';
    more.style.display = 'none';
    timeSec.style.display = 'none';
    contactSec.style.display = 'block';
    hide = false;
})
closeContact.addEventListener('click',()=>{
    contactSec.style.display = 'none';
    timeSec.style.display = 'block';    
})

// hiding First Page 

document.querySelector('.close-icon').addEventListener('click',()=>{
    more.style.display = 'none';
    hide = false;
});

function next(username) {
    const name = document.querySelector('#wel-pop h1')
    localStorage.setItem('username',username);
    localStorage.setItem('isSignIn', 'true');
    isLogIn();
    content.style.display = 'block';
    document.querySelector('.authentication').style.display = 'none';
    const Uname = localStorage.getItem('username');
    name.innerHTML = "Hi Mr." + Uname;
    document.querySelector('#ProfileName').innerHTML = Uname;
}

startButton.addEventListener('click',()=>{
    loader2.style.display = 'block';
    content.style.display = 'none';
    setTimeout(()=>{
        firstPage.style.display = 'none';
        loader2.style.display = 'none';
        timeSec.style.display = 'block';
    },2000)
    setTimeout(()=>{
        const popUp = document.querySelector('#wel-pop')
        popUp.style.display = 'block';
        setTimeout(()=>{
            popUp.style.transform = 'translatex(-200%)';
        },3000);
    },3000)
})

field.addEventListener('click',(e)=>{
    placeholder.style.transform = 'translatey(-32px) translatex(-10px) scale(0.9)';
    placeholder.style.color = 'green'
});
nameSubmitBtn.addEventListener('click',()=>{
    let name = userName.value;
    if(!name){
            alert('⚠️ WARNING Enter a valid name !');
    }else if(name.length < 3){
            alert('⚠️ WARNING Name must be 3 character');
    }else if(name.length > 3){
            alert('👍🏻 SuccessFull! Your name are send to the server');
        next(name);
    }
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Canvas Effects
// set up
const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 
ctx.fillStyle = 'green';
ctx.lineWidth = '1';
// const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, 'white');
// gradient.addColorStop(0.5, 'magenda');
// gradient.addColorStop(1, 'blue');


class Particles {
    constructor(effect){
        this.effect = effect;
        this.radius = Math.random() * 20 + 5;  
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 2);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 2);
        this.vx = Math.random()*0.1 + 0.5;
        this.vy = Math.random()*0.1 - 0.3;

    }
    draw(context){
        context.beginPath();
        context.arc(this.x,this.y,this.radius , 0, Math.PI *2)
        context.fill();
        context.stroke()
    }
    update(){
        this.x += this.vx;
        if(this.x > this.effect.width - this.radius || this.x < 0 +this.radius) this.vx *= -1;

        this.y += this.vy;
        if(this.y > this.effect.height - this.radius || this.y < 0 +this.radius) this.vy *= -1;
    }
}

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.height = canvas.height;
        this.width = canvas.width;
        this.particles = [];
        this.numberOfParticles = 10;
        this.createParticles();
    }
    createParticles(){
        for(let i=0 ; i<=this.numberOfParticles; i++){
            this.particles.push(new Particles(this));
        }
    }
    handleParticles(context){
        this.particles.forEach(particle =>{
            particle.draw(context);
            particle.update();
        })
    }
}

const effect = new Effect(canvas);

function animate(params) {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    effect.handleParticles(ctx);
    requestAnimationFrame(animate);
}
animate();



