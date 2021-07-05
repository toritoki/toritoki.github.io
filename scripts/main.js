let myImage = document.querySelector('img');

myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === 'images/macbook.jpg') {
            myImage.setAttribute('src','images/developer.jpg');
        } else {
            myImage.setAttribute('src','images/macbook.jpg');
        }
}