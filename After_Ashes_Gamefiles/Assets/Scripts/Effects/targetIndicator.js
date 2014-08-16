#pragma strict

var target: Transform;
var shootingscript : shooting;

function Update () {
	if(shootingscript.target)
	{
		transform.position = shootingscript.target.position;
		particleSystem.enableEmission = true;
	}
	else
	{
		particleSystem.enableEmission = false;
	}
	
	if(shootingscript.percenttohit == shootingscript.max)
	{
		particleSystem.startColor = Color(255, 0, 0);
	}
	else
	{
		particleSystem.startColor = Color(0, 0, 255);
	}
}