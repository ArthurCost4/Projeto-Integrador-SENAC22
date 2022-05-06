const btnNav =document.getElementById('navResponsive')
function abrirMenu(event){

    if(event.type === 'touchstart') event.preventDefault()
     const menuResponsive = document.getElementById('menuResponsive')
     menuResponsive.classList.toggle('active')
    
}
btnNav.addEventListener('click', abrirMenu)
btnNav.addEventListener('touchstart', abrirMenu)


