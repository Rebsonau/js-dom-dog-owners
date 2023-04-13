console.log(data);

// WRITE YOUR CODE BELOW!

// Add 6 buttons to the unordered list within the header
// Use the query selector to select the unordered list
// Use for loop to cycle through the data array and create each button
// with the name of each dog taken from each object within the array.

const headerUl = document.querySelector(".dogs-list")

for (let i = 0; i < data.length; i++) {
    const createButton = document.createElement("li");
    createButton.classList.add('dogs-list__button');
    createButton.innerText = data[i]['name']
    headerUl.appendChild(createButton)
}

console.log(data)

// Add the cards for each dog to the main section

// let arrIndex = 1;

const mainSection = document.querySelector(".main__dog-section")

function dogCard(arrIndex) {
    const title = document.querySelector("h2");
    title.innerText = data[arrIndex].name;
    
    const dogImg = document.createElement('img')
    dogImg.src = data[arrIndex].image;
    mainSection.appendChild(dogImg);

    const mainDiv = document.createElement('div')
    mainDiv.classList.add('main__dog-section__desc')
    mainSection.appendChild(mainDiv)
    
    const mainDivSelect = document.querySelector('.main__dog-section__desc')
    const bioTitle = document.createElement('h3')
    bioTitle.innerText = 'Bio'
    mainDivSelect.append(bioTitle)

    const bioText = document.createElement('p')
    bioText.innerText = data[arrIndex].bio;
    mainDivSelect.append(bioText)

    const behaviour = document.createElement('p')
    behaviour.innerHTML = `<em>Is naughty?</em> Yes!`;
    mainSection.append(behaviour)

    const button = document.createElement('button');
    button.innerText = 'Good Dog'
    mainSection.append(button)
}

dogCard(4)

// create the template for the add dog form