import { fetchData } from "./dataAccess.js";
import { clownPage } from "./Clown.js";

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchData()
        .then(() => {
            mainContainer.innerHTML = clownPage()
        })
}

mainContainer.addEventListener(
    "stateChanged",
    event => {
        render()
    }
)

render()

