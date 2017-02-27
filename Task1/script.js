(function () {

  function modifyPage() {
    var elemPage = document.querySelectorAll('.thing');

    for (i = 0; i < elemPage.length; i++) {
      var itemElem = elemPage[i];
      var link = document.createElement('a');
      var btn = document.createElement('a');

      renderLink();
      renderButtonDownload();
      styleGlobal(itemElem);
      styleThisButton(link);
      styleThisButton(btn);
    }

    function renderLink() {
      link.href = getLinkPost();
      link.className = 'dynamic-added-link';
      link.textContent = 'view';
      link.target = '_blank';
      itemElem.appendChild(link);
    }

    function renderButtonDownload() {
      btn.href = getImage();
      btn.setAttribute('download', '');
      btn.className = 'dynamic-added-download-btn';
      btn.textContent = 'download';
      itemElem.appendChild(btn);
    }

    function getLinkPost() {
      return itemElem.querySelector('a.may-blank').href;
    }

    function getImage() {
      return itemElem.querySelector('a.thumbnail img').src;
    }

    function styleThisButton(elem) {
      elem.style.cssText = "color: #000; \
        background-color: #fff; \
        display: inline-block; \
        width: 70px; \
        height: 20px; \
        margin-top: 15px; \
        margin-right: 15px; \
        height: 20px; \
        line-height: 20px; \
        border:1px solid #000; \
        text-align: center; \ ";
    }

    function styleGlobal(e) {
      e.querySelector('a.title').style.color = '#000';
      e.style.padding = '5px';
      e.style.background = '#fff';

    }
  }

  modifyPage();
})();
