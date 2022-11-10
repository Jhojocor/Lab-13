const contenedor = document.getElementById(`contenedor`);
const escribir1 = document.getElementById(`escribir`);
const boton = document.getElementById(`boton`);
const cerrar = document.getElementById(`cerrar`);
const localStorage = window.localStorage;


let savedPost = localStorage.getItem('posts');
let posts = [];
if(savedPost != null){
    posts = JSON.parse(savedPost);
    console.log(posts);
    for(let i=0 ; i<posts.length ; i++){
        let post = new Task(posts[i].message);
        post.render();
    }

}
console.log(savedPost);
console.log(posts);


function doPost(){
    let post = new Task(escribir1.value);
    post.render();
    posts.push(post);
    let json = JSON.stringify(posts);
    localStorage.setItem('posts', json);
}

boton.addEventListener('click', doPost);




/*function tarjeta(){
    var texto = document.getElementById(`escribir`).value;
    contenedor.innerHTML += `<div id="mimodal" class="modulo">
    <img id="cerrar" src="https://cdn-icons-png.flaticon.com/512/54/54972.png" alt="">
    <div class="organizador">
        <p>${texto}</p>
    </div>
    <div>
        <img class="cuadra" src="https://images.emojiterra.com/openmoji/v13.1/512px/1f7e5.png" alt="">
        <img class="cuadra" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44983/blue-square-emoji-clipart-md.png" alt="">
    </div>
</div>`
}

function closeModal(e){
    e.preventDefault();
    mimodal.classList.add(`hide`);
}

cerrar.addEventListener(`click`, closeModal);
boton.addEventListener(`click`, tarjeta);
*/
