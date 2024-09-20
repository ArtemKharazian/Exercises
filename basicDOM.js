//add div 
const div = document.createElement("div");

//add class 
div.classList.add("wrapper");

//div in body
const body = document.body;
body.appendChild(div);

//add h1
const header = document.createElement("h1");
header.textContent = "DOM";

//add h1 before div-wrapper
div.insertAdjacentElement("beforebegin", header);

//create a list ul and add 3 elements: "one", "two", "three"
const ul = `
<ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
</ul>
`;

//add this ul into wrapper
div.innerHTML = ul;

//add image
const img = document.createElement("img");

//add atribute source
img.src = "https://picsum.photos/240";

//add atribute width 240;
img.width = 240;

//add class super
img.classList.add("super");

//add alt "super man"
img.alt = "Super Man";

//add img into wrapper
div.appendChild(img);

//use HTML string, and create div with class "pDiv" + 2 paragraphs
const elemHTML = `
<div class="pDiv">
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
</div>`;

//put it into element ul
const ulList = div.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHTML);

//add for second paragraph class "text"
const pDiv = document.querySelector(".pDiv");
pDiv.children[1].classList.add("text");

//delete first paragraph
pDiv.firstElementChild.remove();

//create function generateAutoCard,
//that have 3 argument: brand, color, year
//function have to return HTML:
/* <div class="autoCard">
    <h2>BRAND YEAR</h2>
    <p>Auto BRAND was created in YEAR year.</p>
    <button type="button" class="btn">Delete</button>
</div> */
const generateAutoCard = (brand, color, year) => {
    return `<div class="autoCard">
        <h2>${color} ${brand} ${year}</h2>
        <p>${color} ${brand} was created in ${year}.</p>
        <button type="button" class="btn">Delete</button>
    </div>`;
};


//create new div with class "cars"
const carsDiv = document.createElement("div");
carsDiv.classList.add("autos");

//create 3 auto cards, using function generateAutoCard
const carsList = [
    {brand: "Tesla", year: 2015, color: "Red"},
    {brand: "Lexus", year: 2016, color: "Silver"},
    {brand: "Nissan", year: 2012, color: "Black"},
]

const carsHTML = carsList.map(car => {
    return generateAutoCard(car.brand, car.color, car.year);
}).join("");

//pit this 3 cards into div with class "autos"
carsDiv.innerHTML = carsHTML;

//put div with class "autos" into DOM - before div with lass "wrapper"
div.insertAdjacentElement("beforebegin", carsDiv);

//When ClickOn - delete the card from DOM
//1.choose all buttons
const buttons = document.querySelectorAll(".btn");

//2.crate function "delete"
function handleClick(e) {
    const currentButton = e.currentTarget;
    currentButton.closest(".autoCard").remove();
}
//3.use a loop to attach an event handler to each button
buttons.forEach(button => {
    button.addEventListener("click", handleClick);
})

