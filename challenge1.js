const redexold = document.querySelector("[data-name=redex] .skills__title");
const reactTest = document.querySelector("[data-name=react-test] ");
//console.log(redexold);
//console.log(reactTest);
redexold.textContent = "Notejs";
reactTest.textContent = "MongoDB";
//----
const java = document.querySelector("[data-name=JavaScript]");
//console.log(java);

const jsaddtext = `<li data-name="Typescript" class="skills__item">
    <h2 class="skills__title">Typescript</h2>
    <span class="skills__years">2 years</span>
  </li>`;

java.insertAdjacentHTML("afterend", jsaddtext);
//---3
//find_out_link
const finecvDownlode = document.querySelector(".find_out_link");
//console.log(finecvDownlode);
finecvDownlode.remove();
//--4
const EditImage = document.querySelector(".bio__pic");
//console.log(EditImage);
EditImage.style.width = "36rem";
//---5
const skills_row = document.querySelectorAll(".skills__item");
//console.log(skills_row);
[...skills_row].map((item) => {
  //console.log(item);
  item.addEventListener("click", () => {
    const activeElement = document.querySelector(".underline");
    console.log(activeElement);
    if (activeElement) {
      activeElement.classList.remove("underline");
    }
    item.classList.add("underline");
  });
});
