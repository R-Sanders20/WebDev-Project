const pages = document.querySelectorAll(".pages");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {
    direction === "next" ? translate += translateAmount : translate -= translateAmount;
    pages.forEach(
            pages => (pages.style.transform = `translateX(${translate}%)`)

          );
          console.log(translate)
        }

/*slide = (direction) => {
    if(direction === "next"){
        translate = translate + translateAmount;
    }else if (direction !== "next"){
        translate = translate - translateAmount;
    }

    pages.forEach(
        pages => (pages.getElementsByClassName.transform = `translateX(${translate}%)`)
    );
    console.log(translate)
}*/