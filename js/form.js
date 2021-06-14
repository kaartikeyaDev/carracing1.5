class Form {

    constructor(){

        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h2');
    }
    hide(){

        this.input.hide()
        this.button.hide()
        this.greeting.hide()

    }


    display(){

        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130,0);
        this.input.position(130,130);
        this.button.position(250,250);

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value();
            playerCount= playerCount+1; 
            player.index = playerCount ; 
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("Hello " + player.name);
            this.greeting.position(130,130);
        });
        

    }
}