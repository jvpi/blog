import header from './componentes/header.js'
import post from './componentes/post.js'
import contenidoPost from './componentes/contenido-post.js'

alert('asdasd')
const $main = document.getElementById('main')
const $contentModal = document.getElementById('content-modal')

function establecerInfoHeader() {
	const $header = document.getElementById('header')
	$header.appendChild(header.h2())
	$header.appendChild(header.titulo())
}

function establecerContenidoMain() {
	
	$main.appendChild(post.articulo1())
	$main.appendChild(post.articulo2())

}

$main.addEventListener('click',function (e) {
	let arrayDeEnlaces = Array.prototype.slice.apply(document.getElementsByClassName('article'))
	let arrayDePost = Array.prototype.slice.apply(document.getElementsByClassName('post-info'))
	let i = arrayDeEnlaces.indexOf(e.target)
	const $article = document.getElementsByClassName('article')
	console.log()
	if (e.target.classList.contains('article')){
		let $crearDiv = document.createElement('div')
			$crearDiv.classList.add('modal')
			$crearDiv.innerHTML = contenidoPost[i]
		
		let $elementoSpan = document.createElement('span')
			$elementoSpan.id = 'span'
			$elementoSpan.classList.add('span')
			$elementoSpan.classList.add('icon-cross')
		
		$contentModal.appendChild($crearDiv)
		$contentModal.appendChild($elementoSpan)
		
			$article[0].style.display = 'none'
		const span = document.getElementById($elementoSpan.id)
		span.addEventListener('click',function (){
			$contentModal.removeChild($crearDiv)
			$contentModal.removeChild($elementoSpan)
			$article[0].style.display = 'block'
		})
	
	}
})

establecerInfoHeader()
establecerContenidoMain() 