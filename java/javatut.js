let slider_image = Array.from(document.querySelectorAll(`.container img`));

// get number of the images

let image_number = slider_image.length;

// get number of slider string

let slider_number = document.getElementById("slide_number");

// current selected image

let current_image = 1;

// previous and next button

let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// next and prev clicking

prevButton.onclick = prevSlide;
nextButton.onclick = nextSlide;

// create pagination element

let pagination_element = document.createElement("ul");

// set id to the pagination element

pagination_element.setAttribute("id", "pagination_ul");

// create pagination items

for (i = 1; i <= image_number; i++) {
  let pagination_items = document.createElement("li");

  // add id to the pagination items
  pagination_items.setAttribute("data-index", i);

  // add text to the pagination items

  pagination_items.appendChild(document.createTextNode(i));

  // add pagination items to the pagination element

  pagination_element.appendChild(pagination_items);
}

// add pagination_element to its span

document.getElementById("indicators").appendChild(pagination_element);

// get an array of lis

let ulBullets = Array.from(document.querySelectorAll(".indicators li"));

for (s = 0; s < ulBullets.length; s++) {
  ulBullets[s].onclick = function () {
    current_image = parseInt(this.getAttribute("data-index"));

    theChecker();
  };
}
theChecker();

// function of clicking

function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    current_image++;
    theChecker();
  }
}

function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    current_image--;
    theChecker();
  }
}

// checker function

function theChecker() {
  // set number of current slide

  slider_number.textContent = `slider # ${current_image} of ${image_number}`;

  // remover all active class from images

  removeAllActive();

  // add active class to current photo

  slider_image[current_image - 1].classList.add("active");

  // add active class to current number

  pagination_element.children[current_image - 1].classList.add("active");

  if (current_image == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  if (current_image == image_number) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}

// remover all active class from images

function removeAllActive() {
  // Loop Through Images
  slider_image.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  ulBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
