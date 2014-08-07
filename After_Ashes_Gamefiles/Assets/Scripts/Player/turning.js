#pragma strict

var target: Transform;
var shootingscript : shooting;
var v_diff: Vector3;
var atan2: float;

function Awake () {
	shootingscript = GetComponent("shooting");
}

function Update () {
	if(Input.GetMouseButton(1))
	{
		v_diff = (target.position - transform.position);    
        atan2 = Mathf.Atan2 ( v_diff.y, v_diff.x );
        transform.rotation = Quaternion.Euler(0f, 0f, atan2 * Mathf.Rad2Deg );
    }
    else
    {
    	var objectPos = Camera.main.WorldToScreenPoint(transform.position);
		var dir = Input.mousePosition - objectPos; 
		transform.rotation = Quaternion.Euler (Vector3(0,0,Mathf.Atan2 (dir.y,dir.x) * Mathf.Rad2Deg));
    }
    target = shootingscript.target;
}  