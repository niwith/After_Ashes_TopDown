#pragma strict

var health: float = 10;

function Start () {

}

function Update () {
	
}

function ApplyDamage (damage : float) {
	health -= damage;
}