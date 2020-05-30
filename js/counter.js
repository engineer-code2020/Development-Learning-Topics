var id="top_code"
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    
    }
};
xhttp.open("POST", "https://breaktxt.000webhostapp.com/addView/", true);
xhttp.onload=function(){

}
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("tableName="+id);
