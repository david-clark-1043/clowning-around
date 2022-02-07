import { sendRequest } from "./dataAccess.js";

export const RequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="requestParentName">Parent Name</label>
            <input type="text" name="serviceParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestChildName">Child Name</label>
            <input type="text" name="serviceChildName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="numChildren">Number of Children</label>
            <input type="number" name="numChildren" class="input" min="1" max="25" />
        </div>
        <div class="field">
            <label class="label" for="requestAddress">Address of Party</label>
            <input type="text" name="requestAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestDate">Date of Party</label>
            <input type="date" name="requestDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="lengthOfReservation">Length of Party (hours)</label>
            <input type="number" name="lengthOfReservation" class="input" min="1" max="4" />
        </div>

        <button id="requestButton" id="submitRequest">Submit Request</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "orderButton") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='requestParentName']").value
        const userChildName = document.querySelector("input[name='requestChildName']").value
        const userAddress = document.querySelector("input[name='requestAddress']").value
        const numChildren = document.querySelector("input[name='numChildren']").value
        const userDate = document.querySelector("input[name='requestDate']").value
        const userLength = document.querySelector("input['lengthOfReservation']").value

        // Make an object out of the user input
        const partyObject = {
            numberOfChildren: numChildren,
            address: userAddress,
            length: userLength,
            neededBy: userDate
        }

        

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})