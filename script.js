
const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
	e.preventDefault();
	statusTxt.style.display = "inline-block";
	statusTxt.style.color = "#66C6BA";

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "mailmess.php", true);
	xhr.onload = ()=>{
		if(xhr.readyState == 4 && xhr.status == 200){
			let response = xhr.response;
			if(response.indexOf("Message or email empty") != -1 || response.indexOf("Failed to send message") || response.indexOf("Enter valid email")){
				statusTxt.style.color = "red"; 
			}else{
				form.reset();
				setTimeout(()=>{
					statusTxt.style.display = "none";
				}, 3000);
			}
			statusTxt.innerText = response;
		}
	}
	let formData = new FormData(form);

	xhr.send(formData);
}