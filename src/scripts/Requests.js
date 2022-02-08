import { getChildren, getParents, getParties, getClowns } from "./dataAccess.js";


const mainContainer = document.querySelector("#container")


const convertRequestToListElement = (party) => {
    const clowns = getClowns() 
    const parents = getParents()
    const children = getChildren()

    const clownsList = clowns.map(
        clown => {
            return `<option value="${party.id}--${clown.id}">${clown.name}</option>`
        }
    ).join("") 

    // find parent name
    const parentName = parents.find(parent => parent.id === party.parentId).name

    // find child name
    const childName = children.find(child => child.id === party.childId).name

    return `
    <li class="completed__${party.completed}">
        <div>Parent: ${parentName}</div>
        <div>Child: ${childName}</div>
        <div>Address: ${party.address}</div>
        <div>Number of Children: ${party.numberOfChildren}</div>
        <div>Length: ${party.length}</div>
        <div>Date: ${party.neededBy}</div>
        <select class="clowns" id="clowns">
            <option value="">Choose</option>
            ${clownsList}
        </select>
        <button class="request__delete"
                id="party--${party.id}">
            Delete
        </button>
    </li>
`
}

export const Requests = () => {
    const parties = getParties()

    let html = `
        <ul>
            ${
                parties.map(convertRequestToListElement).join("")
            }
        </ul>
        `

    return html
}