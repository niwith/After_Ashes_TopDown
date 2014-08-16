#pragma strict

var target: Transform;
var shootingscript : shooting;
var v_diff: Vector3;
var atan2: float;

function Awake () {
	shootingscript = GetComponent("shooting");
}

function Update () {
	if(Input.GetMouseButton(1) && target)
	{
		v_diff = (target.position - transform.position);    
        atan2 = Mathf.Atan2 ( v_diff.x, v_diff.z );
        transform.rotation = Quaternion.Euler(90f, atan2 * Mathf.Rad2Deg - 90, 0f );
    }
    else
    {
    	var objectPos = Camera.main.WorldToScreenPoint(transform.position);
		var dir = Input.mousePosition - objectPos; 
		transform.rotation = Quaternion.Euler(90f, -(Mathf.Atan2(dir.y,dir.x) * Mathf.Rad2Deg), 0f);
    }
    if(shootingscript.target)
    {
    	target = shootingscript.target;
    }
}  