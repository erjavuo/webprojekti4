var categories = ['Linnut', 'Kalat', 'Metsäneläimet'];
var birds = ['a', 'b', 'c'];
var categoryquestion = document.getElementById('question');
let i = 1;
let index = 0;





setrandomImageBirds();
setCategories();
// hakee kuvat listasta ja asettaa satunnaisen kuvan lintu kategorialle, sisältäen myös vääriä vastauksia muista kategorioista
function setrandomImageBirds(){


    var images = document.getElementsByTagName('img');
    var listbirds=["../images/rasmuksenpelin_kuvat/Birds/0b.jpg","../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0d.jpg", "../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg" ];
    var randomNumberbirds = Math.ceil(Math.random() * 5);
    let img1 = document.getElementById('img1');
    img1.addEventListener('click', setrandomImageBirds);
    img1.src=listbirds[randomNumberbirds];

    var listbirds2=["../images/rasmuksenpelin_kuvat/Birds/0b.jpg", "../images/rasmuksenpelin_kuvat/Birds/0d.jpg", "../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/fishes/perch-7521273_1280.jpg"];
    var randomNumberbirds2 = Math.ceil(Math.random() * 3);
    let img2 = document.getElementById('img2');
    img2.addEventListener('click', setrandomImageBirds);
    img2.src=listbirds2[randomNumberbirds2];


    

}

function setCategories(){

    categoryquestion.textContent = categories[index];


}

function imageClicked(event){

if(event.currentTarget.name == answers[index]){

    console.log('CORRECT ANSWER');

}else{

    console.log('WRONG ANSWER');

}




}
    

    

