function getProducts() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/test", false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + ": " + xhr.statusText);
    } else {
        alert(xhr.responseText);
    }

}
getProducts();
