(function () {
	var actualizarHora = function () {
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
		pDiaSemana.textContent = semana[diaSemana];
		pDia.textContent = dia;
		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
		pMes.textContent = meses[mes];
		pYear.textContent = year;

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else{
			ampm = 'AM';
		}

		if (horas == 12) {
			horas = 12;
		};
		if (horas < 10) {
			horas = "0" + horas;
		};
		pHoras.textContent = horas;
		pAMPM.textContent = ampm;
		
		if (minutos < 10) {
			minutos = "0" + minutos;
		};
		if (segundos < 10) {
			segundos = "0" + segundos;
		};
		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};

	actualizarHora();	
	var intervalo = setInterval(actualizarHora, 1000);
}());

var horariosCapitales= [
	{
		name:"Chicago",
		hora: -1
	},
	{
		name:"Sao Paulo",
		hora: 1
	},
	{
		name:"Santiago",
		hora: 0
	},
	{
		name:"Mexico D.F",
		hora: -1
	},
	{
		name:"Caracas",
		hora: 0
	},
	{
		name:"Brasilia",
		hora: 1
	},
	{
		name:"Quito",
		hora: -1
	},
	{
		name:"Guayaquil",
		hora: -1
	},
	{
		name:"Cabo Santa MArta",
		hora: - 2
	},
	{
		name:"Bogota",
		hora: -1
	}
];


$( "input" ).on( "click", function() {
  $( "#log" ).html( $( "input:checked" ).val() + " is checked!" );
});

