        //##### EXERCICIO PARTE 1 - STRING #####

        console.log("##### EXERCICIO PARTE 1 - STRING #####");

        const nomeApelidos: string = prompt("\nIntroduce nome e apelidos") || '';

        console.log(`\nO tamaño da cadea introducida é de ${nomeApelidos.length}`);
        console.log(`\nO tamaño da cadea introducida sin espacios é ${(nomeApelidos.length - (nomeApelidos.match(/\s/g) || []).length)}`);
        console.log(`\nO nome completo en minúsculas é:  ${nomeApelidos.toLowerCase()}`);
        console.log(`\nO nome completo en maiúsculas é:  ${nomeApelidos.toUpperCase()}`);

        const cadeasNomeApelidos: string[] = nomeApelidos.split(" ");
        const nome: string = cadeasNomeApelidos[0] || '';
        const apelido1: string = cadeasNomeApelidos[1] || '';
        const apelido2: string = cadeasNomeApelidos[2] || '';
        console.log(`\nNome: ${nome}, Apelido1: ${apelido1}, Apelido2: ${apelido2}`);

        let usuario: string = nome.toLowerCase() + apelido1.charAt(0).toUpperCase() + apelido2.charAt(0).toUpperCase();
        console.log("\nO seu usuario pode ser: " + usuario);

        //##### EXERCICIO PARTE 2 - STRING #####

        console.log("\n\n##### EXERCICIO PARTE 2 - STRING #####");

        const passwd: string = prompt("\nIntroduce unha contraseña") || '';

        console.log(`\nA contraseña introducida é: ${passwd}`);

        passwd.length >= 8 && passwd.length <= 16 ? console.log("\nO contrasinal cumple o criterio de lonxitude") : console.log("\nO contrasinal NON cumple o criterio de lonxitude");

        if (/[A-Z]/.test(passwd)) {
            console.log("\nO contrasinal cumple o criterio de conter polo menos unha maiúscula");
        } else console.log("\nO contrasinal debe ter polo menos unha maiúscula");

        if (/[a-z]/.test(passwd)) {
            console.log("\nO contrasinal cumple o criterio de conter polo menos unha minúscula");
        } else console.log("\nO contrasinal debe ter polo menos unha minúscula");

        if (/[0-9]/.test(passwd)) {
            console.log("\nO contrasinal cumple o criterio de conter polo menos un número");
        } else console.log("\nO contrasinal debe ter polo menos un número");

        if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwd)) {
            console.log("\nO contrasinal cumple o criterio de conter polo menos con un carácter especial");
        } else console.log("\nO contrasinal debe conter polo menos con un carácter especial");
