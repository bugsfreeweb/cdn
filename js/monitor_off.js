const seccionCanales = document.getElementById("channel-list");
const btns = seccionCanales.getElementsByClassName("channel");

const nombreBarra = document.createElement('div');


const ancla = document.createElement('A');
ancla.id = 'links';
ancla.title = 'SIGNAL TITLE';


for (const canal of LosCanales) {
    const BtnCanal = document.createElement('div');

    BtnCanal.classList.add('channel');
    BtnCanal.classList.add('waves-effect');
    BtnCanal.classList.add('waves-grisclaro');
    BtnCanal.innerHTML = canal.nombre;

    BtnCanal.onclick = () => { // https://stackoverflow.com/questions/3316207/add-onclick-event-to-newly-added-element-in-javascript
        player.setAttribute(
            'src',
            canal.url
        );

        document.getElementById('video-container').appendChild(nombreBarra);
        ancla.innerText = canal.nombre;
    };
    seccionCanales.appendChild(BtnCanal)
}

// https://www.w3schools.com/howto/howto_js_active_element.asp
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("SelectedSignal");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("SelectedSignal", "");
        }
        this.className += "SelectedSignal";
    });
}
