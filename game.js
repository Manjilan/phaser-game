var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{

    this.load.setBaseURL('http://labs.phaser.io');
    this.load.image('road', 'assets/tilemaps/tiles/muddy-ground.png');
    this.load.image('car', 'assets/sprites/car90.png');

}

function create (){
  track = this.add.image(50, 300, 'road');
  track = this.add.image(170, 300, 'road');
  track = this.add.image(290, 300, 'road');
  track = this.add.image(410, 300, 'road');
  track = this.add.image(530, 300, 'road');
  track = this.add.image(650, 300, 'road');
  track = this.add.image(770, 300, 'road');
  player = this.add.sprite(12, 300, 'car');
  
  this.input.keyboard.on("keyup_RIGHT", function(e){
    player.x +=15;
  }, this);
  this.input.keyboard.on("keyup_LEFT", function(e){
    player.x -=15;
  }, this);

  this.text = this.add.text(90, 150, "Press Right or Left arrow!!!", {font: "50px Impact" });

}
