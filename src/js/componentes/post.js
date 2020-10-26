 function informacion() {
	const $elementoParrafo = document.createElement('p')
	$elementoParrafo.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat.`
	return $elementoParrafo
}

function articulo1() {
	const $elementoArticulo = document.createElement('article')
	$elementoArticulo.classList.add('article')
	$elementoArticulo.innerHTML = `
		<img src="src/img/fondo-floral.jpg" class='img'>
			<div class="article__post">
				<div class="article__post--fecha">
					<time class="fecha">19 Octubre, 2020</time>
				</div>
				<div class="article-titulo">
					<h2 class="article-h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</h2>
				</div>
				<p class="article-descripcion">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			</div>
	`

	return $elementoArticulo
}
function articulo2() {
	const $elementoArticulo = document.createElement('article')
	$elementoArticulo.classList.add('article')
	$elementoArticulo.innerHTML = `
		<img src="src/img/fondo-floral.jpg" class='img'>
			<div class="article__post">
				<div class="article__post--fecha">
					<time class="fecha">19 Octubre, 2020</time>
				</div>
				<div class="article-titulo">
					<h2 class="article-h2">Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</h2>
				</div>
				<p class="article-descripcion">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			</div>
	`

	return $elementoArticulo
}

export default {
	articulo1:articulo1,
	articulo2:articulo2
}