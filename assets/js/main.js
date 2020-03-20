function fillStatistics() {
  fetch("https://pts.bbsnetwork.club/api/v1/data?chart=system.cpu&after=-1")
    .then(response => response.json())
    .then(data => processCpuData(data));

  fetch("https://pts.bbsnetwork.club/api/v1/data?chart=system.ram&after=-1")
    .then(response => response.json())
    .then(data => processRamData(data));
}

function processCpuData(data) {
  let total = 0;
  let dataArray = data.data[0];

  total += dataArray[3];
  total += dataArray[4];
  total += dataArray[6];
  total += dataArray[7];
  total += dataArray[9];

  showCpuTotal(total);
}

function processRamData(data) {
  let free = 0;
  let used = 0;
  let total = 0;
  let dataArray = data.data[0];

  free += dataArray[1];
  used += dataArray[2];
  free += dataArray[3];
  used += dataArray[4];

  total = (used / (free + used)) * 100;

  showRamTotal(total);
}

function showCpuTotal(total) {
  document.getElementById("progessbar-cpu").style.width = total + "%";
}

function showRamTotal(total) {
  document.getElementById("progessbar-ram").style.width = total + "%";
}

fillStatistics();
