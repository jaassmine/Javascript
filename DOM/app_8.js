const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

//DoubleClick
clearBtn.addEventListener('dblclick', runEvent);

//Mouse Down
clearBtn.addEventListener('mousedown', runEvent);

//Mouse Up
clearBtn.addEventListener('mouseup', runEvent);

//Mouse Enter
clearBtn.addEventListener('mouseenter', runEvent);

//Mouse Leave
clearBtn.addEventListener('mouseleave',runEvent);

//MouseOver
clearBtn.addEventListener('mouseover',runEvent);

//MouseMove
card.addEventListener('mousemove',runEvent);


// Event Handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent=`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    document.body.style.backgroundColor =  `rgb(${e.offsetX},${e.offsetY},40)`;

}