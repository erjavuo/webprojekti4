var categories = ['Linnut', 'Kalat', 'Metsäneläimet'];
var birds = ['a', 'b', 'c'];
var categoryquestion = document.getElementById('question');
let i = 1;
let index = 0;


let pic1 = document.getElementById('pic1');
let images = document.getElementsByTagName('img');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

pic1.addEventListener('click', setrandomImageBirds);


function ContinuetoNextCategory(){


    if(index <= 2){

        document.getElementById("question").innerHTML = categories[index];

        index++;


    }

    else{

        index = 0;

    }


    }






// hakee kuvat listasta ja asettaa satunnaisen kuvan lintu kategorialle, sisältäen myös vääriä vastauksia muista kategorioista
function setrandomImageBirds(){


    var listbirds=["../images/rasmuksenpelin_kuvat/Birds/0b.jpg","../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0d.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg" ];
    var randomNumberbirds = Math.ceil(Math.random() * 4);
    img1.src=listbirds[randomNumberbirds];
    

    var listbirds2=["../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg", "../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/perch-7521273_1280.jpg"];
    var randomNumberbirds2 = Math.ceil(Math.random() * 3);
    img2.src=listbirds2[randomNumberbirds2];

    

}

setCategories();

//Function that will get the h2 element from the html and shows the category according the current number of index element
function setCategories(){

    categoryquestion.textContent = categories[index];


}







    

    

