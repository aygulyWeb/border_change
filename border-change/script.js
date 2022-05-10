const range = document.querySelectorAll('input');
const border = document.querySelectorAll('.border');
const square = document.querySelector('.square');
border.innerHTML = range.value;


// range.forEach(item => {
// 	item.addEventListener('input', () => {
// 		console.log(item.value)
// 		border.forEach(elem => {
// 			elem.innerHTML = item.value;
// 		})
// 	})
// })

range.forEach(item => {
	square.style = `
	border: 2px solid green;
	
`;
	item.addEventListener('input', () => {
		square.style.width = `100px`
		square.style.height = `100px`
		square.style.borderTopRightRadius = `${item.value[0]}px`
		square.style.borderTopLeftRadius = `${item.value[1]}px`
		square.style.borderBottomRightRadius = `${item.value[2]}px`
		square.style.borderBottomLeftRadius = `${item.value[3]}px`
		console.log(item.value)
	})
})

// range.addEventListener('input', () => {
// 	square.style.width = `${range.value}px`
// 	square.style.height = `${range.value}px`
// 	square.style.borderTopRightRadius = `${range.value}px`
// 	square.style.borderTopLeftRadius = `${range.value}px`
// 	square.style.borderBottomRightRadius = `${range.value}px`
// 	square.style.borderBottomLeftRadius = `${range.value}px`
// })


