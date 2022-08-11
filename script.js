    let health = document.getElementById("health");
    let h2Degree = document.getElementById("hidroDegree");
    var audioLaser  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mpeg";
    src1.src  = "assets/laser.wav";
    audioLaser.appendChild(src1);

    var audioLaser2  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mpeg";
    src1.src  = "assets/laser.wav";
    audioLaser2.appendChild(src1);

    var audioLaser3  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mpeg";
    src1.src  = "assets/laser.wav";
    audioLaser3.appendChild(src1);

    var audioLaser4  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mpeg";
    src1.src  = "assets/laser.wav";
    audioLaser4.appendChild(src1);

    var audioLaser5  = new Audio();
    var src1  = document.createElement("source");
    src1.type = "audio/mpeg";
    src1.src  = "assets/laser.wav";
    audioLaser5.appendChild(src1);

    var audioExplosion  = new Audio();
    var src2  = document.createElement("source");
    src2.type = "audio/mpeg";
    src2.src  = "assets/explosion.wav";
    audioExplosion.appendChild(src2);

    var audioExplosion2  = new Audio();
    var src3  = document.createElement("source");
    src3.type = "audio/mpeg";
    src3.src  = "assets/explosion.wav";
    audioExplosion2.appendChild(src3);

    var audioExplosion3  = new Audio();
    var src3  = document.createElement("source");
    src3.type = "audio/mpeg";
    src3.src  = "assets/explosion.wav";
    audioExplosion3.appendChild(src3);

    var audioExplosion4  = new Audio();
    var src3  = document.createElement("source");
    src3.type = "audio/mpeg";
    src3.src  = "assets/explosion.wav";
    audioExplosion4.appendChild(src3);

    var audioExplosion5  = new Audio();
    var src3  = document.createElement("source");
    src3.type = "audio/mpeg";
    src3.src  = "assets/explosion.wav";
    audioExplosion5.appendChild(src3);

	var gamehardness = 0;

    var audioSelector = 0;
    var audioSelector_Laser = 0;
    var init = true;
    var splicedHidro = false;
    var splicedEnemy = false;
    var splicedEnemyMissile = false;
    var splicedHeroMissile = false;
    var counter = 0;
    var counter2 = 0;
    var enemySelector=0;
    var hero = {
        left: 375,
        top: 450
    };
    var missiles = [];
    var hidros = [];
    var enemies = [];
    var missiles_enemy = [];
    var isGameOver = false;
    var time = true;
    var keyDownUp = false;
    var keyDownRight = false;
    var keyDownLeft = false;
    var keyDownDown = false;

    document.onkeyup = function(e) {
      if (e.keyCode === 38 || e.keyCode === 87) {
        // Up
        keyDownUp = false ;
      }
      if (e.keyCode === 37 || e.keyCode === 65) {
          // Left
          keyDownLeft = false;

      }
      if (e.keyCode === 40 || e.keyCode === 83) {
          // Down
          keyDownDown = false;
      }
      if (e.keyCode === 39 || e.keyCode === 68) {
          // Right
          keyDownRight = false;
      }
    }

      setInterval(function(){
        if(isGameOver || !time){}
        else{
          if(keyDownUp){
            if(hero.top > 5){
                hero.top = hero.top - 3;
              }
            }
          if(keyDownLeft){
                if(hero.left>5)
                        hero.left = hero.left - 3;
            }

          if(keyDownDown){
                // Down
                if(hero.top < 450)
                        hero.top = hero.top + 3;
            }
          if(keyDownRight){
                // Right
                if(hero.left < 745)
                    hero.left = hero.left + 3;
          }
        }
        drawHero();
      },20);

    document.onkeydown = function(e) {
        if (e.keyCode === 82){
                location.reload();
        }
        if(isGameOver || !time){}
        else{
            if (e.keyCode === 38 || e.keyCode === 87) {
              // Up
              keyDownUp = true ;
            }
           
            if (e.keyCode === 40 || e.keyCode === 83) {
                // Down
                keyDownDown = true;
            }
            if (e.keyCode === 39 || e.keyCode === 68) {
                // Right
                keyDownRight = true;
            }
            if (e.keyCode === 80){
                if(time){
                    time = false;
                }else{
                    time = true;
                }
            }
            
             if (e.keyCode === 37 || e.keyCode === 65) {
                // Left
                keyDownLeft = true;

            }

            if (e.keyCode === 32 || e.keyCode === 13) {
                // Spacebar (fire)
                e.preventDefault(); //to avoid button control
                if(audioSelector_Laser%5==0)
                    audioLaser.play();
                if(audioSelector_Laser%5==1)
                    audioLaser2.play();
                if(audioSelector_Laser%5==2)
                    audioLaser3.play();
                if(audioSelector_Laser%5==3)
                    audioLaser4.play();
                if(audioSelector_Laser%5==4)
                    audioLaser5.play();
                audioSelector_Laser++;
                missiles.push({
                    left: hero.left + 5,
                    top: hero.top - 45
                });
                drawMissiles()
            }
        }
    }

    function drawHero() {
        document.getElementById('hero').style.left = hero.left + 'px';
        document.getElementById('hero').style.top = hero.top + 'px';
    }

    function drawMissiles() {
        document.getElementById('missiles').innerHTML = ""
        for(var i = 0 ; i < missiles.length ; i++ ) {
            document.getElementById('missiles').innerHTML += `<div class='missile1' style='left:${missiles[i].left}px; top:${missiles[i].top}px'></div>`;
        }
    }

    function drawHidros() {
        document.getElementById('hidros').innerHTML = ""
        for(var i = 0 ; i < hidros.length ; i++ ) {
            document.getElementById('hidros').innerHTML += `<div class='hidro1' style='left:${hidros[i].left}px; top:${hidros[i].top}px'></div>`;
        }
    }

    function moveMissiles() {
        for(var i = 0 ; i < missiles.length ; i++ ) {
            missiles[i].top = missiles[i].top - 8
        }
    }

    function moveMissiles_enemy() {
        for(var i = 0 ; i < missiles_enemy.length ; i++ ) {
            missiles_enemy[i].top = missiles_enemy[i].top + 8
        }
    }

    function drawEnemies() {
        document.getElementById('enemies').innerHTML = ""
        for(var i = 0 ; i < enemies.length ; i++ ) {

            document.getElementById('enemies').innerHTML += `<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;

        }
        counter2++;
        if(counter2>20){
            for(var i = 0 ; i < enemies.length ; i++ ) {
                if(Math.floor(Math.random() * 2)==i)
                    missiles_enemy.push({left: enemies[i].left + 30, top: enemies[i].top + 15});
            }
            counter2=0;
        }
    }

    function drawMissiles_enemy() {
        document.getElementById('missiles_enemy').innerHTML = ""
        for(var i = 0 ; i < missiles_enemy.length ; i++ ) {
            document.getElementById('missiles_enemy').innerHTML += `<div class='missile_enemy' style='left:${missiles_enemy[i].left}px; top:${missiles_enemy[i].top}px'></div>`;
        }
    }

    function moveEnemies() {
        for(var i = 0 ; i < enemies.length ; i++ ) {
            enemies[i].top = enemies[i].top + 3;
        }
    }

    function collisionDetection() {
        splicedHidro = true;
        splicedEnemy = true;
        splicedEnemyMissile = true;
        splicedHeroMissile = true;
        for (var hidrof = 0; hidrof < hidros.length; hidrof++) {
            if( hero.left + 45>= hidros[hidrof].left  &&
                hero.left <= hidros[hidrof].left + 5  &&
                hero.top <= (hidros[hidrof].top) + 20 &&
                hero.top + 50 >= hidros[hidrof].top){
                  if(splicedHidro){
                    hidros.splice(hidrof, 1);
                    h2Degree.value += 10;
                    splicedHidro = false;
                  }
            }

        }
        for (var missile_enemy = 0; missile_enemy < missiles_enemy.length; missile_enemy++) {
            if(
                missiles_enemy[missile_enemy].left >= hero.left  &&
                missiles_enemy[missile_enemy].left <= (hero.left + 45)  &&
                missiles_enemy[missile_enemy].top <= (hero.top + 50)  &&
                missiles_enemy[missile_enemy].top + 10 >= hero.top
                ) {
                  if(splicedEnemyMissile){
                    missiles_enemy.splice(missile_enemy, 1);
                    splicedEnemyMissile = false;
                  }
                    health.value -= 10;
                    if(audioSelector%5==0)
                        audioExplosion.play();
                    if(audioSelector%5==1)
                        audioExplosion2.play();
                    if(audioSelector%5==2)
                        audioExplosion3.play();
                    if(audioSelector%5==3)
                        audioExplosion4.play();
                    if(audioSelector%5==4)
                        audioExplosion5.play();
                    audioSelector++;
            }
            if(splicedEnemyMissile){
              if(missiles_enemy[missile_enemy].top > 450){
                missiles_enemy.splice(missile_enemy, 1);
                splicedEnemyMissile = false;
              }
            }
        }
        for (var enemy = 0; enemy < enemies.length; enemy++) {
            if(enemies[enemy].top > 430){
              if(splicedEnemy){
                    enemies.splice(enemy, 1);
                    splicedEnemy = false;
              }
              health.value -= 20;
              if(audioSelector%5==0)
                  audioExplosion.play();
              if(audioSelector%5==1)
                  audioExplosion2.play();
              if(audioSelector%5==2)
                  audioExplosion3.play();
              if(audioSelector%5==3)
                  audioExplosion4.play();
              if(audioSelector%5==4)
                  audioExplosion5.play();
              audioSelector++;
            }
            if(enemies.indexOf(enemies[enemy]) !== -1) {
              if (
                      hero.left + 50 >= enemies[enemy].left  &&
                      hero.left <= (enemies[enemy].left + 60)  &&
                      hero.top <= (enemies[enemy].top + 50)  &&
                      hero.top >= enemies[enemy].top - 50
                  ) {
                      if(splicedEnemy){
                          enemies.splice(enemy, 1);
                          splicedEnemy = false;
                      }
                      health.value -= 30;
                      if(audioSelector%5==0)
                          audioExplosion.play();
                      if(audioSelector%5==1)
                          audioExplosion2.play();
                      if(audioSelector%5==2)
                          audioExplosion3.play();
                      if(audioSelector%5==3)
                          audioExplosion4.play();
                      if(audioSelector%5==4)
                          audioExplosion5.play();
                      audioSelector++;
                  }
              }
            for (var missile = 0; missile < missiles.length; missile++) {
              if(enemies.indexOf(enemies[enemy]) !== -1) {
                  if (
                      missiles[missile].left + 30 >= enemies[enemy].left  &&
                      missiles[missile].left <= (enemies[enemy].left + 60)  &&
                      missiles[missile].top <= (enemies[enemy].top + 50)  &&
                      missiles[missile].top >= enemies[enemy].top
                  ) {
                      if(Math.floor(Math.random() * 2) == 1){
                          hidros.push({
                              left: enemies[enemy].left + 30,
                              top: enemies[enemy].top + 15
                          });
                      }
                      if(splicedEnemy){
                            enemies.splice(enemy, 1);
                            splicedEnemy = false;
                      }
                      if(splicedHeroMissile){
                        missiles.splice(missile, 1);
                        splicedHeroMissile = false;
                      }
                      if(audioSelector%5==0)
                          audioExplosion.play();
                      if(audioSelector%5==1)
                          audioExplosion2.play();
                      if(audioSelector%5==2)
                          audioExplosion3.play();
                      if(audioSelector%5==3)
                          audioExplosion4.play();
                      if(audioSelector%5==4)
                          audioExplosion5.play();
                      audioSelector++;
                  }
                }
            }
        }
        for (var missile = 0; missile < missiles.length; missile++) {
            if(missiles[missile].top < 10)
              if(splicedHeroMissile){
                missiles.splice(missile, 1);
                splicedHeroMissile = false;
              }
        }
    }

    var sound = true;
    var popupNumber = 0;
    var popupCounter = 0;
    var popupNotShow = true;
    var yazilar = ["Su kullanımını daha verimli hale getirebilirsek evlerde %45 oranında tasarruf sağlayabiliriz. Örneğin dişimizi fırçalarken suyu kapatabilir ve duşumuzu kısa tutabiliriz :)",
    "Biliyor musun? Dünyanın %70’i su ile kaplı ama bunun sadece %2,5’u taze ve sadece %1’i insan erişimine açık :(",
     "Eğer dünya üzerindeki herkes enerji tasarruflu ampul kullansa her yıl 105 milyar Euro tasarruf edilebilir ",
      "Geçtiğimiz yüzyılda su tüketimi nüfusun iki katı oranda arttı.",
       "Dünyanın daha fazla hasta olmaması için karbondioksit emisyonunun 2030’da %45 oranında düşmesi ve 2050’de sıfıra ulaşması gerekiyor."];

    function myFunction() {
       var popup = document.getElementById("myPopup");
       popup.textContent = yazilar[popupNumber%yazilar.length];
       popupNumber++;
       popup.classList.toggle("show");

    }

    function pause() {
        time = false;
    }

    function resume() {
        time = true;
    }

    function restart() {
        location.reload();
    }

    function gameLoop() {
        setTimeout(gameLoop, 75);
        if(time){
            popupCounter++;
            if(popupCounter>330){
                if(popupNotShow){}
                else{
                    myFunction();
                    popupNotShow = true;
                    popupCounter = 0;
                }
            }
            collisionDetection();
            counter++;
            gamehardness++;
            if(counter*gamehardness/500 >50){
                enemies.push({left: Math.floor(Math.random() * 730), top: 0 });
                counter=0;
                if(popupNotShow){
                    myFunction();
                    popupNotShow = false;
                }
            }
            h2Degree.value -= 0.1;
            if(h2Degree.value<=0 || health.value <=0){
                document.getElementById('gameover').style.visibility = "visible";
                isGameOver = true;
            }
            drawMissiles_enemy();
            moveMissiles_enemy();
            moveMissiles();
            drawMissiles();
            drawHidros();
            moveEnemies();
            drawEnemies();



      }
    }

    gameLoop();

    $("#volume").slider({
      	min: 0,
      	max: 100,
      	value: 50,
    		range: "min",
      	slide: function(event, ui) {
        	setVolume(ui.value / 200);
            if(ui.value>0){
                document.getElementById("sound").style.backgroundImage = "url('assets/sound.png')";
                sound = true;
            }
            if(ui.value === 0){
                document.getElementById("sound").style.backgroundImage = "url('assets/nosound.png')";
                sound = false;
            }
      	}
    	});
        
        


      $("#volume .ui-slider-handle").unbind('keydown'); //disable keyboard actions

    

      function setVolume(myVolume) {
          audioLaser.volume = myVolume;
          audioLaser2.volume = myVolume;
          audioLaser3.volume = myVolume;
          audioLaser4.volume = myVolume;
          audioLaser5.volume = myVolume;
          audioExplosion.volume = myVolume;
          audioExplosion2.volume = myVolume;
          audioExplosion3.volume = myVolume;
          audioExplosion4.volume = myVolume;
          audioExplosion5.volume = myVolume;

      	}

        function soundOnOff() {
          if(sound){
            $("#volume").slider({
              	min: 0,
              	max: 100,
              	value: 0,
            		range: "min",
              	slide: function(event, ui) {
                    setVolume(ui.value / 200);
                    if(ui.value>0){
                        document.getElementById("sound").style.backgroundImage = "url('assets/sound.png')";
                        sound = true;
                    }
                    if(ui.value === 0){
                        document.getElementById("sound").style.backgroundImage = "url('assets/nosound.png')";
                        sound = false;
                    }
              	}
            	});
            $("#volume .ui-slider-handle").unbind('keydown'); //disable keyboard actions
            document.getElementById("sound").style.backgroundImage = "url('assets/nosound.png')";
            sound = false;
            setVolume(0);
          }else{
            $("#volume").slider({
              	min: 0,
              	max: 100,
              	value: 50,
            		range: "min",
              	slide: function(event, ui) {
                    setVolume(ui.value / 200);
                    if(ui.value>0){
                        document.getElementById("sound").style.backgroundImage = "url('assets/sound.png')";
                        sound = true;
                    }
                    if(ui.value === 0){
                        document.getElementById("sound").style.backgroundImage = "url('assets/nosound.png')";
                        sound = false;
                    }
              	}
            	});
            $("#volume .ui-slider-handle").unbind('keydown'); //disable keyboard actions
            setVolume(0.25);
            document.getElementById("sound").style.backgroundImage = "url('assets/sound.png')";
            sound = true;
          }
        }

        if(init){
          init = false;
          setVolume(0.25);
        }
