const imgData = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg",
  "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk=",
  "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
];

let dImg = 0;

let img = document.querySelector(".img");
img.setAttribute("src", imgData[0]);
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");

next.addEventListener("click", () => {
  dImg = (dImg + 1) % imgData.length;
  img.setAttribute("src", imgData[dImg]);
});
previous.addEventListener("click", () => {
  dImg = (dImg - 1 + imgData.length) % imgData.length;
  img.setAttribute("src", imgData[dImg]);
});
