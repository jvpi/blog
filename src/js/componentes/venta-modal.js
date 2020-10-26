export default function (contenido) {
	const $crearDiv = document.createElement('div')
	$crearDiv.classList.add('modal')
	$crearDiv.innerHTML = contenido
	return $crearDiv
}