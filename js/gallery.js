function eventmanager(a) {
    switch (a) {
        case 0:
            for (var i = 0; i < dandiya.length; i++) {
                document.getElementById(imageId[i]).src = "./assets/Dandiya/" + dandiya[i];
            }
            break;
        case 1:
            for (var i = 0; i < ttt.length; i++) {
                document.getElementById(imageId[i]).src = "./assets/Buzz_ttt/" + ttt[i];
            }
            break;
        case 2:
            for (var i = 0; i < flashmob.length; i++) {
                document.getElementById(imageId[i]).src = "./assets/Flashmob/" + flashmob[i];
            }
            break;
        case 3:
            for (var i = 0; i < prom.length; i++) {
                document.getElementById(imageId[i]).src = "./assets/Prom/" + prom[i];
            }
            break;

        default:
            break;
    }
}
var dandiya = ['IMG_3937.JPG', 'IMG_3998.JPG', 'IMG_3997.JPG', 'IMG_3985.JPG', 'IMG_3988.JPG', 'IMG_3975.JPG', "IMG_3896.JPG"];
var ttt = ["IMG_8789.JPG", "IMG_8812.JPG", "IMG_8843.JPG", "IMG_8873.JPG", "IMG_8894.JPG", "IMG_8967.JPG", "IMG_8993.JPG"];
var flashmob = ["Fmob4.jpeg", "Fmob3.jpeg", "Fmob5.jpeg", "Fmob2.jpeg", "Fmob6.jpeg", "Fmob1.jpg", "Fmob7.jpeg"];
var prom = ["img1.jpeg", 'img2.jpeg', 'img3.jpg', 'img4.jpg', 'img5.jpeg','img6.JPG','img7.JPG'];
var imageId = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"];