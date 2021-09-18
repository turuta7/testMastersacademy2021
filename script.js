const pandemicStartMap = "01000000X000X011X0X";

const newPandemicStartMap = pandemicStartMap.split('X').map(data => {
    return data.split('').includes('1')
        ? data.split('').map(() => 1).join('')
        : data.split('').map(() => 0).join('')
}).join('X')

const total = [...newPandemicStartMap].filter(l => l !== 'X').length;
const infected = [...newPandemicStartMap].filter(l => l === '1').length;
const percentageOfInfection = infected / total * 100;

let h2V1 = document.createElement("H2")
h2V1.innerHTML = `<H2>Pandemic Start:</H2>`;

let h2V2 = document.createElement("H2")
h2V2.innerHTML = `<H2>Pandemic Start:</H2>`;

let block1 = document.createElement("div")
block1.setAttribute('class', 'flex-row');
block1.id = "block1";

let block2 = document.createElement("div")
block2.setAttribute('class', 'flex-row');
block2.id = "block2";

let block3 = document.createElement("div")
block3.id = "block3";

document.body.appendChild(h2V1)
document.body.appendChild(block1);
document.body.appendChild(h2V2)
document.body.appendChild(block2);
document.body.appendChild(block3);

addElement(pandemicStartMap, 'block1');
addElement(newPandemicStartMap, 'block2')

function addElement(map, block) {
    for (let i = 0; i < map.length; i++) {
        let newClass;
        switch (map[i]) {
            case '0':
                newClass = 'green'
                break
            case '1':
                newClass = 'red'
                break
            default:
                newClass = 'blue'
                break
        }
        let newDiv = document.createElement("div");
        newDiv.setAttribute('class', newClass);
        document.getElementById(block).appendChild(newDiv);

    }
}

let getIdBlock3 = document.getElementById("block3");
let totalText = document.createElement("H2")
totalText.innerHTML = `Total: ${total}`;

let totalInfected = document.createElement("H2")
totalInfected.innerHTML = `Infected: ${infected}`;

let percentageOfInfectionText = document.createElement("H2")
percentageOfInfectionText.innerHTML = `Percentage: ${percentageOfInfection}%`;

getIdBlock3.appendChild(totalText)
getIdBlock3.appendChild(totalInfected)
getIdBlock3.appendChild(percentageOfInfectionText)
