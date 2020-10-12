const mainBlock = document.getElementById("main-block");

function loadUrl() {

  while (mainBlock.firstChild) mainBlock.removeChild(mainBlock.firstChild);
  let yearFrom = "yearFrom=" + document.getElementById("yearFrom").value;
  let yearTo = "&yearTo=" + document.getElementById("yearTo").value;
  let continuou_recordFrom = "&continuou_recordFrom=" + document.getElementById("continuou_recordFrom").value;
  let continuou_recordTo = "&continuou_recordTo=" + document.getElementById("continuou_recordTo").value;
  let _url = "http://18.178.166.9:5000/continuous-records/match/win/?"+yearFrom+yearTo+continuou_recordFrom+continuou_recordTo;
  
  let xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
      let res = JSON.parse(xhttp.responseText);
      console.log(res)
      // var hitcount = res.total_hit_count;
      for (let index = 0; index < res.data.length; index++) {
        let element = res.data[index];
        let node = document.createElement("div");
        node.innerHTML = element[1]+"年の"+element[4]+"節〜"+element[5]+"節　"+element[3]+"が"+element[6]+"連勝";
        mainBlock.appendChild(node);
      }
    }
  };
  // データ取得開始
  xhttp.open("GET", _url, true);
  xhttp.send();
}