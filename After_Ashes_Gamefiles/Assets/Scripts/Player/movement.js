#pragma strict

//speed vars 
var fwSpeed: float = 10;
var spSpeed: float = 15;
var bkSpeed: float = 5;
var stSpeed: float = 10;

//Sprinting vars
var staminar: float = 100;
var maxstaminar: float = 100;
var drain_rate: float = 1;
var regen: boolean = false;
var regenrate: float = 10;
var timer: float = 0;
var timetoregen: float = 10;

//Collision vars
var coldist: float = 0.1;


function Update ()
{
	if(Input.GetKey(KeyCode.W))
	{
		var fwd = transform.TransformDirection (Vector3.right);
		if (!Physics.Raycast (transform.position, fwd, coldist)) {
			if(Input.GetKey(KeyCode.LeftShift) && staminar > 0)
			{
				transform.Translate(Vector2.right * Time.deltaTime * spSpeed);
				staminar -= drain_rate * Time.deltaTime;
				regen = false;
				timer = 0;
			}
			else
			{
				transform.Translate(Vector2.right * Time.deltaTime * fwSpeed);
			}
		}
	}
	
	if(Input.GetKey(KeyCode.S))
	{
		var back = transform.TransformDirection (-Vector3.right);
		if (!Physics.Raycast (transform.position, back, coldist) && !Physics.Raycast (transform.position, back, coldist)) {
			transform.Translate(-Vector2.right * Time.deltaTime * bkSpeed);
		}
	}
	
	if(Input.GetKey(KeyCode.A))
	{
		var left = transform.TransformDirection (Vector3.up);
		if (!Physics.Raycast (transform.position, left, coldist)) {
			transform.Translate(Vector2.up * Time.deltaTime * stSpeed);
		}
	}
	
	
	if(Input.GetKey(KeyCode.D))
	{
		var right = transform.TransformDirection (-Vector3.up);
		if (!Physics.Raycast (transform.position, right, coldist)) {
			transform.Translate(-Vector2.up * Time.deltaTime * stSpeed);
		}
	}
}

function LateUpdate () {
	if(regen && staminar < maxstaminar)
	{
		staminar += regenrate * Time.deltaTime;		
	}
	
	if(!regen && staminar < maxstaminar)
	{
		if(timer >= timetoregen)
		{
			regen = true;
			timer = 0;
		}
		else
		{
			timer += Time.deltaTime;
		}
	}
}