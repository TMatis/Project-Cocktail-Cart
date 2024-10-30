const Names = (index) => {
    console.log(`${Drinks[index].Name}`);
    $(".Recipe_box").eq(index).text(`${Drinks[index].Name}`);
};

const Recipe = () => {
    MakeBoxes();

    jQuery.each($(".box"), Names);

    $(".box").on("click", function () {
        let indexOfDrinks = $(".box").index(this);

        $(this).find("p.Recipe_box").text(`There are ${Drinks[indexOfDrinks].Cals} Calories`);
    });

    $(".box").on("mouseover", function () {
        let indexOfDrinks = $(".box").index(this);
      
       $(this).find("p.Recipe_box").text(Drinks[indexOfDrinks].Recipe);
    });

    $(".box").on("mouseout", function () {
        let indexOfDrinks = $(".box").index(this);
        $(this).find("p.Recipe_box").text(`${Drinks[indexOfDrinks].Name}`);
     });


     //The Info section
    
     $(".Info").on("click", function () {
        $(this).text(`This is Secret Text...`);
    });

    $(".Info").on("mouseover", function () {
        $(this).text(`My Favorite drink is probably the Virgin Piña Colada, but I do enjoy all of them.`);
    });

    $(".Info").on("mouseout", function () {
        $(this).text(`This is a list of yummy drinks. They are Non-Alcoholic of course.`);
    });
};


const MakeBoxes = () => {
    let wrapperRef = $('.wrapper');
/*     console.log(Drinks); */
    Drinks.forEach((drink) => {
/*         console.log(drink); */
        let boxMarkup = `
        <div class="box">
            <img class="Drink_pic" src="./Pics/${drink.Name}.jpg" />
            <p class="Recipe_box">${drink.Name}</p>
        </div>`;
        wrapperRef.append(boxMarkup);
    });
};


$(document).ready(Recipe);