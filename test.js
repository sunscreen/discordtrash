	var defmatrix=[

	{id:0,internal_name: 'Timestamp',defname: 'Timestamp (ms)'},

	{id:1,internal_name: 'Accel X',defname: 'Accel X ()'},
	{id:2,internal_name: 'Accel Y',defname: 'Accel Y ()'},
	{id:3,internal_name: 'Accel Z',defname: 'Accel Z ()'},
	{id:4,internal_name: 'Analog 1',defname: 'Analog 1 ()'},
	{id:5,internal_name: 'Analog 2',defname: 'Analog 2 ()'},
	{id:6,internal_name: 'Analog 3',defname: 'Analog 3 ()'},
	{id:7,internal_name: 'Analog 4',defname: 'Analog 4 ()'},	
	{id:8,internal_name: 'Battery',defname: 'Battery ()'},
	{id:9,internal_name: 'Calculated load',defname: 'Calculated load ()'},
	{id:10,internal_name: 'Coolant Temp',defname: 'Coolant Temp ()'},
	{id:11,internal_name: 'Econ avg 1',defname: 'Econ avg 1 ()'},
	{id:12,internal_name: 'Econ avg 2',defname: 'Econ avg 2 ()'},
	{id:13,internal_name: 'Economy',defname: 'Economy ()'},
	{id:14,internal_name: 'Engine Load',defname: 'Engine Load ()'},
	{id:15,internal_name: 'Engine Speed',defname: 'Engine Speed ()'},
	{id:16,internal_name: 'Fuel Inj',defname: 'Fuel Inj ()'},
	{id:17,internal_name: 'Fuel usage',defname: 'Fuel usage ()'},
	{id:18,internal_name: 'GPS Altitude',defname: 'GPS Altitude ()'},
	{id:19,internal_name: 'GPS Latitude',defname: 'GPS Latitude ()'},
	{id:20,internal_name: 'GPS Longitude',defname: 'GPS Longitude ()'},
	{id:21,internal_name: 'GPS North',defname: 'GPS North ()'},
	{id:22,internal_name: 'GPS Speed',defname: 'GPS Speed ()'},
	{id:23,internal_name: 'IACV',defname: 'IACV ()'},
	{id:24,internal_name: 'Ignition Angle',defname: 'Ignition Angle ()'},
	{id:25,internal_name: 'Knock Current',defname: 'Knock Current ()'},
	{id:26,internal_name: 'Lambda 1',defname: 'Lambda 1 ()'},
	{id:27,internal_name: 'Lambda 2',defname: 'Lambda 2 ()'},
	{id:28,internal_name: 'Lambda Int 1',defname: 'Lambda Int 1 ()'},
	{id:29,internal_name: 'Lambda Int 2',defname: 'Lambda Int 2 ()'},
	{id:30,internal_name: 'MAF Voltage',defname: 'MAF Voltage ()'},
	{id:31,internal_name: 'Mass Airflow',defname: 'Mass Airflow ()'},
	{id:32,internal_name: 'Oil pressure',defname: 'Oil pressure ()'},
	{id:33,internal_name: 'Oil temperature',defname: 'Oil temperature ()'},
	{id:34,internal_name: 'PID',defname: 'PID ()'},
	{id:35,internal_name: 'Speed',defname: 'Speed ()'},
	{id:36,internal_name: 'TPS',defname: 'TPS ()'},
	{id:37,internal_name: 'TPS Volt',defname: 'TPS Volt ()'},
	{id:38,internal_name: 'Target V',defname: 'Target V ()'},
	{id:39,internal_name: 'Trip 1',defname: 'Trip 1 ()'},
	{id:40,internal_name: 'Trip 2',defname: 'Trip 2 ()'},
	{id:41,internal_name: 'Vanos',defname: 'Vanos ()'},
	{id:42,internal_name: 'WBO',defname: 'WBO ()'}
	
	];
	
var testcount=0;
	function remap(remapobj) {
	optimized_jsonarray[testcount]=[];
	defmatrix.forEach(function(obj) { 
	optimized_jsonarray[testcount][obj.id]=remapobj[obj.defname];
	});
	console.log(optimized_jsonarray[testcount]);
	testcount++;
	
	}
