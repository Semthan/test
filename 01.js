/*

- Lös FizzBuzz-problemet* för talen 0-100.
- Spara alla värden i en array i en array som heter fizzbuzz.
- Skriv ut arrayen.

FizzBuzz är ett elementärt programmeringsproblem där man skriver ut tal i en talserie. Om det aktuella talet är jämnt delbart med 3 skriver man ut Fizz, är det jämnt delbart med 5 skriver man ut Buzz, är det jämnt delbart med båda skriver man ut FizzBuzz och annars skriver man ut talet. I detta fall skriver ni alltså dock inte ut värdet utan sparar det i arrayen och skriver ut arrayen när ni är klara.

*/



for(let i=0; i<=100; i++){
   if(i%3==0 && i%5==0){
       console.log("fizzBuzz");
   }
   else if(i%3==0){
    console.log("Fizz")
    }  
   else if(i%5==0){
       console.log("Buzz");
   } 

   else{
    console.log(i);
   }
  
}



