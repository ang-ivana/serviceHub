// JS Console tryout
console.log("Hello Students.");

// Burger Menu
const burgerMenu = document.querySelector(".burger-menu");
console.log(burgerMenu);
const nav = document.querySelector("nav");
console.log(nav);

burgerMenu.addEventListener("click", () => {
  nav.classList.toggle("js-nav")
})

// Languages
const languagesBtn = document.getElementById("languagesBtn");
console.log(languagesBtn);
const languagesDropdown = document.querySelector(".languages-dropdown");

languagesBtn.addEventListener("click", () => {
  languagesDropdown.style.display = languagesDropdown.style.display === "flex" ? "none" : "flex";

})

// Carousel
const cItem = document.querySelectorAll(".carousel-item");
const cdots = document.querySelectorAll(".dot");
const cTrack = document.querySelector(".carousel-track");


cdots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    cdots.forEach(dot => dot.classList.remove("active"));
    cItem.forEach(item => item.classList.remove("item-active"));

    dot.classList.add("active");
    cItem[index].classList.add("item-active");
    // cTrack.style.transform = `translateX(-${index * 100}%)`
  });

});

// Categories
const categoriesContainer = document.querySelector(".categories-container");
const overlay = document.querySelector(".overlay");
const categoriesBtn = document.querySelector(".categories-btn");
const categories = document.querySelector(".categoires");
const categoriesItems = document.querySelectorAll(".categories-item");
const subcategoriesItems = document.querySelectorAll(".subcategories-item");
const subcategoriesTitles = document.querySelectorAll(".subcategories-title");
const subcategoriesLinks = document.querySelectorAll(".subcategories-link");

categoriesBtn.addEventListener("click", (e) => {
  e.preventDefault();
  categoriesContainer.classList.toggle("js-block");
  overlay.classList.toggle("js-block");
});

overlay.addEventListener("click", () => {
  categoriesContainer.classList.remove("js-block");
  overlay.classList.remove("js-block");
  filtersContainer.classList.remove("js-block");
});


// Open subcategory
categoriesItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    subcategoriesItems.forEach((subcategory) => {
      subcategory.classList.remove("sub-active");
    });
    subcategoriesItems[index].classList.add("sub-active");
  });
});

// Close Subcategory
subcategoriesTitles.forEach((title) => {
  title.addEventListener("click", () => {
    subcategoriesItems.forEach((subcategory) => {
      subcategory.classList.remove("sub-active");
    });
  });
});

// Choose subcategory link
subcategoriesLinks.forEach((link) => {
  link.addEventListener("click", () => {
    categoriesContainer.classList.remove("js-block");
    overlay.classList.remove("js-block");
    subcategoriesItems.forEach((subcategory) => {
      subcategory.classList.remove("sub-active");
    });
  });
});

const filtersBtn = document.querySelector(".filters-btn");
const filtersContainer = document.querySelector(".filters-container");

filtersBtn.addEventListener("click", (e) => {
  e.preventDefault();
  filtersContainer.classList.add("js-block");
  overlay.classList.add("js-block")
})

