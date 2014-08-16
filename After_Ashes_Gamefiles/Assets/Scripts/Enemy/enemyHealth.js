#pragma strict

var health: float = 10;

function Start () {

}

function Update () {
	if(health < 0 || health == 0)
	{
		Destroy(gameObject, 0);
	}
}

function ApplyDamage (damage : float) {
	health -= damage;
}