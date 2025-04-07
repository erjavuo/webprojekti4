var categories = ['Linnut', 'Kalat', 'Metsäneläimet'];
var categoryquestion = document.getElementById('question');
let i = 1;
let index = 0;
let tries = 0;
let points1 = 0;



let pic1 = document.getElementById('pic1');
let pic2 = document.getElementById('pic2');
let but3 = document.getElementById('but3');
let images = document.getElementsByTagName('img');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let points = document.getElementById('points');
let pic11 = document.getElementById('pic1');
let pic22 = document.getElementById('pic2');



pic1.addEventListener('click', setrandomImageBirds);
pic2.addEventListener('click', setrandomImageBirds);
but3.addEventListener('click', setrandomImageBirds);
pic1.addEventListener('click', CountPoints);
pic2.addEventListener('click', CountPoints);


pic11.addEventListener('click', CountTries);
pic22.addEventListener('click', CountTries);
 

//Function that will get the h2 element from the html and shows the category according the current number of index element
function setCategories(){

    categoryquestion.textContent = categories[index];



}













// hakee kuvat listasta ja asettaa satunnaisen kuvan lintu kategorialle, sisältäen myös vääriä vastauksia muista kategorioista
function setrandomImageBirds(){

    
   

    if(index === 0){


        var listbirds=["../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0d.jpg"];
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

function CountPoints(){
    
    
    if(pic2.click && index === 1 ){
        points1++;
        
         alert('toimii1')  ;
            
    
    
    }
    else if(index === 1 && pic1.click){

        alert('ei pisteitä');

    }
    else{

        alert('no points!');

    }
    
    
    points.textContent = points1;

    
        
    
    
    
} 
// This function will continue to next category if category index is less than 2, if not it will return back to "linnut" category
function ContinuetoNextCategory(){


    if(index < 2){



        document.getElementById("question").innerHTML = categories[index];

        index++;

    }

    else{

        index = 0;
        
        
        

    }


}

   

// This function will count all the tries when user clicks the "Kuva 1" or "Kuva 2" buttons, increasing the tries each time by 1
function CountTries(){

    if(index === 0){

        tries++;


    }
    else if(index === 1){

        tries++;


    }

    else if(index === 2){

        tries++;

    }

    if(tries === 10){

        location.reload();

    }



}



 













    

    

