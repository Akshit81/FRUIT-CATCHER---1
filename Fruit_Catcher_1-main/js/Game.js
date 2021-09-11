class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
                apple2 = createSprite(100,200);
                banana2= createSprite(300,200);
                melon2 = createSprite(500,200);
            orange2= createSprite(700,200);
        
            apple2.addImage(apple2image);
          banana2.addImage(banana2image);
           melon2.addImage(melon2image);
            orange2.addImage( orange2image);
        
            cars = [car1, car2, car3, car4];
          }
          
  
    play()}
        
        form.hide();

        Player.getPlayerInfo();
        image(back_img, 0, 0, 1000, 800);
        var x =100;
        var y=200;
        var index =0;
        drawSprites();

        for(var plr in allPlayers){
        
            index = index+1;
            x = 500-allPlayers[plr].distance;
            y=500;
            
            players[index -1].x = x;
            players[index - 1].y = y;

            // Differentiate the main player by printing
            // the name of the player on the basket. 

        }


        // Give movements for the players using arrow keys

        if(framecount% 20 === 0)
        fruit=createSprite(ramdom(100,1000),0,100,100)
        fruit.velocityY = 6;
        var rand =Math.round(ramdom(1,5))
        switch(rand){
        case 1:fruit.addImage("fruit1",fruit1_img)
        break;
        case 2:fruit.addImage("fruit2",fruit2_img)
        break;
        case 3:fruit.addImage("fruit3",fruit3_img)
        break;
        case 4:fruit.addImage("fruit4",fruit4_img)
        break;
        case 5:fruit.addImage("fruit5",fruit5_img)
        break;

        }
        fruitGroup.add(fruits);
    
        // Create and spawn fruits randomly
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
            if(player.distance>3860){
              gameState=2
            }
      
      
      
          drawSprites();
        
        end()
          console.log("game end")
        
      
      