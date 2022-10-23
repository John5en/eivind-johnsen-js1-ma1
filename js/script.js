const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1:

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

//Question 2, 3:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";
heading.style.fontSize = "2em";

//Question 4:
document.querySelector(".subheading");

//Question 5:

let paragraphs = document.querySelector("p");
{
  for (let i = 0; i < paragraphs.length; i++);

  paragraphs[i].style.color = "red";
}
//removing the "All" from queryselector, and the [i] makes the first paragraph the color red, however when i select all, none of them change color. Why?

//Question 6:

const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7:
function listName(list) {
  for (let i = 0; i < list.length; i++);
}

//Question 8:
function createCats(cats) {}

//im sorry but these last two questions are confusing to me. what exactly am i looping?
