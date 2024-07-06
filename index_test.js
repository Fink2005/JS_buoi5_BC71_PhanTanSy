function sub() {
    var doi = document.getElementById("name").value 
    
    if (doi.includes("tr")) {
        var replace =  +doi.replace(/tr/g, "000000" ) 

        replace = parseFloat(replace)
        return replace
    }
    if (doi.includes("e")) {
        replace = +doi
        replace = parseFloat(replace)
        return replace
    }

}
function change() {
   

    var changed = sub() ;
    var addition = changed  + 100
    document.querySelector("#result").innerHTML = addition.toLocaleString();
}