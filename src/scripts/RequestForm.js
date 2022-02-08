import { sendRequest } from "./dataAccess.js";
import { getChildren, getParents, getParties } from "./dataAccess.js";

export const RequestForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="requestParentName">Parent Name</label>
            <input type="text" name="requestParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="requestChildName">Child Name</label>
            <input type="text" name="requestChildName" class="input" />
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
    if (clickEvent.target.id === "requestButton") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='requestParentName']").value
        const userChildName = document.querySelector("input[name='requestChildName']").value
        const userAddress = document.querySelector("input[name='requestAddress']").value
        const numChildren = parseInt(document.querySelector("input[name='numChildren']").value)
        const userDate = document.querySelector("input[name='requestDate']").value
        const userLength = parseInt(document.querySelector("input[name='lengthOfReservation']").value)

        // Make an object out of the user input
        const parties = getParties()
        const parents = getParents()
        const children = getChildren()
        let newPartyId = 1
        let newChildId = 1
        let newParentId = 1


        if(parties.length) {
            const lastPartyId = parties.length - 1
            newPartyId = parties[lastPartyId].id + 1            
        }

        if(parents.length) {
            const lastParentId = parents.length - 1
            newParentId = parents[lastParentId].id + 1
        }

        if(children.length) {
            const lastChildId = children.length - 1
            newChildId = children[lastChildId].id + 1
        }

        const partyObj = {
            numberOfChildren: numChildren,
            address: userAddress,
            length: userLength,
            neededBy: userDate,
            parentId: newParentId,
            childId: newChildId
        }
        const parentObj = {
            name: userParentName
        }

        const childObj = {
            name: userChildName
        }

        const parentChildObj = {
            parentId: newParentId,
            childId: newChildId
        }

        // Send the data to the API for permanent storage
        // argument order should be
        // party, parent, child, parentParty, childParty, parentChild
        sendRequest(partyObj, parentObj, childObj, parentChildObj)
    }
})