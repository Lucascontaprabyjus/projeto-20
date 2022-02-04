
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plano  
var retangulo, circulo, square

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}
	var rectangle_options={

		restitution: 0.7,
		frictionAir: 0.02

	}

	var circle_options={

		restitution: 0.9,
		frictionAir: 0.02

	}

    var square_options={

		restitution: 0.6,
		frictionAir: 0.01

	}


	plano=Bodies.rectangle(300, 600, 600, 10, plane_options)
    World.add(world, plano)

	retangulo=Bodies.rectangle(500, 20, 90, 70, rectangle_options )
    World.add(world, retangulo)

	quadrado=Bodies.rectangle(400, 20, 90, 90, square_options )
    World.add(world, quadrado)

	circulo=Bodies.circle(300, 20, 90, circle_options )
    World.add(world, circulo)





	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  Engine.update(engine)

  rect(quadrado.position.x, quadrado.position.y, 90, 90)
  ellipse(circulo.position.x, circulo.position.y, 90)
  rect(retangulo.position.x, retangulo.position.y, 90, 70)
  rect(plano.position.x, plano.position.y, 600, 10)
}



