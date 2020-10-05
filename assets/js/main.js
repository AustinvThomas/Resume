function openNav() {
  document.getElementById("nav_menu").style.left =  0;
  
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  
  document.getElementById("nav_menu").style.left =  "-100%";

}
const navMenu = document.getElementById('nav_menu')
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
	document.getElementById("nav_menu").style.left =  "-100%";
}
navLink.forEach(n => n.addEventListener('click',linkAction))



const section = document.querySelectorAll('section[id]')

window.addEventListener('scroll',scrollActive)
function scrollActive(){
	const scrollY = window.pageYOffset

	section.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50
		 sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
			document.querySelector('.nav_menu a[href*='+sectionId +']').classList.add('active')
		}else{
			document.querySelector('.nav_menu a[href*='+sectionId +']').classList.remove('active')
		}
	})
}

