﻿#pragma strict

//rotation variables
var rotate_speed: float = 20;

function Start () {

}

function Update() {
		transform.RotateAround (Vector3.zero, Vector3.up, rotate_speed * Time.deltaTime);
}