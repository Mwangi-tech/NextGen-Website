const cameraFeed = document.getElementById("cameraFeed");

navigator.mediaDevices.getUserMedia((video: true))
.then(stream =>  {
    cameraFeed.srcObject = stream;
})
.catch(error =>  {
    console.error('Error accessing camera:', error);
})





const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');


menu.addEventListener('click',function()  {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

});