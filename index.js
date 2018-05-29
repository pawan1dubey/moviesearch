$(document).ready(function(){



$(".search").hide();

$("input[name$='criteria']").click(function() {
        var optionvalue = $(this).val();
        $(".search").hide();
        $("#" + optionvalue).show();
        
        document.getElementById("e1").innerHTML="";
        document.getElementById("e2").innerHTML="";
        document.getElementById("e3").innerHTML="";
        $('#movieid').val('');
        $('#movietitle').val('');
        $('#moviename').val('');
        $('#movieyear').val('');
         
        
    });





$("#mid").click(function(){



$("table").empty();
document.getElementById("e1").innerHTML="";

if($("#movieid").val()==""){

document.getElementById("e1").innerHTML="Please enter the movie id";

}

else{


let id=$("#movieid").val();
let url=`http://www.omdbapi.com/?i=${id}&apikey=25053867`



$.ajax({
        type: 'GET', 
        dataType: 'json', 
        url: url, 
        success: (data) => { 
            if(data.Response=="True"){
            let b="dummy.jpg";
            let a=data.Poster;
            let imagerow=`<tr><td><img class="image" src="${a}" onerror="this.src='${b}';"></td></tr>`
             $("table").append(imagerow);
           
            for(x in data){
                    if(x!="Poster" && x!="Response" && x!="Ratings" && x!="Website"){

                 let tempRow = `<tr><td>${x}</td><td>${data[x]}</td></tr>`

                 $("table").append(tempRow); 
                 
              }
            }
              

          }else{
                let str=data.Error;
               document.getElementById("e1").innerHTML=`${str}`;
            }
       },
   error: () => { 
                    document.getElementById("e1").innerHTML="Some error occurred,Please Try again";
                 
         
              },
        beforeSend: () => {

                          let loader=`<div class="loader"></div>`;
                          $("#id").append(loader);
                          $("input[type=radio]").attr('disabled', true);
                          $(".userclick").attr('disabled', true);
                          $(".reset").attr('disabled', true);
                          
                    },
  

           complete: () => {

 

                         $(".loader").remove();
                         $("input[type=radio]").attr('disabled', false);
                         $(".userclick").attr('disabled', false);
                          $(".reset").attr('disabled', false);
           }
    

        
});

}
});





$("#mtitle").click(function(){

$("table").empty();
document.getElementById("e2").innerHTML="";

if($("#movietitle").val()==""){

document.getElementById("e2").innerHTML="Please enter the movie title";

}

else{


let title=$("#movietitle").val();
let url=`http://www.omdbapi.com/?t=${title}&apikey=25053867`



$.ajax({
        type: 'GET', 
        dataType: 'json', 
        url: url, 
        success: (data) => { 
            
             if(data.Response=="True"){
             let b="dummy.jpg";
            let a=data.Poster;
            let imagerow=`<tr><td><img class="image" src="${a}" onerror="this.src='${b}';"></td></tr>`
             $("table").append(imagerow);

            for(x in data){
                    if(x!="Poster" && x!="Response" && x!="Ratings" && x!="Website"){

                 let tempRow = `<tr><td>${x}</td><td>${data[x]}</td>`

                 $("table").append(tempRow); 
              }
            }
            }else{
                        let str=data.Error;
               document.getElementById("e2").innerHTML=`${str}`;
             }
       },
   error: () => { 
                    document.getElementById("e2").innerHTML="Some error occurred,Please Try again";
                 
         
              },
           
             beforeSend: () => {
                               
                               let loader=`<div class="loader"></div>`;
                                $("#title").append(loader);
                               $("input[type=radio]").attr('disabled', true);
                               $(".userclick").attr('disabled', true);
                          $(".reset").attr('disabled', true);

                    },
  

           complete: () => {

 
                             
                         $( ".loader" ).remove();
                        $("input[type=radio]").attr('disabled', false);
                         $(".userclick").attr('disabled', false);
                          $(".reset").attr('disabled', false);
           }
    

        
});

}
});



$("#myear").click(function(){

$("table").empty();
console.log("got it");
document.getElementById("e3").innerHTML="";

if($("#moviename").val()==""){

document.getElementById("e3").innerHTML="Please enter the movie name";

}

else if ($("#moviename").val()!="" && $("#movieyear").val()==""){


let name=$("#moviename").val();
let url=`http://www.omdbapi.com/?s=${name}&apikey=25053867`



$.ajax({
        type: 'GET', 
        dataType: 'json', 
        url: url, 
        success: (data) => { 
            
           if(data.Response=="True"){
             
            for(x of data.Search){
                   let myobj=x;

                       for(y in myobj){
                   
                    if(y=="Poster"){
                                 let a=myobj[y];
                               
                                       let b="dummy.jpg";
                              let imagerow=`<tr><td><img class="image" src="${a}" onerror="this.src='${b}';"></td></tr>`
                               $("table").append(imagerow);
                 
              }
            }

                      for(y in myobj){
                   
                    if(y!="Poster"){

                 let tempRow = `<tr><td>${y}</td><td>${myobj[y]}</td></tr>`

                 $("table").append(tempRow); 
              }
            }
             let tempRow = `<tr class="divider1"><td class="divider">SEARCH RESULT</td></tr>`

                 $("table").append(tempRow);
         }
         }else{
                let str=data.Error;
               document.getElementById("e3").innerHTML=`${str}`;
            }
       },
   error: () => { 
                    document.getElementById("e3").innerHTML="Some error occurred,Please Try again";
                 
         
              },

            beforeSend: () => {
                             let loader=`<div class="loader"></div>`;
                                $("#year").append(loader);
                             $("input[type=radio]").attr('disabled', true);
                             $(".userclick").attr('disabled', true);
                          $(".reset").attr('disabled', true);
                    },
  

           complete: () => {

 

                         $( ".loader" ).remove();
                        $("input[type=radio]").attr('disabled', false);
                       $(".userclick").attr('disabled', false);
                          $(".reset").attr('disabled', false);
           }
    

        
});

}

else if ($("#moviename").val()!="" && $("#movieyear").val()!=""){



let name=$("#moviename").val();
let year=$("#movieyear").val();
let url=`http://www.omdbapi.com/?s=${name}&y=${year}&apikey=25053867`



$.ajax({
        type: 'GET', 
        dataType: 'json', 
        url: url, 
        success: (data) => { 
            
           if(data.Response=="True"){
            
            for(x of data.Search){
                         let myobj=x;
                        for(y in myobj){
                   
                    if(y=="Poster"){
                                 let a=myobj[y];
                                 
                                 let b="dummy.jpg";
                              let imagerow=`<tr><td><img class="image" src="${a}" onerror="this.src='${b}';"></td></tr>`
                               $("table").append(imagerow);
                 
              }
            }



                      for(y in myobj){

                      
                    if(y!="Poster"){

                 let tempRow = `<tr><td>${y}</td><td>${myobj[y]}</td></tr>`

                 $("table").append(tempRow); 
              }
            }
          
               let tempRow = `<tr class="divider1"><td class="divider">SEARCH RESULT</td></tr>`

                 $("table").append(tempRow);
         }
          }else{
             let str=data.Error;
               document.getElementById("e3").innerHTML=`${str}`;
            }
       },
   error: () => { 
                    document.getElementById("e3").innerHTML="Some error occurred,Please Try again";
                 
         
              },

             beforeSend: () => {

                             let loader=`<div class="loader"></div>`;
                                $("#year").append(loader);
                             $("input[type=radio]").attr('disabled', true);
                            $(".userclick").attr('disabled', true);
                          $(".reset").attr('disabled', true);
                    },
  

           complete: () => {

 

                           $( ".loader" ).remove();
                         $("input[type=radio]").attr('disabled', false);
                          $(".userclick").attr('disabled', false);
                          $(".reset").attr('disabled', false);
           }
    

        
});




}
});



$(".reset").click(function(){

        document.getElementById("e1").innerHTML="";
        document.getElementById("e2").innerHTML="";
        document.getElementById("e3").innerHTML="";
        $('#movieid').val('');
        $('#movietitle').val('');
        $('#moviename').val('');
        $('#movieyear').val('');
        $("table").empty();

});







});



