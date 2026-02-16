const rootElement = document.getElementById('root')

// const custom = <h1>My Name Is </h1>
// console.log(custom, typeof custom)

function RenderElemntInDiv(root, elemntObj){

    if (root.firstElementChild){
        root.firstElementChild.remove()
    }

    const createNewElement = document.createElement(elemntObj.type);
    for (atrribute in elemntObj.attributes){
        createNewElement.setAttribute(atrribute, elemntObj.attributes[atrribute])
    }

    createNewElement.innerHTML = elemntObj.content

    root.appendChild(createNewElement)

    // const my_button = document.createElement('button')
    // my_button.innerHTML = 'Click Me'

    // rootElement.appendChild(my_button)
    // // console.log(elemntObj.myNewObj, typeof elemntObj.myNewObj)

    // my_button.addEventListener('click',(event)=>{
    //     // console.log('clicked')
    //     RenderElemntInDiv(root, elemntObj.myNewObj)
    // })

}

// const myElementObj_2 = {
//     type : 'a',
//     attributes : {
//         href : 'https://www.facebook.com',
//         target : '_blank',
//     },
//     content : 'This Is My Custom React Content'
// }


const myElementObj = {
    type : 'a',
    attributes : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    content : 'This Is My Custom React Content',
    // myNewObj : myElementObj_2
}



RenderElemntInDiv(rootElement, myElementObj)