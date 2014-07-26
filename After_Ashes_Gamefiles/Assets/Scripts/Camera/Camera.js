#pragma strict

//zoom variables
var zoom: float = 10;
var zoommin: float = 1;
var zoommax: float = 100;

function Start () {

}

function Update () {
	camerazoomish();
}

function camerazoomish () {
	zoom -= Input.GetAxis("Mouse ScrollWheel") * 10;	
	if(zoom < zoommin)
	{
		zoom = zoommin;
	} 
	
	if(zoom > zoommax)
	{
		zoom = zoommax;
	}
	camera.orthographicSize = zoom;
}