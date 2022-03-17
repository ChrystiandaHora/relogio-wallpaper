function showTime(){
var time = new Date();
var hora = time.getHours();
var minuto = time.getMinutes();
var segundo = time.getSeconds();
var dname = time.getDay();
var mo = time.getMonth();
var dnum = time.getDate();
var yr = time.getFullYear();

var months = ["Janeiro", "Fevereiro", "Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var week = ["Domingo", "Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
var ids = ["dia","mes","num","ano","period"];
var values = [week[dname],months[mo],dnum,yr,];
for(var i = 0; i<ids.length; i++)


if(hora<10) hora = "0"+hora;
if(minuto<10) minuto = "0"+minuto;
if(segundo<10) segundo = "0"+segundo;
var tempo = hora+":"+minuto+":"+segundo;

document.getElementById("timer").innerHTML=tempo; /*puxa o relogio certinho */
/*document.getElementById(ids[i]).firstChild.nodeValue = values[i];*/ /* Preciso fazer puxar os dias*/

}
function initTime(){
    setInterval(showTime, 100);
}
