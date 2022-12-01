var icon = document.getElementById("iconR");

			icon.onclick = function (){
				document.body.classList.toggle("dark-theme");
				if(document.body.classList.contains("dark-theme")){
					icon.src = "/static/img/sun.png"
				}else{
					icon.src = "/static/img/moon.png"
				}
			}


// show imahe inputPost
			let uploadButton = document.getElementById("id_image");
			let chosenImage = document.getElementById("chosen-image");
			let fileName = document.getElementById("file-name");

			uploadButton.onchange = () => {
				let reader = new FileReader();
				reader.readAsDataURL(uploadButton.files[0]);
				reader.onload = () => {
					chosenImage.setAttribute("src", reader.result);
				};
				fileName.textContent = uploadButton.files[0].name;
			};