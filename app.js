'use strict'


let leftImageElement = document.getElementById('left-image');

let middleImageElement = document.getElementById('middle-image');

let rightImageElement = document.getElementById('right-image');


let maxAttempts = 10;
let userAttemptsCounter = 0;


let leftImageIndex;
let middleImageIndex;
let rightImageIndex;

function Product(name, path) {
    this.name = name;
    this.path = path;
    this.votes = 0;
    this.shownNum = 0;

    Product.all.push(this);
}

Product.all = [];


new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('unicorn', 'img/unicorn.jpg');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

// console.log(Product.all);

// taken from w3schools and teacher demo
function getRandomIndex() {

    return Math.floor(Math.random() * Product.all.length);
}

// console.log(getRandomIndex());

// render function

function renderThreeProducts() {

    leftImageIndex = getRandomIndex();
    middleImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();

    while (leftImageIndex === rightImageIndex || leftImageIndex === middleImageIndex) {
        leftImageIndex = getRandomIndex();

    }
    while (rightImageIndex === middleImageIndex) {
        rightImageIndex = getRandomIndex();
    }



    // console.log(leftImageIndex, middleImageIndex, rightImageIndex);

    // console.log(Product.all[leftImageIndex].name);
    // console.log(Product.all[middleImageIndex].name);
    // console.log(Product.all[rightImageIndex].name);



    leftImageElement.src = Product.all[leftImageIndex].path;
    middleImageElement.src = Product.all[middleImageIndex].path;
    rightImageElement.src = Product.all[rightImageIndex].path;

    Product.all[leftImageIndex].shownNum++;
    Product.all[middleImageIndex].shownNum++;
    Product.all[rightImageIndex].shownNum++;

    // console.log(Product.all[leftImageIndex].shownNum++);
    // console.log(Product.all[middleImageIndex].shownNum++);
    // console.log(Product.all[rightImageIndex].shownNum++);


}

renderThreeProducts();



//handle with clicking 


// leftImageElement.addEventListener('click', handleUserClick);
// middleImageElement.addEventListener('click', handleUserClick)
// rightImageElement.addEventListener('click', handleUserClick);

// let parent = document.getElementById('parent');
parent.addEventListener('click', handleUserClick);

function handleUserClick(event) {

    console.log(event.target.id);



    console.log(userAttemptsCounter);


    if (userAttemptsCounter < maxAttempts) {

        if (event.target.id === 'left-image') {
            Product.all[leftImageIndex].votes++;
            // console.log(Product.all[leftImageIndex]);
            renderThreeProducts();
            userAttemptsCounter++;

        } else if (event.target.id === 'middle-image') {
            Product.all[middleImageIndex].votes++;
            // console.log(Product.all[middleImageIndex]);
            renderThreeProducts();
            userAttemptsCounter++;

        } else if (event.target.id === 'right-image') {
            Product.all[rightImageIndex].votes++;
            // console.log(Product.all[rightImageIndex]);
            renderThreeProducts();
            userAttemptsCounter++;

        } else {
            alert('Click within the border of the images ');

        }

    } else {

        //  button function taken from www.sebhastian.com
        let button = document.createElement("button");
        button.innerHTML = "View Results";
        button.addEventListener("click", function () {


            let list = document.getElementById('resultList');

            for (let i = 0; i < Product.all.length; i++) {
                let listItem = document.createElement('li');

                list.appendChild(listItem);

                listItem.textContent = `${Product.all[i].name} had (${Product.all[i].votes}) votes, and was seen (${Product.all[i].shownNum}) times. `;
            }

        });
        document.body.appendChild(button);

        // remove event listener:
        // leftImageElement.removeEventListener('click', handleUserClick);
        // middleImageElement.removeEventListener('click', handleUserClick);
        // rightImageElement.removeEventListener('click', handleUserClick);

        parent.removeEventListener('click', handleUserClick);

    }
}





