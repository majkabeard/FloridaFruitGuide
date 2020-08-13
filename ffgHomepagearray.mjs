
// 
document.querySelectorAll('.regions').forEach((item, index) => {
  item.addEventListener('click', event => {
    document.querySelector('.ffg-main-right').innerHTML = "<h1>" + dataArray[index][0] + "</h1>" + "<h3>" + dataArray[index][1] + "</h3>" + "<h6 class='listed-fruit'>" + dataArray[index][2] + "</h6>" + "<a href='ffgHome2.html' class='button2'>" + dataArray[index][3] + "</a>"
  })
})


const dataArray = [
  [
    "North Florida",
    "Click on the fruit name for more details",
    "<a href='ffgFruit.html#apple' class='f-links'>Apples</a>         <br><a href='ffgFruit.html#banana' class='f-links'>Banana</a>         <br><a href='ffgFruit.html#fig' class='f-links'>Figs</a>        <br><a href='ffgFruit.html#Grapefruit' class='f-links'>Grapefruit</a>         <br><a href='ffgFruit.html#Lemon' class='f-links'>Lemon</a>        <br><a href='ffgFruit.html#lime' class='f-links'>Limes</a>       <br><a href='ffgFruit.html#Loquat' class='f-links'>Loquat</a>       <br><a href='ffgFruit.html#oranges' class='f-links'>Oranges</a>         <br> <a href='ffgFruit.html#peaches' class='f-links'>Peaches</a>       <br><a href='ffgFruit.html#strawberry' class='f-links'>Strawberries</a>", "Return"
  ],

  ["South Florida",
    "Click on the fruit name for more details",
    "<a href='ffgFruit.html#avocado' class='f-links'>Avocado</a>      <br><a href='ffgFruit.html#banana' class='f-links'>Banana</a>       <br><a href='ffgFruit.html#fig' class='f-links'>Figs</a>       <br><a href='ffgFruit.html#Grapefruit' class='f-links'>Grapefruit</a>        <br><a href='ffgFruit.html#guava' class='f-links'>Guava</a>         <br><a href='ffgFruit.html#Lemon' class='f-links'>Lemon</a>        <br><a href='ffgFruit.html#lime' class='f-links'>Limes</a>       <br><a href='ffgFruit.html#Loquat' class='f-links'>Loquat</a>               <br><a href='ffgFruit.html#lychee' class='f-links'>Lychee</a>               <br><a href='ffgFruit.html#mango' class='f-links'>Mangos</a>          <br><a href='ffgFruit.html#oranges' class='f-links'>Oranges</a>                     <br><a href='ffgFruit.html#papaya' class='f-links'>Papaya</a>                      <br><a href='ffgFruit.html#strawberry' class='f-links'>Strawberries</a>" , "Return"],

  ["Central Florida",
    "Click on the fruit name for more details",
    "<a href='ffgFruit.html#apple' class='f-links'>Apples</a>           <br> <a href='ffgFruit.html#avocado' class='f-links'>Avocado</a>         <br><a href='ffgFruit.html#banana' class='f-links'>Banana</a>  <br><a href='ffgFruit.html#fig' class='f-links'>Figs</a>  <br><a href='ffgFruit.html#Grapefruit' class='f-links'>Grapefruit</a>  <br><a href='ffgFruit.html#guava' class='f-links'>Guava</a>   <br><a href='ffgFruit.html#Lemon' class='f-links'>Lemon</a>  <br><a href='ffgFruit.html#lime' class='f-links'>Limes</a> <br><a href='ffgFruit.html#Loquat' class='f-links'>Loquat</a> <br><a href='ffgFruit.html#lychee' class='f-links'>Lychee</a>   <br><a href='ffgFruit.html#mango' class='f-links'>Mangos</a>          <br><a href='ffgFruit.html#oranges' class='f-links'>Oranges</a>                      <br><a href='ffgFruit.html#papaya' class='f-links'>Papaya</a>    <br><a href='ffgFruit.html#peaches' class='f-links'>Peaches</a>       <br><a href='ffgFruit.html#strawberry' class='f-links'>Strawberries</a>", "Return"],
];

