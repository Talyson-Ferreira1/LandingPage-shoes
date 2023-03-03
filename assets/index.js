
const numberSize = document.querySelector('.size-Number');

numberSize.addEventListener('click', (clicado)=>{

    const medidas = document.querySelectorAll('.size');

    medidas.forEach(element => {
        if(element.classList.contains('selecionado')){
            element.classList.remove('selecionado');
        }else return        
        
    });

    
    
    if(clicado.target.classList.contains('selecionado')){
        return
    }else{
        clicado.target.classList.add('selecionado');
    }
    
});





const colorBlack = document.querySelector('.black');
const colorBlue = document.querySelector('.blue');
const colorPink = document.querySelector('.pink');
const colorGreen = document.querySelector('.green');

colorBlack.addEventListener('click',(cor)=>{
    const blackShoe = document.querySelector('.shoe-black');
    removeChecks()
    cor.target.classList.add('check');
    blackShoe.style.opacity = "1"
    

});

colorBlue.addEventListener('click',(cor)=>{
    const blueShoe = document.querySelector('.shoe-blue');
    removeChecks()
    cor.target.classList.add('check');
    blueShoe.style.opacity = "1"
});

colorPink.addEventListener('click',(cor)=>{
    const pinkShoe = document.querySelector('.shoe-pink');
    removeChecks()
    cor.target.classList.add('check');
    pinkShoe.style.opacity = "1"
});

colorGreen.addEventListener('click',(cor)=>{
    const greenShoe = document.querySelector('.shoe-green');
    removeChecks()
    cor.target.classList.add('check');
    greenShoe.style.opacity = "1"
});

function removeChecks(){
    const cores = document.querySelectorAll('.circle-Color');

    cores.forEach(el =>{
        if(el.classList.contains('check')){
            el.classList.remove('check');
        }else return
      
    });

    const removeShoes = document.querySelectorAll('.shoes-config ');

    removeShoes.forEach(shoe => {
        shoe.style.opacity = "0"

    })

}





const favoritos = document.querySelector('.favorites');
const favoritosWindow = document.querySelector('.favorite-window');
favoritos.addEventListener('click', toggleFavoritos);

const perfil = document.querySelector('.perfil');
const perfilWindow = document.querySelector('.perfi-window');
perfil.addEventListener('click', togglePerfil);

const sacola = document.querySelector('.sacola');
const sacolaWindow = document.querySelector('.sacola-window');
sacola.addEventListener('click',toggleSacola);


function toggleFavoritos(){

    if(favoritosWindow.classList.contains("ativado")){
        favoritosWindow.classList.remove("ativado");
    }else{
        favoritosWindow.classList.add("ativado");
    }

    closeOthers("favoritos")
}

function togglePerfil(){

    if(perfilWindow.classList.contains("ativado")){
        perfilWindow.classList.remove("ativado");
    }else{
        perfilWindow.classList.add("ativado");
    }

    closeOthers("perfil")
}

function toggleSacola(){

    if(sacolaWindow.classList.contains("ativado")){
        sacolaWindow.classList.remove("ativado");
    }else{
        sacolaWindow.classList.add("ativado");
    }

    closeOthers("sacola")
}

function closeOthers(botao){

    if(botao == "favoritos"){

        if(perfilWindow.classList.contains("ativado")){
            perfilWindow.classList.remove("ativado");
        }

        if(sacolaWindow.classList.contains("ativado")){
            sacolaWindow.classList.remove("ativado");
        }

    }else if(botao == "perfil"){

        if(sacolaWindow.classList.contains("ativado")){
            sacolaWindow.classList.remove("ativado");
        }

        if(favoritosWindow.classList.contains("ativado")){
            favoritosWindow.classList.remove("ativado");
        }

    }else if(botao == "sacola"){

        if(favoritosWindow.classList.contains("ativado")){
            favoritosWindow.classList.remove("ativado");
        }

        if(perfilWindow.classList.contains("ativado")){
            perfilWindow.classList.remove("ativado");
        }
    }
}

