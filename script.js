const selectEl = document.getElementById('select')
const regimg = document.getElementById('planet-img')

// console.log(regimg)

selectEl.addEventListener('change',function(){
	// if (this.value === 'mercury'){
	// 	regimg.src = "./Assets/Planet.svg"
	// } else {
	// 	regimg.src = "./Assets/Uran.svg"
	// }

// Ternary operator	
	this.value === 'mercury' 
	? regimg.src = "./Assets/Planet.svg"
	: regimg.src = "./Assets/Uran.svg"
})