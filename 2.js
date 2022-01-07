async function getWether() {
    let city = document.querySelector("#input").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a22bfa97a1cf891d749733672c31f60f&units=metric`;
    let response = await fetch(url);
    let result = await response.json();
    let newchild = `<div style="font-size: 50px; margin-top: 2%;">
                    ${city} ${result.main.temp} <sup>o</sup>C
                    </div>
                    `;
    let parent = document.querySelector("#parent");
    let child = parent.innerHTML;
    parent.innerHTML = `${newchild} ${child}`;
}