function load(){
    const load = document.querySelector(".containerLoad");
    const aplication = document.querySelector(".aplicacao")
    load.style.display="none"
    aplication.style.display="flex"

}

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
favoritos.addEventListener('click', CreateCardFavorite);

const perfil = document.querySelector('.perfil');
const perfilWindow = document.querySelector('.perfi-window');
perfil.addEventListener('click', togglePerfil);

const sacola = document.querySelector('.sacola');
const sacolaWindow = document.querySelector('.sacola-window');
sacola.addEventListener('click',toggleSacola);
sacola.addEventListener('click', CreateCardSacola);


function toggleFavoritos(){

    if(favoritosWindow.classList.contains("ativado")){
        favoritosWindow.classList.remove("ativado");
    }else{
        favoritosWindow.classList.add("ativado");
    }

    closeOthers("favoritos")
    /* CreateCardSacola(); */
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

const addProductButton = document.querySelector(".add-Product");
const addFavoriteButton = document.querySelector(".favorite");

addProductButton.addEventListener("click",sendSacolaToLocalStorage);
addFavoriteButton.addEventListener("click",sendFavoriteToLocalStorage);
addProductButton.addEventListener('click', CreateCardSacola);
addFavoriteButton.addEventListener('click', CreateCardFavorite);

function getSizePreference(){
    let sizeNumber = document.querySelectorAll(".size");
    let UserSizePreference = "";

    sizeNumber.forEach(element=>{
        if(element.classList.contains('selecionado')){
            UserSizePreference = element.innerHTML 
        }else return
        
    })

    return UserSizePreference

}
function getColorPreference(){
    let colorPreference = document.querySelectorAll(".circle-Color");
    let UserColorPreference = "";

    colorPreference.forEach(element=>{
        if(element.classList.contains('check')){

            UserColorPreference = element.classList[1];

        }else return
        
    })

    return UserColorPreference;
 
} 

function getPreferencesInLocalStorage_Sacola(){

    if(localStorage.hasOwnProperty("Sacola1")){
        const JsonPreferenceUserLocalStorage = localStorage.getItem("Sacola1");
        const ObjectPreferenceUserLocalStorage = JSON.parse(JsonPreferenceUserLocalStorage);
        const ArrayPreferenceUserLocalStorage = Object.values(ObjectPreferenceUserLocalStorage)
        var preferenceUserLocalStorageSac = ArrayPreferenceUserLocalStorage;
    }else{
        return "Sem dados"
    }
    return preferenceUserLocalStorageSac;
}
function getPreferencesInLocalStorage_Favorite(){

    if(localStorage.hasOwnProperty("Favorite1")){
        const JsonPreferenceUserLocalStorage = localStorage.getItem("Favorite1");
        const ObjectPreferenceUserLocalStorage = JSON.parse(JsonPreferenceUserLocalStorage);
        const ArrayPreferenceUserLocalStorage = Object.values(ObjectPreferenceUserLocalStorage)
        var preferenceUserLocalStorageFav = ArrayPreferenceUserLocalStorage;
    }else{
        return "Sem dados"
    }
    return preferenceUserLocalStorageFav;
}

function sendSacolaToLocalStorage(size,color,newPreference){
    var preferenceUserLocalStorage = [];

    size = getSizePreference()
    color = getColorPreference()

    newPreference = {
        tamanho: size,
        cor: color
    }
   
    if(getPreferencesInLocalStorage_Sacola() === "Sem dados"){
        preferenceUserLocalStorage.push(newPreference);
        sendSac(preferenceUserLocalStorage);
    }else{
        preferenceUserLocalStorage = getPreferencesInLocalStorage_Sacola()
        preferenceUserLocalStorage.push(newPreference);
        sendSac(preferenceUserLocalStorage);
    }
    
    function sendSac(){
        const UserSacolaPreferenceJson = JSON.stringify(preferenceUserLocalStorage);
        localStorage.setItem('Sacola1', UserSacolaPreferenceJson); 
    }
    
}
function sendFavoriteToLocalStorage(size,color,newPreference){
    var preferenceUserLocalStorage = [];

    size = getSizePreference()
    color = getColorPreference()

    newPreference = {
        tamanho: size,
        cor: color
    }

    if(getPreferencesInLocalStorage_Favorite() === "Sem dados"){
        preferenceUserLocalStorage.push(newPreference);
        sendFav(preferenceUserLocalStorage);
    }else{
        preferenceUserLocalStorage = getPreferencesInLocalStorage_Favorite();
        preferenceUserLocalStorage.push(newPreference);
        sendFav(preferenceUserLocalStorage);
    }
    
    function sendFav(preferenceUserLocalStorage){
        const UserFaoritePreferenceJson = JSON.stringify(preferenceUserLocalStorage);
        localStorage.setItem('Favorite1', UserFaoritePreferenceJson); 
    }

}

function CreateCardSacola(card){

    
    let img;
    let cor;
    let tamanho;
    const containerSac = document.querySelector('.containerSacola')


    if(getPreferencesInLocalStorage_Sacola() == "Sem dados"){

    }else{
        

        while (containerSac.firstChild) {
            containerSac.removeChild(containerSac.firstChild);
        }

        card = Object.entries(getPreferencesInLocalStorage_Sacola())

        card.forEach(tenisCard=>{

            tamanho = tenisCard[1].tamanho;
            cor = tenisCard[1].cor

            switch (cor) {
                case "black":
                    cor = "Tênis preto";
                    img = `<img class="tenisImg" src="./assets/img/shoe-black.png" alt="Black shoes">`;
                    break;

                case "blue":
                    cor = "Tênis azul";
                    img = `<img class="tenisImg" src="./assets/img/shoe-blue.png" alt="Blue shoes">`;
                    break;
                    
                case "pink":
                    cor = "Tênis rosa";
                    img = `<img class="tenisImg" src="./assets/img/shoe-pink.png" alt="Pink shoes">`;
                    break;

                case "green":
                    cor = "Tênis verde";
                    img = `<img class="tenisImg" src="./assets/img/shoe-green.png" alt="Green shoes">`;
                    break;

                default:
                    break;
            }
        
            containerSac.innerHTML +=`<div class="product">
                                        <div class="tenis">${img}</div>
                                        <div class="descricaoTenis">${cor}</div>
                                        <div class="tamanho-tenis">Nº${tamanho}</div>
                                    </div>`
        })
    }


}
function CreateCardFavorite(card){

    
    let img;
    let cor;
    let tamanho;
    const containerFav = document.querySelector('.containerFavorite')


    if(getPreferencesInLocalStorage_Favorite() == "Sem dados"){
      
    }else{
        

        while (containerFav.firstChild) {
            containerFav.removeChild(containerFav.firstChild);
        }

        card = Object.entries(getPreferencesInLocalStorage_Favorite())

        card.forEach(tenisCard=>{

            tamanho = tenisCard[1].tamanho;
            cor = tenisCard[1].cor

            switch (cor) {
                case "black":
                    cor = "Tênis preto";
                    img = `<img class="tenisImg" src="./assets/img/shoe-black.png" alt="Black shoes">`;
                    break;

                case "blue":
                    cor = "Tênis azul";
                    img = `<img class="tenisImg" src="./assets/img/shoe-blue.png" alt="Blue shoes">`;
                    break;
                    
                case "pink":
                    cor = "Tênis rosa";
                    img = `<img class="tenisImg" src="./assets/img/shoe-pink.png" alt="Pink shoes">`;
                    break;

                case "green":
                    cor = "Tênis verde";
                    img = `<img class="tenisImg" src="./assets/img/shoe-green.png" alt="Green shoes">`;
                    break;

                default:
                    break;
            }
        
            containerFav.innerHTML +=`<div class="product">
                                        <div class="tenis">${img}</div>
                                        <div class="descricaoTenis">${cor}</div>
                                        <div class="tamanho-tenis">Nº${tamanho}</div>
                                    </div>`
        })
    }


}

const clearSacolaButton = document.querySelector(".sacolaList")
const clearFavoriteButton = document.querySelector(".favoriteList")
clearSacolaButton.addEventListener("click",clearSacola);
clearFavoriteButton.addEventListener("click",clearFavorite);


function clearFavorite(){
    const containerFavorite = document.querySelector('.containerFavorite');

    if(localStorage.getItem("Favorite1") !== null) {
        localStorage.removeItem("Favorite1");

        while (containerFavorite.firstChild) {
            containerFavorite.removeChild(containerFavorite.firstChild);
        }
    }

}
function clearSacola(){
    const containerSacola = document.querySelector('.containerSacola');

    if(localStorage.getItem("Sacola1") !== null) {
        localStorage.removeItem("Sacola1");

        while (containerSacola.firstChild) {
            containerSacola.removeChild(containerSacola.firstChild);
        }
    }
}

const botao2 = document.querySelector(".button2")

botao2.addEventListener("click", ()=>{
    botao2.classList.add("ativo")
    setTimeout(()=>{botao2.classList.remove("ativo")},1000)
})


const button3 = document.querySelector(".botao")

button3.addEventListener("click", ()=>{
    button3.classList.add("ativo")
    setTimeout(()=>{button3.classList.remove("ativo")},1000)
})


 
/* const containerFavorite = document.querySelector('.containerSacola')

containerFavorite.addEventListener("click",(elemento)=>{
    console.log(elemento.target)
    if(elemento.target.classList.contains("tenisImg")){
        let product = elemento.target.parentNode.parentNode;
        product.remove()
    }else return

    
}) */


/* criar uma animação para o botão de adicionar sacola quando clicado */
/* criar animação para identificar o sapato favoritado */ 
/* Criar texto adicione produtos a sacola/adicione favoritos */




