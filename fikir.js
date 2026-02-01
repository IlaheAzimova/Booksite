let text = document.getElementById('text')
let comments = []
function commentYaz() {
    let value = text.value
    comments.push(value)
    text.value = ""
    show()
    if (value == "") {
        alert("Fikirlərinizi daxil edin ")

    }
}
function show() {
    let list = document.getElementById('list')
    list.innerHTML = `<h2 class="font-bold text-center mt-[15vh] text-[20px] p-3">Comments:</h2>`
    comments.forEach(item => {
        list.innerHTML += `
        <li>${item}</li>`

    })


}