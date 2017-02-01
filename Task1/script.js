function modifyPage() {
    var elemets = document.getElementsByClassName("thing");
    for (i = 0; i < elemets.length; i++) {
        var elem = elemets[i];
        var button = document.createElement('a');
        button.textContent = "permalink";
        button.className = "added-link";
        button.target = "_blank";
        button.href = getLink();
        elem.appendChild(linkButton);
    }
    function getLink() {
        return elem.querySelector('a.may-blank').href;

    }
};
modifyPage()



