/*

Skriv en funktion som tar en sträng som parameter, gör om alla tecken som inte är a-z (stora eller små) till HTML-entiteter och returnerar resultatet.

Läs mer om HTML-entiteter här: https://dev.w3.org/html5/html-author/charref

Din funktion måste byta ut alla "osäkra" tecken mot "säkra". De tecken ni behöver byta ut är:
<
>
å
ä
ö
'

Alla tecken som inte är a-z eller någon av ovanstående (t ex kommatecken, punkter, bindestreck osv) ska tas bort.

*/

/*
    Ö = &Ouml;&#x000D6;&#214;
    Ä = &Auml;&#x000C4;&#196;
    Å = &Aring;&#x000C5;&#197;
*/ 


function safe_string(str) {
    str = " ".replace(/ö/g, "&Ouml;&#x000D6;&#214;")
 
}

//let stri = "över ".replace(/ö/g, "&Ouml;&#x000D6;&#214;")

//console.log(stri)


console.log( safe_string("över")); // Expected output: &lt;h1&gt;Sj&ouml;r&ouml;vare O&apos;hoj&lt;/h1&gt;

