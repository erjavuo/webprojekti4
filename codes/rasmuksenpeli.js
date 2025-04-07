var categories = ['Linnut', 'Kalat', 'Metsäneläimet'];
var categoryquestion = document.getElementById('question');
let i = 1;
let index = 0;
let tries = 0;




let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let but3 = document.getElementById('but3');
let images = document.getElementsByTagName('img');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');

pic1.addEventListener('click', setrandomImageBirds);
pic2.addEventListener('click', setrandomImageBirds);
but3.addEventListener('click', setrandomImageBirds);

//Function that will get the h2 element from the html and shows the category according the current number of index element
function setCategories(){

    categoryquestion.textContent = categories[index];



}




function ShowImages(){


    img1.src=('../images/rasmuksenpelin_kuvat/Birds/0a.jpg');
    img2.src=('../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg');


}




// hakee kuvat listasta ja asettaa satunnaisen kuvan lintu kategorialle, sisältäen myös vääriä vastauksia muista kategorioista
function setrandomImageBirds(){

    

    if(index === 0){


        var listbirds2=["../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0d.jpg"];
        var randomNumberbirds = Math.ceil(Math.random() * 3);
        img1.src=listbirds[randomNumberbirds];

        var listbirds2=["../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg", "../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/perch-7521273_1280.jpg"];
        var randomNumberbirds2 = Math.ceil(Math.random() * 3);
        img2.src=listbirds2[randomNumberbirds2];


        }

    else if(index === 1){


        var listfishes=["../images/rasmuksenpelin_kuvat/fishes/perch-7521273_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/pike-2276178_1280.jpg","../images/rasmuksenpelin_kuvat/fishes/salmon-3704543_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg"];
        var randomNumberfishes = Math.ceil(Math.random() * 3);
        img1.src=listfishes[randomNumberfishes];

        var listfishes2=["../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg","../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg"];
        var randomNumberfishes2 = Math.ceil(Math.random()* 3);
        img2.src=listfishes2[randomNumberfishes2];

    }


    else if (index === 2){

        var listanimals=["../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg","../images/rasmuksenpelin_kuvat/fishes/pike-2276178_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg"];
        var randomNumberanimals = Math.ceil(Math.random() * 3);
        img1.src=listanimals[randomNumberanimals];

        var listanimals2=["../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg","../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/forest animals/moose-70254_1280.jpg"];
        var randomNumberanimals2 = Math.ceil(Math.random()* 2);
        img2.src=listanimals2[randomNumberanimals2];



    }
    

}
// This function will continue to next category if category index is less or equal than 2, if not it will return back to "linnut" category
function ContinuetoNextCategory(){


    if(index < 2){



        document.getElementById("question").innerHTML = categories[index];

        index++;

    }

    else{

        index = 0;
        
        
        

    }


    }













    

    

