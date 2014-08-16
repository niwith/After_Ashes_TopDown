#pragma strict

var target : GameObject;
var ypos : float;

function Update()
{
	transform.position.y = ypos;
	transform.position.x = target.transform.position.x;
	transform.position.z = target.transform.position.z;
}