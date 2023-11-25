//##### EJERCICIO 1 - DATE #####

function diasFinDeCurso(): void {
    console.log("##### EJERCICIO 1 - DATE #####\n");

    const dataActual: Date = new Date();
    const dataFinDeCurso: Date = new Date(2024, 5, 25);
    const tempoDiferencia: number = dataFinDeCurso.getTime() - dataActual.getTime();
    const diasDiferencia: number = Math.ceil(tempoDiferencia / (1000 * 60 * 60 * 24));

    console.log(`Quedan ${diasDiferencia} días hasta final de curso.`);
}


//##### EJERCICIO 2 - DATE #####

function cumpleanosFinDeSemana(): void {
    console.log("\n\n##### EJERCICIO 2 - DATE #####\n");

    const cumpleanosStr: string | null = prompt("Introduce a data do teu cumpleanos(DD/MM):");

    if (!cumpleanosStr) {
        console.log("Formato de fecha no válido.");
        return;
    }

    console.log(`\nA data introducida é: ${cumpleanosStr}`);

    const arrayDiaMes: string[] = cumpleanosStr.split("/");

    const dia: number = parseInt(arrayDiaMes[0]);
    const mes: number = parseInt(arrayDiaMes[1]) - 1;

    let cumpleanos: Date = new Date(2023, mes, dia);
    let anos: string = "";

    for (let ano: number = new Date().getFullYear(); ano <= 2100; ano++) {
        cumpleanos.setFullYear(ano);

        if (cumpleanos.getDay() === 0 || cumpleanos.getDay() === 6) {
            anos = anos + ano + ", ";
        }
    }
    console.log("O teu cumpleanos cadrará en fin de semana nos anos: " + anos);
}


//##### EJERCICIO 3 - DATE #####

function formatearFechaActual(formato: number): void {
    console.log("\n\n##### EJERCICIO 3 - DATE #####\n");

    const fechaActual: Date = new Date();
    let fechaFormateada: string;

    switch (formato) {
        case 1:
            fechaFormateada = `${fechaActual.getDate()}/${fechaActual.getMonth() + 1}/${fechaActual.getFullYear()}`;
            break;

        case 2:
            const diasSemanaESP: string[] = ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
            const mesesESP: string[] = ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'];

            fechaFormateada = `${diasSemanaESP[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${mesesESP[fechaActual.getMonth()]} de ${fechaActual.getFullYear()}`;
            break;

        case 3:
            const diasSemanaENG: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const mesesENG: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            fechaFormateada = `${diasSemanaENG[fechaActual.getDay()]}, ${mesesENG[fechaActual.getMonth()]} ${fechaActual.getDate()}, ${fechaActual.getFullYear()}`;
            break;

        default:
            console.log("Non existe o formato introducido como parámetro");
            return;
    }
    console.log(fechaFormateada);
}


//##### EJERCICIO 4 - DATE #####

function formatearHoraActual(formato: number): void {
    console.log("\n\n##### EJERCICIO 4 - DATE #####\n");

    const fechaActual: Date = new Date();
    let horaFormateada: string;

    let horas: number = fechaActual.getHours();
    let minutos: number = fechaActual.getMinutes();
    let segundos: number = fechaActual.getSeconds();
    let parteDia: string = "";

    if (minutos < 10) { minutos = 0 + minutos; }
    if (segundos < 10) { segundos = 0 + segundos; }

    switch (formato) {
        case 1:
            horaFormateada = `${horas}:${minutos}:${segundos}`;
            break;

        case 2:
            if (horas <= 12) {
                parteDia = "AM";
            } else parteDia = "PM";
            horas = horas % 12 || 12;
            horaFormateada = `${horas}:${minutos} ${parteDia}`;
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
