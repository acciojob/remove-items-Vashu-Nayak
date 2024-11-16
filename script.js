//your JS code here. If required.

let cselect=document.getElementById("colorSelect")
let button=document.getElementByTagName("input")

button.addEventListener("click" ()=>{
	let soption=cselect.value;

	if(soption){
		let options=cselect.options
		for(let i=0;i<options.length;i++){
			if(options[i].value==soption){
				cselect.remove(i)
				break
			}
		}
	}
})
