var bullet, wall, weight, damage, thick;
var speed;

function setup() {
    createCanvas(1600, 400);
    speed = random(200, 321);
    weight = random(30, 52);
    thick = random(22, 83);

    bullet = createSprite(100, 200, 50, 10);
    bullet.velocityX = speed;
    bullet.shapeColor = "white";
    wall = createSprite(1400, 200, thick, 200);
    
}

function draw() {
    background(0,0,0);
    drawSprites();
    if (bullet.collide(wall)) {
        bullet.velocityX = 0;
        damage = (0.5 * weight * speed * speed) / (thick * thick * thick);
        text("damage:" + Math.round(damage), 1300, 50);
        if (damage < 3.69) {
            wall.shapeColor = "green";
        }
        else if (damage > 12.42) {
            wall.shapeColor = "red";
        }
        else {
            wall.shapeColor = "yellow";
        }
    }
}