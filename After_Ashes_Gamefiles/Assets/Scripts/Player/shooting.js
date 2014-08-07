#pragma strict

var damage: float = 4;
var targetingDist: float = 50;
var fireDist: float = 50;
var target: Transform;
var Distance: float = 0;
var percenttohit: float = 0;
var max: float = 100;
var chargerate: float = 10;
var whm: float = 1; 
var wrm: float = 10;
var wfr: float = 1;
var plf: float = 100;

var csweapon: int = 1;


function Update () {
	switch(csweapon){
	case 1: //pistol
		whm = 0.01;
		wrm = 0.5;
		wfr = 1;
		plf = 25;
		damage = 5;
	break;
	case 2: //assult rifle
		whm = 0.008;
		wrm = 0.8;
		wfr = 0.5;
		plf = 80;
		damage = 10;
	break;
	case 3: //smg
		whm = 0.05;
		wrm = 0.2;
		wfr = 0.1;
		plf = 10;
		damage = 5;
	break;
	}

	if(target)
	{
		max = -whm*(Vector3.Distance(this.transform.position, target.transform.position))+100;
		if(max > 100)
		{
			max = 100;
		}
		
		chargerate = Mathf.Pow(0.5, Vector3.Distance(this.transform.position, target.transform.position) * wrm * 0.1) * 100;
		if(chargerate > 1000)
		{
			chargerate = 1000;
		}
	}
	if(Input.GetMouseButton(1) && target)
	{
		var hit : RaycastHit;
		if (Physics.Linecast (transform.position, target.position, hit))
		{
			Debug.DrawLine (transform.position, hit.point, Color.cyan, 0.5);
			if(hit.transform == target)
			{
				if(percenttohit < max)
				{
					percenttohit += chargerate * Time.deltaTime;
				}
				else
				{
					percenttohit = max;
				}
			}
			else
			{
					percenttohit = 0;
			}
		}
		
		if(Input.GetMouseButtonDown(0))
		{
			if(Random.Range(0, 100) < percenttohit)
			{
				target.SendMessage("ApplyDamage", damage, SendMessageOptions.DontRequireReceiver);
			}
			percenttohit -= plf;
			if(percenttohit < 0)
			{
				percenttohit = 0;
			}
		}
	}
	else
	{
		if(Input.GetMouseButton(0))
		{	
			var hitTwo : RaycastHit;
			var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
			if (Physics.Raycast (ray, hitTwo, 100)) {
				if(hitTwo.transform.tag == "targetable")
				{
					target = hitTwo.transform;
				}
			}
		}
	}
	if(Input.GetMouseButtonUp(1))
	{
		percenttohit = 0;
	}
}	