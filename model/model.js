class Task{
    constructor(message){
        this.message = message;
    }
    render(){
        contenedor.innerHTML += `<div id="mimodal" class="modulo">
                                    <img id="cerrar" src="https://cdn-icons-png.flaticon.com/512/54/54972.png" alt="">
                                    <div class="organizador">
                                        <p>${this.message}</p>
                                    </div>
                                    <div>
                                        <img class="cuadra" src="https://images.emojiterra.com/openmoji/v13.1/512px/1f7e5.png" alt="">
                                        <img class="cuadra" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44983/blue-square-emoji-clipart-md.png" alt="">
                                    </div>
                                </div>`
    }    
}