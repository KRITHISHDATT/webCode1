let containerDiv = document.createElement('div')
containerDiv.setAttribute('id', 'root')
containerDiv.setAttribute('class', 'container')
document.body.appendChild(containerDiv)

let table = document.createElement('table')
table.setAttribute('id', 'table-id')
table.setAttribute('class', 'table table-hover border table-adjust')
containerDiv.appendChild(table)

/**
 * Header of the table
 */
let thead = document.createElement('thead')
thead.setAttribute('class', 'table-light')
table.appendChild(thead)

let headRow = document.createElement('tr')
thead.appendChild(headRow)

let headData1 = document.createElement('th')
headData1.setAttribute('scope', 'col')
headData1.innerHTML = "S.No"
headRow.appendChild(headData1)

let headData5 = document.createElement('th')
headData5.setAttribute('scope', 'col')
headData5.innerHTML = "Name"
headRow.appendChild(headData5)

let headData2 = document.createElement('th')
headData2.setAttribute('scope', 'col')
headData2.innerHTML = "Ability"
headRow.appendChild(headData2)

let headData3 = document.createElement('th')
headData3.setAttribute('scope', 'col')
headData3.innerHTML = "Moves"
headRow.appendChild(headData3)

let headData4 = document.createElement('th')
headData4.setAttribute('scope', 'col')
headData4.innerHTML = "Weight"
headRow.appendChild(headData4)

/**
 * body of the table
 */
let tbody = document.createElement('tbody')
table.appendChild(tbody)


async function getData() {

    try {
        let apis = await getApis();
        this.listItems = await getApis();
        for (let index = 0; index < apis.length; index++) {
            const res = apis[index];
            let trow = document.createElement('tr');
            let abilityArray = [];
            let td = document.createElement('td')
            let ul = document.createElement('ul')
            let td0 = document.createElement('td')
            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')

            res.abilities.forEach(ele => {
                abilityArray.push(ele.ability.name)
            });
            abilityArray.forEach(element => {
                let li = document.createElement('li')
                li.innerHTML = element
                ul.appendChild(li)
            });
            td.innerHTML = index + 1;
            td0.innerHTML = res.name
            td1.appendChild(ul)
            td2.innerHTML = res.moves[0].move.name
            td3.innerHTML = res.weight
            trow.appendChild(td)
            trow.appendChild(td0)
            trow.appendChild(td1)
            trow.appendChild(td2)
            trow.appendChild(td3)
            tbody.appendChild(trow)
        }
    } catch (error) {
        console.log(error)
    }
}

this.getData()

async function getApis() {

    let array = [];
    let api = [
        'https://pokeapi.co/api/v2/pokemon/ditto', 'https://pokeapi.co/api/v2/pokemon/pikachu',
        'https://pokeapi.co/api/v2/pokemon/eevee', 'https://pokeapi.co/api/v2/pokemon/snorlax',
        'https://pokeapi.co/api/v2/pokemon/charizard', 'https://pokeapi.co/api/v2/pokemon/garchomp',
        'https://pokeapi.co/api/v2/pokemon/lucario', 'https://pokeapi.co/api/v2/pokemon/gardevoir',
        'https://pokeapi.co/api/v2/pokemon/piplup', 'https://pokeapi.co/api/v2/pokemon/charmander',
        'https://pokeapi.co/api/v2/pokemon/mewtwo', 'https://pokeapi.co/api/v2/pokemon/vaporeon',
        'https://pokeapi.co/api/v2/pokemon/mew', 'https://pokeapi.co/api/v2/pokemon/squirtle',
        'https://pokeapi.co/api/v2/pokemon/palkia', 'https://pokeapi.co/api/v2/pokemon/dialga',
        'https://pokeapi.co/api/v2/pokemon/gyarados', 'https://pokeapi.co/api/v2/pokemon/lopunny',
        'https://pokeapi.co/api/v2/pokemon/gible', 'https://pokeapi.co/api/v2/pokemon/bulbasaur',
        'https://pokeapi.co/api/v2/pokemon/sylveon', 'https://pokeapi.co/api/v2/pokemon/infernape',
        'https://pokeapi.co/api/v2/pokemon/empoleon', 'https://pokeapi.co/api/v2/pokemon/tyranitar',
        'https://pokeapi.co/api/v2/pokemon/greninja', 'https://pokeapi.co/api/v2/pokemon/gastrodon',
        'https://pokeapi.co/api/v2/pokemon/togepi', 'https://pokeapi.co/api/v2/pokemon/psyduck',
        'https://pokeapi.co/api/v2/pokemon/jigglypuff', 'https://pokeapi.co/api/v2/pokemon/roserade',
        'https://pokeapi.co/api/v2/pokemon/togekiss', 'https://pokeapi.co/api/v2/pokemon/heatran',
        'https://pokeapi.co/api/v2/pokemon/raichu', 'https://pokeapi.co/api/v2/pokemon/gengar',
        'https://pokeapi.co/api/v2/pokemon/umbreon', 'https://pokeapi.co/api/v2/pokemon/shinx',
        'https://pokeapi.co/api/v2/pokemon/drapion', 'https://pokeapi.co/api/v2/pokemon/budew',
        'https://pokeapi.co/api/v2/pokemon/jynx', 'https://pokeapi.co/api/v2/pokemon/salamence',
        'https://pokeapi.co/api/v2/pokemon/magikarp', 'https://pokeapi.co/api/v2/pokemon/torterra',
        'https://pokeapi.co/api/v2/pokemon/glaceon', 'https://pokeapi.co/api/v2/pokemon/roselia',
        'https://pokeapi.co/api/v2/pokemon/lugia', 'https://pokeapi.co/api/v2/pokemon/lapras',
        'https://pokeapi.co/api/v2/pokemon/turtwig', 'https://pokeapi.co/api/v2/pokemon/quagsire',
        'https://pokeapi.co/api/v2/pokemon/cresselia', 'https://pokeapi.co/api/v2/pokemon/skitty'];

    for (let index = 0; index < api.length; index++) {
        const data = api[index];
        let rawvalue = await fetch(data);
        let parsedValue = await rawvalue.json();
        array.push(parsedValue);
    }
    return array;
}

