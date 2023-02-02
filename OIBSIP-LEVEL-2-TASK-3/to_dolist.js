const mytext = document.querySelector("#mytext");
const to_do = document.querySelector("#to_do");
const btn = document.querySelector("#btn");
mytext.addEventListener(
    "keyup",
    function(event) {
        if (event.key == "Enter") {
            addToDo(this.value)
            this.value = ""
        }
    }
)

const addToDo = (mytext) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
         ${mytext}
        <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function() {
            listItem.remove()
        }
    )
    to_do.appendChild(listItem)
}