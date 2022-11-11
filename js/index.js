const contenedor = document.getElementById(`contenedor`);
const contenedor2 = document.getElementById(`contenedor2`);
const contenedor3 = document.getElementById(`contenedor3`);
const escribir1 = document.getElementById(`escribir`);
const boton = document.getElementById(`boton`);
const cerrar = document.getElementById(`cerrar`);
const localStorage = window.localStorage;

let savedPost = localStorage.getItem('posts');
let posts = [];

function crearlist(){
    if(savedPost != null){
    posts = JSON.parse(savedPost);
    console.log(posts);
    for(let i=0 ; i<posts.length ; i++){
        let post = new Task(posts[i].message, posts[i].estado, posts[i].id);
        if(post.estado === 0){
            post.render(contenedor);
        }else if(post.estado === 1){
            post.render(contenedor2);
        }else{
            post.render(contenedor3);
        }
        
    }
    addevents(posts);
}
}

crearlist();

function addevents(posts){
    for(let i=0 ; i<posts.length ; i++){
        let post = new Task(posts[i].message, posts[i].estado, posts[i].id);
        let avanzar = document.getElementById(`Next${post.id}`);
        avanzar.addEventListener(`click`, function(){
            //alert(post.message+"\n"+post.id);
            
        });
    }
}

function doPost(){
    let id = 0;
    let savedPost = localStorage.getItem('posts');
    if(savedPost != null){
        let posts = JSON.parse(savedPost);
        id = posts.length+1;
    }
    let post = new Task(escribir1.value, 0, id);
    posts.push(post);
    let json = JSON.stringify(posts);
    localStorage.setItem('posts', json);
    crearlist();
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