/**
 * pagination
 */
// let div = document.createElement('div')

// let nav = document.createElement('nav')
// nav.setAttribute('class', 'pagination-container')

// let preButton = document.createElement('button')
// preButton.setAttribute('id', 'prev-button')
// preButton.setAttribute('class', 'btn btn-primary pagination-button')
// preButton.innerHTML = 'Previous'
// nav.appendChild(preButton)

// let paginationDiv = document.createElement('div')
// paginationDiv.setAttribute('id', 'pagination-numbers')
// nav.appendChild(paginationDiv)

// let ul = document.createElement('ul');
// let li = document.createElement('li')
// ul.appendChild(li)
// paginationDiv.appendChild(ul)

// let nextButton = document.createElement('button')
// nextButton.setAttribute('id', 'next-button')
// nextButton.setAttribute('class', 'btn btn-primary pagination-button')
// nextButton.innerHTML = 'Next'
// nav.appendChild(nextButton)

// div.appendChild(nav)
// containerDiv.appendChild(div)


// const paginationNumbers = document.getElementById("pagination-numbers");
// const paginatedList = document.getElementById("paginated-list");
// const listItems = document.getElementById("table-id")
// const nextButton1 = document.getElementById("next-button");
// const prevButton = document.getElementById("prev-button");

// const paginationLimit = 10;
// const pageCount = Math.ceil(listItems.length / paginationLimit);
// let currentPage;

// const appendPageNumber = (index) => {
//     const pageNumber = document.createElement("button");
//     pageNumber.className = "pagination-number";
//     pageNumber.innerHTML = index;
//     pageNumber.setAttribute("page-index", index);
//     pageNumber.setAttribute("aria-label", "Page " + index);
//     paginationNumbers.appendChild(pageNumber);
// };
// const getPaginationNumbers = () => {
//     for (let i = 1; i <= pageCount; i++) {
//         appendPageNumber(i);
//     }
// };

// window.addEventListener("load", () => {
//     getPaginationNumbers();
// });

// const setCurrentPage = (pageNum) => {
//     currentPage = pageNum;

//     const prevRange = (pageNum - 1) * paginationLimit;
//     const currRange = pageNum * paginationLimit;
//     listItems.forEach((item, index) => {
//         item.classList.add("hidden");
//         if (index >= prevRange && index < currRange) {
//             item.classList.remove("hidden");
//         }
//     });
// };

// jsonData.forEach((item, index) => {
//     elementContainer.innerHTML = ''
//     if (index >= prevRange && index < currRange) {
//         elementContainer.appendChild(item)
//     }
// });

// window.addEventListener("load", () => {
//     getPaginationNumbers();
//     setCurrentPage(1);
// });
