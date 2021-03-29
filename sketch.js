var hexa1; 


function preload(){ 

} 

function setup(){ 
var canvas = createCanvas(1200,400); 

hexa1= new Hexagon (1200,700,20,20); 


} 

function draw(){ 
    background("orange");
    Engine.update(engine);
 
 hexa1.display(); 
} 