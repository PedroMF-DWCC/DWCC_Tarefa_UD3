//##### EXERCICIO PARTE 1 - STRING #####
console.log("##### EXERCICIO PARTE 1 - STRING #####");
var nomeApelidos = prompt("\nIntroduce nome e apelidos") || '';
console.log("\nO tama\u00F1o da cadea introducida \u00E9 de ".concat(nomeApelidos.length));
console.log("\nO tama\u00F1o da cadea introducida sin espacios \u00E9 ".concat((nomeApelidos.length - (nomeApelidos.match(/\s/g) || []).length)));
console.log("\nO nome completo en min\u00FAsculas \u00E9:  ".concat(nomeApelidos.toLowerCase()));
console.log("\nO nome completo en mai\u00FAsculas \u00E9:  ".concat(nomeApelidos.toUpperCase()));
var cadeasNomeApelidos = nomeApelidos.split(" ");
var nome = cadeasNomeApelidos[0] || '';
var apelido1 = cadeasNomeApelidos[1] || '';
var apelido2 = cadeasNomeApelidos[2] || '';
console.log("\nNome: ".concat(nome, ", Apelido1: ").concat(apelido1, ", Apelido2: ").concat(apelido2));
var usuario = nome.toLowerCase() + apelido1.charAt(0).toUpperCase() + apelido2.charAt(0).toUpperCase();
console.log("\nO seu usuario pode ser: " + usuario);
//##### EXERCICIO PARTE 2 - STRING #####
console.log("\n\n##### EXERCICIO PARTE 2 - STRING #####");
var passwd = prompt("\nIntroduce unha contraseña") || '';
console.log("\nA contrase\u00F1a introducida \u00E9: ".concat(passwd));
passwd.length >= 8 && passwd.length <= 16 ? console.log("\nO contrasinal cumple o criterio de lonxitude") : console.log("\nO contrasinal NON cumple o criterio de lonxitude");
if (/[A-Z]/.test(passwd)) {
    console.log("\nO contrasinal cumple o criterio de conter polo menos unha maiúscula");
}
else
    console.log("\nO contrasinal debe ter polo menos unha maiúscula");
if (/[a-z]/.test(passwd)) {
    console.log("\nO contrasinal cumple o criterio de conter polo menos unha minúscula");
}
else
    console.log("\nO contrasinal debe ter polo menos unha minúscula");
if (/[0-9]/.test(passwd)) {
    console.log("\nO contrasinal cumple o criterio de conter polo menos un número");
}
else
    console.log("\nO contrasinal debe ter polo menos un número");
if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(passwd)) {
    console.log("\nO contrasinal cumple o criterio de conter polo menos con un carácter especial");
}
else
    console.log("\nO contrasinal debe conter polo menos con un carácter especial");
