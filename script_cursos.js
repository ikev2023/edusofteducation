function verificar() {
    let objeto = localStorage.getItem("av_mate");
    let objeto2 = localStorage.getItem("av_ww1");
    
    // Mostrar el objeto en progreso
    if (objeto) {
        let avance = parseInt(objeto);
        var progressBar = document.getElementById("progressBar");
        if (avance > 4) {
            avance = 4;
        }
        var porcentaje = (avance / 4) * 100;
        // Actualizar la barra de progreso con el valor de la variable
        progressBar.style.width = porcentaje + '%';
        progressBar.textContent = porcentaje + '%';
    }
    
    if (objeto2) {
        let avance2 = parseInt(objeto2);
        var progressBar2 = document.getElementById("progressBar2");
        if (avance2 > 5) {
            avance2 = 5;
        }
        var porcentaje2 = (avance2 / 5) * 100;
        // Actualizar la barra de progreso con el valor de la variable
        progressBar2.style.width = porcentaje2 + '%';
        progressBar2.textContent = porcentaje2 + '%';
    }
    
    // Verificar si ambas barras están al 100%
    var btnJuegos = document.getElementById("btn_juegos");
    if (objeto && objeto2) {
        let avance = parseInt(objeto);
        let avance2 = parseInt(objeto2);
        if (avance === 4 && avance2 === 5) {
            btnJuegos.disabled = false;
        } else {
            btnJuegos.disabled = true;
        }
    } else {
        btnJuegos.disabled = true;
    }
}
function ir()
{
    window.location = "juegos.html";
}

