let wrapper = document.querySelector('#wrapper-hour');

for(let i = 0; i < 12; i++) {
    let div = document.createElement('div');
    div.className = "swiper-slide";
    div.innerHTML = i;
    wrapper.appendChild(div);
}

wrapper = document.querySelector("#wrapper-minute");
let wrapper2 = document.querySelector("#wrapper-second");

for(let i = 0; i < 60; i++){
    let div = document.createElement('div');
    div.className = "swiper-slide";
    div.innerHTML = i;
    wrapper.appendChild(div);
}

for(let i = 0; i < 60; i++){
    let div = document.createElement('div');
    div.className = "swiper-slide";
    div.innerHTML = i;
    wrapper2.appendChild(div);
}