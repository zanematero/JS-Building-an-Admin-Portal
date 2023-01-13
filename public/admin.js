
// Your Code Here
let bookArr = fetch('http://localhost:3001/listBooks')
.then((response) => {
    if (response.ok) {
      return response.json();
    } else {
        throw new Error("Network Response Error");
    }
})
.then(data => {
    console.log(data);   
})
.then(bookArr.array.forEach(data => {
    let input = document.createElement("input")
    let button = document.createElement("button")
    document.appendChild(input)
    document.appendChild(button)
}));
/*     bookArr.array.forEach(data => {
        let input = document.createElement("input")
        let button = document.createElement("button")
        document.appendChild(input)
        document.appendChild(button)
});

 */