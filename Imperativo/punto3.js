/*3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello hay que hacer un monitoreo constante,
 Cree una función  que permita calcular la temperatura media de la luna a partir de la temperatura
 máxima y mínima de cada día*/
//las temperaturas estan dadas en grados celcios
let temperaturaInicialDia1= 1;
let tempetaruraFinalDia1= 2;

function CalcularTemperaturaLunar (TemperaturaInicial, TemperaturaFinal){

        let promedio= ((TemperaturaInicial+TemperaturaFinal)/2);
        return (promedio)
}

console.log(CalcularTemperaturaLunar(temperaturaInicialDia1,tempetaruraFinalDia1 ))
