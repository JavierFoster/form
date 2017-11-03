function misDatos(){
	console.log("hola mundo")
	var nombre=document.getElementById('Nombre').value
	console.log(nombre)
	var carrera=document.getElementById('carrera').value
	console.log(carrera)
	var descripcion=document.getElementById('descripcion').value
	console.log(descripcion)
	localStorage.setItem("Nombre",nombre)
	console.log(localStorage.getItem('Nombre'))
	localStorage.setItem("Carrera",carrera)
	console.log(localStorage.getItem('Carrera'))
	localStorage.setItem("Descripcion",descripcion)
	console.log(localStorage.getItem('Descripcion'))

}
function datos(){
	var nombreL=localStorage.getItem('Nombre')
	var carreraL=localStorage.getItem('Carrera')
	var descripcionL=localStorage.getItem('Descripcion')
	document.getElementById('txtcarrera').innerHTML=carreraL
	document.getElementById('txtnombre').innerHTML=nombreL
	document.getElementById('txtdescripcion').innerHTML=descripcionL
	
}