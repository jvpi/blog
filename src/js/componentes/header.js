function h2() {
	const $h2 = document.createElement('h2')
	$h2.classList.add('h2')
	$h2.innerHTML = `Felix Rivera`
	return $h2
}
function titulo() {
	const $strong = document.createElement('strong')
	$strong.classList.add('strong')
	$strong.innerHTML = `Blog de turismo`
	return $strong
}

export default {
	h2:h2,
	titulo:titulo
}