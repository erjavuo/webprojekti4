var categories = ['Linnut', 'Kalat', 'Metsäneläimet','Linnut', 'Kalat', 'Metsäneläimet','Linnut', 'Kalat', 'Metsäneläimet','Linnut'];
var categoryquestion = document.getElementById('question');
let disable = 0;
let index = 0;
let tries = 0;
let points1 = 0;
let cut = 0;



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



pic1.addEventListener('click', setImageCategories);
pic2.addEventListener('click', setImageCategories);

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
setImageCategories();

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


//Uses if else to check current index and set the images according to current category index from the arrays
function setImageCategories(){

    let listbirds=["../images/rasmuksenpelin_kuvat/Birds/0a.jpg"];
    let listbirds2=["../images/rasmuksenpelin_kuvat/forest animals/fox-4589927_1280.jpg"];

    let listfishes=["../images/rasmuksenpelin_kuvat/fishes/pike-4573363_1280.jpg"];
    let listfishes2=["../images/rasmuksenpelin_kuvat/forest animals/lynx-7253623_1280.jpg"];

    let listanimals=["../images/rasmuksenpelin_kuvat/Birds/woodpecker-2424431_1280.jpg"];
    let listanimals2=["../images/rasmuksenpelin_kuvat/forest animals/rabbit-1882699_1280.jpg"];

    let listbirdsindex3=["../images/rasmuksenpelin_kuvat/Birds/0b.jpg"];
    let listbirds2index3=["../images/rasmuksenpelin_kuvat/forest animals/moose-70254_1280.jpg"];

    let listfishesindex4=["../images/rasmuksenpelin_kuvat/fishes/salmon-3704543_1280.jpg"];
    let listfishes2index4=["../images/rasmuksenpelin_kuvat/forest animals/otter-7228458_1280.jpg"];

    let listanimalsindex5=["../images/rasmuksenpelin_kuvat/forest animals/wolf-635063_1280.jpg"];
    let listanimals2index5=["../images/rasmuksenpelin_kuvat/Birds/blue-tit-8521052_1280.jpg"];

    let listbirdsindex6=["../images/rasmuksenpelin_kuvat/Birds/bird-7736116_1280.jpg"];
    let listbirds2index6=["../images/rasmuksenpelin_kuvat/fishes/trout.jpg"];
    
    let listfishesindex7=["../images/rasmuksenpelin_kuvat/forest animals/bear-5120104_1280.jpg"];
    let listfishes2index7=["../images/rasmuksenpelin_kuvat/fishes/pike-4573363_1280.jpg"];

    let listanimalsindex8=["../images/rasmuksenpelin_kuvat/forest animals/roe-deer-2634729_1280.jpg"];
    let listanimal2sindex8=["../images/rasmuksenpelin_kuvat/Birds/common-raven-3184260_1280.jpg"];

    let listbirdsindex9=["../images/rasmuksenpelin_kuvat/Birds/0c.jpg"];
    let listbirds2index9=["../images/rasmuksenpelin_kuvat/fishes/brown-trout-1524955_1280.jpg"];

   
    if(index === 0){

        
        img1.src=listbirds;

        
        img2.src=listbirds2;



    }else if(index === 1){

        
        img1.src=listfishes;

        
        img2.src=listfishes2;




    }else if(index === 2){

        
        img1.src=listanimals;

        img2.src=listanimals2;





    }else if(index === 3){

        
        img1.src=listbirdsindex3;

        img2.src=listbirds2index3;





    }else if(index === 4){

        
        img1.src=listfishesindex4;

        img2.src=listfishes2index4;





    }else if(index === 5){

        
        img1.src=listanimalsindex5;

        img2.src=listanimals2index5;





    }else if(index === 6){

        
        img1.src=listbirdsindex6;

        img2.src=listbirds2index6;





    }else if(index === 7){

        
        img1.src=listfishesindex7;

        img2.src=listfishes2index7;





    }else if(index === 8){

        
        img1.src=listanimal2sindex8;

        img2.src=listanimalsindex8;





    }else if(index === 9){

        
        img1.src=listbirdsindex9;

        img2.src=listbirds2index9;





    }
        

}

// This function will continue to next category if category index is less than 2, if not it will return back to "linnut" category
function ContinuetoNextCategory(){


    if(index < 10){

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

                


            }else if(index === 5){

                points1++;

                sessionStorage.setItem("gamepoints", points1);


                points.textContent = points1;

                


            }else if(index === 4){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }else if(index === 5){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }else if(index === 6){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }else if(index === 7){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }else if(index === 10){
                
                
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


            }else if(index === 3){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }else if(index === 8){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }else if(index === 9){
                
                
                points1++;

                sessionStorage.setItem("gamepoints", points1);

                

                points.textContent = points1; 


            }
            else{

                

                points.textContent = points1; 


            }

    }

    if(index < 10){

        index++;


    }

    else{

        index = 0;
        
        
        

    }
     
      
     
      
} 

// This function will count all the tries when user clicks the "Kuva 1" or "Kuva 2" buttons, increasing the tries each time by 1, if tries are 10, will display message that game ended and how many points player had and redirects back to main site in 5 seconds
function CountTries(){
  

    if(tries === 9){

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





        

       

        

    }else{

        tries++;

    }



}







 













    

    

