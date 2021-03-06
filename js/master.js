// menu icon change

let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  let menuVertical = document.querySelector(".vertical-menu");
  if (menuIcon.classList.contains("change")) {
    menuVertical.style.right = "0";
    menuIcon.style.position = "fixed";
  }
  else {
    menuVertical.style.right = "-250px";
    menuIcon.style.position = "absolute";
  }
});



// page loading animation

let pageContainer = document.querySelector(".parent");
let loadIcon = document.querySelector(".load-icon");
pageContainer.style.display = "none";
loadIcon.style.display = "block";
setTimeout(() => {
  loadIcon.style.display = "none";
  pageContainer.style.display = "block";
  
}, 2000);




// settings menu
document.querySelector(".gear-icon ").addEventListener("click", ()=>{
  document.querySelector(".gear-icon .fa-gear").classList.toggle("fa-spin");
  document.querySelector(".settings-menu").classList.toggle("slide");
}
);






// change colors code
let colorsli = document.querySelectorAll(".color-list li");

let colorStorage = localStorage.getItem("color");

const rocketColors = ["rocket color1.svg", "rocket color2.svg", "rocket color3.svg", "rocket color4.svg"];


colorsli.forEach(li => {
  
  li.addEventListener("click", (e) => {
    
    let color = e.target.dataset.color; // target targets the clicked element

    // set the color of the root variable
    document.documentElement.style.setProperty("--secondaryText", color);
    // set the choseen color to the local storage
    localStorage.setItem("color", color);

    let currentActv = document.querySelector(".active");
    currentActv.classList.remove("active");
    e.target.classList.toggle("active");


    if (color === "#fd7014") {
      let img = document.querySelector(".about-box img");
      img.setAttribute("src", `images/${rocketColors[0]}`);
    }
    else if (color === "#145efd") {
      let img = document.querySelector(".about-box img");
      img.setAttribute("src", `images/${rocketColors[1]}`);
    }
    else if (color === "#14fd27") {
      let img = document.querySelector(".about-box img");
      img.setAttribute("src", `images/${rocketColors[2]}`);
    }
    else if (color === "#fdf914") {
      let img = document.querySelector(".about-box img");
      img.setAttribute("src", `images/${rocketColors[3]}`);
    }


  });
  
});


if (colorStorage !== null) {
  document.documentElement.style.setProperty("--secondaryText", colorStorage);

  document.querySelectorAll(".color-list li").forEach(elm => {
    
    // remove active class from li element
    elm.classList.remove("active");

    // add the active class to li element of choosen color
    if (elm.dataset.color === colorStorage) {
      elm.classList.add("active");
    }

  });


  if (colorStorage === "#fd7014") {
    let img = document.querySelector(".about-box img");
    img.setAttribute("src", `images/${rocketColors[0]}`);
  }
  else if (colorStorage === "#145efd") {
    let img = document.querySelector(".about-box img");
    img.setAttribute("src", `images/${rocketColors[1]}`);
  }
  else if (colorStorage === "#14fd27") {
    let img = document.querySelector(".about-box img");
    img.setAttribute("src", `images/${rocketColors[2]}`);
  }
  else if (colorStorage === "#fdf914") {
    let img = document.querySelector(".about-box img");
    img.setAttribute("src", `images/${rocketColors[3]}`);
  }

}



// landing page code



// change the background automaticaly
setInterval(() => {
  
  let imgArr = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"];
  let ranIndex = Math.floor(Math.random() * imgArr.length);
  let landPage = document.querySelector(".landing-page");
  // landPage.style.backgroundImage = "url('/images/03.jpg')";
  landPage.style.backgroundImage = `url("../images/${imgArr[ranIndex]}")`;

  
}, 5000);

// page-up btn

// first get the button

let pageBtn = document.querySelector(".page-up");

function pageBtnStat() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
  pageBtn.style.display = "flex";
}
else {
  pageBtn.style.display = "none";
  
  }
}

function sectionsHeadingAnimation() {

  let aboutHeading = document.querySelector(".about-section .special-heading");
  let servicesHeading = document.querySelector(".services .special-heading");
  let footerHeading = document.querySelector(".footer .special-heading");

  let aboutHeadingOffsetTop = aboutHeading.offsetTop;
  let aboutHeadingOffsetHeight = aboutHeading.offsetHeight;
  
  let servicesHeadingOffsetTop = servicesHeading.offsetTop;
  let servicesHeadingOffsetHeight = servicesHeading.offsetHeight;
  
  let footerHeadingOffsetTop = footerHeading.offsetTop;
  let footerHeadingOffsetHeight = footerHeading.offsetHeight;

  let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop >= (aboutHeadingOffsetTop + aboutHeadingOffsetHeight) - windowHeight) {
    aboutHeading.classList.add("animate");
  }
  if (windowScrollTop >= (servicesHeadingOffsetTop + servicesHeadingOffsetHeight) - windowHeight) {
    servicesHeading.classList.add("animate");
  }
  if (windowScrollTop >= (footerHeadingOffsetTop + footerHeadingOffsetHeight) - windowHeight) {
    footerHeading.classList.add("animate");
  }


}

// pageBtnStat();

window.onscroll = () => {
  pageBtnStat();
  sectionsHeadingAnimation();
}

pageBtn.addEventListener("click", () => {
  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

});

