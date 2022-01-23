let elMovis = document.querySelector (".movis")
let elForm = document.querySelector ('form')
let elInputPoster = document.querySelector(".inputPoster")
let elInputText = document.querySelector(".inputtext ")
let elInputtitel = document.querySelector(".inputtitel")
let elInputkg = document.querySelector(".inputkg ")
let elInputMassa = document.querySelector(".inputMassa ")





function addNewPokemon(imgpokemon, Namepokemon, Typepokemon, Weightpokemon, Heightpokemon, Arrpokemon){
    let inputimg = imgpokemon.value.trim();
    let inputname = Namepokemon.value.trim();    
    let inputtype = Typepokemon.value.trim();
    let inputweight = Weightpokemon.value.trim() + ' kg';
    let inputheight = Heightpokemon.value.trim() + ' m';

    let newPokemon = ({
        img: inputimg,
        name: inputname,
        type: inputtype,
        weight: inputweight,
        height: inputheight
    })

    Arrpokemon.unshift(newPokemon)
}


function handleFormSubmit(evt){
    evt.preventDefault();

addNewPokemon(elInputPoster,
    elInputText,
    elInputtitel,
    elInputkg,
    elInputMassa,
    pokemons);

    rederMovis(pokemons)


    elInputPoster.value = null;
    elInputText.value = null;
    elInputtitel.value = null;
    elInputkg.value = null;
    elInputMassa.value = null;


}

elForm.addEventListener('submit', handleFormSubmit);



function rederMovis (_pokemons ) {
elMovis.innerHTML = null
    for (let i = 0; i < _pokemons.length; i++) {
        
        // Create pokemons 
        let newLi = document.createElement ('li')
        let newimg = document.createElement ('img')
        let newheading = document.createElement ('h2')
        let newparagrf = document.createElement ('p')
        let her = document.createElement('hr')
        let agr = document.createElement ('p')
        let agrr = document.createElement ('p')
        let newUl = document.createElement ('ul')

        // set attribut
        newLi.setAttribute('class', 'item')
        her.setAttribute ('class', 'liner')
        agr.setAttribute('class', 'age d-flex')
        agrr.setAttribute('class', 'agee')
        newimg.setAttribute('src',  _pokemons[i].img)
        newimg.setAttribute('alt', _pokemons[i].candy + ", poster")
        newimg.setAttribute('width', 157)
        newimg.setAttribute('height', 157)
        newheading.setAttribute('class', 'heading')
        newparagrf.setAttribute('class', 'paragrf')
        newUl.setAttribute('class' ,'listli')



        newheading.textContent = _pokemons[i].name
        newparagrf.textContent = _pokemons[i].candy
        agr.textContent = _pokemons[i].weight
        agrr.textContent = _pokemons[i].height


        newLi.appendChild(newimg)
        newLi.appendChild(her)
        newLi.appendChild(newheading)
        newLi.appendChild(newparagrf)
        newLi.appendChild(agr)
        newLi.appendChild(agrr)
        newLi.appendChild(newUl)
        elMovis.appendChild(newLi)   
    }
}


rederMovis(pokemons, elMovis);



