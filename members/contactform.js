var select = document.getElementById("select_edu");
var options = ["B.tech", "M.tech", "Bsc", "Msc", "MBBS"];

for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}
var select = document.getElementById("caste");
var options = ["Modikollu", "Namadarlu"];

for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}

var select = document.getElementById("subcaste");
var options = ["BC-A", "BC-B", "BC-C", "BC-D", "BC-E",];

for (var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}


