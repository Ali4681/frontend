let btn = document.querySelector(".button");
		let bgCont = document.querySelector(".bg-container");
		let cont = document.querySelector(".container");

		btn.addEventListener('click', () => {
			bgCont.classList.toggle('active');
			cont.classList.toggle('active');
		})