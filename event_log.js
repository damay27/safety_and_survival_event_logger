var mayday_events = [];
var air_alarm_events = [];

function get_current_time() {
	var now = new Date();
	hours = now.getHours().toString().padStart(2, '0');
	minutes = now.getMinutes().toString().padStart(2, '0');
	seconds = now.getSeconds().toString().padStart(2, '0');
	return hours+":"+minutes+":"+seconds;
}

function mayday_button() {
	mayday_events.push(get_current_time());
	document.getElementById('mayday_count').innerHTML = mayday_events.length;
	console.log(mayday_events);
}

function air_alarm_button() {
	air_alarm_events.push(get_current_time());
	document.getElementById('air_alarm_count').innerHTML = air_alarm_events.length;
	console.log(air_alarm_events);
}


function generate_csv() {
	var name = document.getElementById('name_text_box').value
	var csv_string = "Mayday,Air Emergency\n"
	var count = Math.max(mayday_events.length, air_alarm_events.length);
	for (var i = 0; i < count; i++) {
		if (i < mayday_events.length) {
			csv_string += mayday_events[i] + ",";
		}
		if (i < air_alarm_events.length) {
			csv_string += air_alarm_events[i] + ",";
		}
		csv_string += "\n"
	}
	console.log(csv_string)

	var file_blob = new Blob([csv_string], { type: 'text/plain' });
	var a = document.createElement('a');
	a.download = name+".csv";
	a.href = window.URL.createObjectURL(file_blob);
	window.open(a, "_blank")
}

