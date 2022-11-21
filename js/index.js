//expressions; => contain data and operators na inareturn value
//constant expresion;

// let name = "jack"

//boolean expression
// truthy && falsey
// Boolean()

// let day = "Monday"
// let assignment;

// //logic programming

// if(day)

// const name = "Masilva";
// const friend = "ben";
// const cook = false;

//logic
//masilva akipika, ben ataosha vyombo, else ben atalala

//statement ? true : false;

//const result = cook ? "ben wash utensil" : "ben sleeps";
//console.log(result);

// const sentence = `${friend} has decided to ` + (cook ? "wash utensils" : "sleep") + ` beacause of ${name}`;
// console.log(sentence);
 
//results = `${siste} has decided to ` + (cook ? "wash utensils" : "sleep") + ` because of ${name}`;

//console.log(results);

//working with strings 
// defined using three symbols
// 1. ("string"), ('string'), (`string`)
//backtick is used during interpolation
//what is interpolation? - this is adding values to a string
// how interpolation works

// const name = "tracey";
// const secondName = "claudine";
// const number = 20;

// const sentence = `${name} and ${secondName} have ${number}`;
// console.log(sentence);


//lookup expression

function myFunction() {
    const dot = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    if(dot.style.display === "none"){
        dot.style.display - "inline";
        btnText.innerHTML - "Read more";
        moreText.style.display - "none";


    }else{
        dot.style.display = "none"; 
        btnText.innerHTML = "Read less";
        moreText.style.display - "inline";

    }

}
console.log(dots, moreText, btnText);



