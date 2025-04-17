var categories = ['Linnut', 'Kalat', 'Metsäneläimet'];
var categoryquestion = document.getElementById('question');
let disable = 0;
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
let otsikko = document.getElementById('otsikko');
let otsikko2 = document.getElementById('points3');
let otsikko3 = document.getElementById('points2');
let otsikko4 = document.getElementById('uusiotsikko');
let otsikko5 = document.getElementById('uusiotsikko2');
let otsikko6 = document.getElementById('points4');
returnbut = document.getElementById('return');



pic1.addEventListener('click', setrandomImageCategories);
pic2.addEventListener('click', setrandomImageCategories);

pic1.addEventListener('click', CountPoints);
pic2.addEventListener('click', CountPoints);


pic11.addEventListener('click', CountTries);
pic22.addEventListener('click', CountTries);







//Function that will set the h2 element from the html to the category from the category array according the current number of index element
function setCategories(){

    disable++;

    categoryquestion.textContent = categories[index];

    


    


}

setCategories();
setrandomImageCategories();

function DisableEnableButtons(){


    if(disable === 0){

        pic1.disabled = true;
        pic2.disabled = true;


    }
    else{

        pic1.disabled = false;
        pic2.disabled = false;

    }

    if(disable > 0){

        but3.disabled = true;

    }



}






//Uses if else to check current index and set the images according to current category index and randomizes the image from the array using math.random
function setrandomImageCategories(){

    
   

    if(index === 0){



        var listbirds=["../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0d.jpg"];
        var randomNumberbirds = Math.floor(Math.random() * 3);
        img1.src=listbirds[randomNumberbirds];

        var listbirds2=["../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg", "../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/perch-7521273_1280.jpg","../images/rasmuksenpelin_kuvat/fishes/salmon-3704543_1280.jpg","../images/rasmuksenpelin_kuvat/forest animals/moose-70254_1280.jpg"];
        var randomNumberbirds2 = Math.ceil(Math.random() * 5);
        img2.src=listbirds2[randomNumberbirds2];


    } else if(index === 1){

        


        var listfishes=["../images/rasmuksenpelin_kuvat/fishes/perch-7521273_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/pike-2276178_1280.jpg","../images/rasmuksenpelin_kuvat/fishes/salmon-3704543_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg"];
        var randomNumberfishes = Math.ceil(Math.random() * 3);
        img1.src=listfishes[randomNumberfishes];

        var listfishes2=["../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg","../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/Birds/0a.jpg", "../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/forest animals/moose-70254_1280.jpg","../images/rasmuksenpelin_kuvat/Birds/0b.jpg"];
        var randomNumberfishes2 = Math.ceil(Math.random()* 5);
        img2.src=listfishes2[randomNumberfishes2];

    } else if (index === 2){

        


        var listanimals=["../images/rasmuksenpelin_kuvat/Birds/0c.jpg", "../images/rasmuksenpelin_kuvat/Birds/0b.jpg","../images/rasmuksenpelin_kuvat/fishes/pike-2276178_1280.jpg", "../images/rasmuksenpelin_kuvat/fishes/trout.jpg","../images/rasmuksenpelin_kuvat/Birds/0d.jpg","../images/rasmuksenpelin_kuvat/Birds/0a.jpg"];
        var randomNumberanimals = Math.ceil(Math.random() * 5);
        img1.src=listanimals[randomNumberanimals];

        var listanimals2=["../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg","../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg", "../images/rasmuksenpelin_kuvat/forest animals/moose-70254_1280.jpg"];
        var randomNumberanimals2 = Math.ceil(Math.random()* 2);
        img2.src=listanimals2[randomNumberanimals2];



    }
        

    

    



    
    

}


// This function will continue to next category if category index is less than 2, if not it will return back to "linnut" category
function ContinuetoNextCategory(){


    if(index < 2){

        index++;

        document.getElementById("question").innerHTML = categories[index];



    }

    else{

        index = 0;
        
        
        

    }


}

CountPoints();

//This function will count the points according what index (category) is displayed and if correct button is clicked, also sends points to the session storage
function CountPoints(){

    categoryquestion.textContent = categories[index];


    pic2.onclick = function() {
          if(index === 2){
                points1++;

                sessionStorage.setItem("gamepoints", points1);
                
              
                
                points.textContent = points1;

                
              

              
      
            }else if(index === 1){

                points1++;

                sessionStorage.setItem("gamepoints", points1);


                points.textContent = points1;

                


            }
            
            
            
            else{
                
                

                
  
                points.textContent = points1; 
  
  
            }
  
    }

    pic1.onclick = function() {
            if(index === 2){
                
                

                
        
        
                points.textContent = points1; 

            }
            else if(index === 0){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }
            else{

                

                points.textContent = points1; 


            }

    }

    if(index < 2){

        index++;


    }

    else{

        index = 0;
        
        
        

    }
     
      
     
      
} 

// This function will count all the tries when user clicks the "Kuva 1" or "Kuva 2" buttons, increasing the tries each time by 1, if tries are 10, will display message that game ended and how many points player had
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

        otsikko.style.display = 'none';
        otsikko4.style.display = 'grid';

        categoryquestion.style.display = 'none';
        otsikko5.style.display = 'grid';
        otsikko5.innerHTML = "Sait " + points1 + " pistettä!";

        otsikko3.style.display = 'none';
        otsikko6.innerHTML = "Palataan pääsivulle...";

        otsikko2.style.display = 'none';
        points.style.display = 'none';
        

        img1.src = "../images/wood-2045379_1280.jpg";
        img2.src = "../images/wood-2045379_1280.jpg";

        pic1.disabled = true;
        pic2.disabled = true;

        setTimeout(function(){ window.location = "../pages/rasmuksenpeli.html"; },5000);





        

       

        

    }



}







 













    

    

