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
    contenedor.innerHTML = "To do"
    contenedor2.innerHTML = "Doing"
    contenedor3.innerHTML = "Done"
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
            if(posts[i].estado<2){
                posts[i].estado += 1
                let json = JSON.stringify(posts);
                savedPost = json;
                localStorage.setItem('posts', json);
                //Volver a recargar los post
                crearlist();
            }
        });
        let retroceder = document.getElementById(`Back${post.id}`);
        retroceder.addEventListener(`click`, function(){
            //alert(post.message+"\n"+post.id);
            if(posts[i].estado>0){
                posts[i].estado -= 1
                let json = JSON.stringify(posts);
                savedPost = json;
                localStorage.setItem('posts', json);
                //Volver a recargar los post
                crearlist()
            }
        });
        let borrar = document.getElementById(`cerrar${post.id}`);
        borrar.addEventListener(`click`, function(){
            //alert(post.message+"\n"+post.id);
            posts.splice(post, 1);
            let json = JSON.stringify(posts);
            savedPost = json;
            localStorage.setItem('posts', json);
            //Volver a recargar los post
            crearlist()
        });
    }
}

function doPost(){
    let id = 1;
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
    //reiniciando la pag se agregan los datos nuevos
}

boton.addEventListener('click', doPost);

