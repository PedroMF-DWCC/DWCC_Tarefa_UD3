//##### EJERCICIO 1 - DATE #####
function diasFinDeCurso() {
    console.log("##### EJERCICIO 1 - DATE #####\n");
    var dataActual = new Date();
    var dataFinDeCurso = new Date(2024, 5, 25);
    var tempoDiferencia = dataFinDeCurso.getTime() - dataActual.getTime();
    var diasDiferencia = Math.ceil(tempoDiferencia / (1000 * 60 * 60 * 24));
    console.log("Quedan ".concat(diasDiferencia, " d\u00EDas hasta final de curso."));
}
//##### EJERCICIO 2 - DATE #####
function cumpleanosFinDeSemana() {
    console.log("\n\n##### EJERCICIO 2 - DATE #####\n");
    var cumpleanosStr = prompt("Introduce a data do teu cumpleanos(DD/MM):");
    if (!cumpleanosStr) {
        console.log("Formato de fecha no válido.");
        return;
    }
    console.log("\nA data introducida \u00E9: ".concat(cumpleanosStr));
    var arrayDiaMes = cumpleanosStr.split("/");
    var dia = parseInt(arrayDiaMes[0]);
    var mes = parseInt(arrayDiaMes[1]) - 1;
    var cumpleanos = new Date(2023, mes, dia);
    var anos = "";
    for (var ano = new Date().getFullYear(); ano <= 2100; ano++) {
        cumpleanos.setFullYear(ano);
        if (cumpleanos.getDay() === 0 || cumpleanos.getDay() === 6) {
            anos = anos + ano + ", ";
        }
    }
    console.log("O teu cumpleanos cadrará en fin de semana nos anos: " + anos);
}
//##### EJERCICIO 3 - DATE #####
function formatearFechaActual(formato) {
    console.log("\n\n##### EJERCICIO 3 - DATE #####\n");
    var fechaActual = new Date();
    var fechaFormateada;
    switch (formato) {
        case 1:
            fechaFormateada = "".concat(fechaActual.getDate(), "/").concat(fechaActual.getMonth() + 1, "/").concat(fechaActual.getFullYear());
            break;
        case 2:
            var diasSemanaESP = ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
            var mesesESP = ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'];
            fechaFormateada = "".concat(diasSemanaESP[fechaActual.getDay()], ", ").concat(fechaActual.getDate(), " de ").concat(mesesESP[fechaActual.getMonth()], " de ").concat(fechaActual.getFullYear());
            break;
        case 3:
            var diasSemanaENG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var mesesENG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            fechaFormateada = "".concat(diasSemanaENG[fechaActual.getDay()], ", ").concat(mesesENG[fechaActual.getMonth()], " ").concat(fechaActual.getDate(), ", ").concat(fechaActual.getFullYear());
            break;
        default:
            console.log("Non existe o formato introducido como parámetro");
            return;
    }
    console.log(fechaFormateada);
}
//##### EJERCICIO 4 - DATE #####
function formatearHoraActual(formato) {
    console.log("\n\n##### EJERCICIO 4 - DATE #####\n");
    var fechaActual = new Date();
    var horaFormateada;
    var horas = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
    var parteDia = "";
    if (minutos < 10) {
        minutos = 0 + minutos;
    }
    if (segundos < 10) {
        segundos = 0 + segundos;
    }
    switch (formato) {
        case 1:
            horaFormateada = "".concat(horas, ":").concat(minutos, ":").concat(segundos);
            break;
        case 2:
            if (horas <= 12) {
                parteDia = "AM";
            }
            else
                parteDia = "PM";
            horas = horas % 12 || 12;
            horaFormateada = "".concat(horas, ":").concat(minutos, " ").concat(parteDia);
            break;
        default:
            console.log("Non existe o formato introducido como parámetro");
            return;
    }
    console.log(horaFormateada);
}
// Llamada a la función de cada ejercicio
diasFinDeCurso();
cumpleanosFinDeSemana();
formatearFechaActual(1);
formatearFechaActual(2);
formatearFechaActual(3);
formatearHoraActual(1);
formatearHoraActual(2);
