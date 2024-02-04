let number=prompt("1000 ve 100000 arasinda eded daxil edin")
if(number%3==0){
    console.log("eded 3-e tam bolunur");
   
}
else if(number<1000){
    console.log("daxil etdiyiniz eded 1000-den kicikdir");
    
}
else if(number%3==1){
    console.log("eded 3-e tam bolunmur");
}
else{
    console.log("eded 100000-den boyukdur");

}

