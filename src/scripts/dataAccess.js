const applicationState = [

]

// get Data from databse.json

const API = "http://localhost:8088"

export const fetchParties = () => {
    return fetch(`${API}/parties`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.parties = response
                }
                )
}

export const fetchParents = () => {
    return fetch(`${API}/parents`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.parents = response
                }
                )
}

export const fetchChildren = () => {
    return fetch(`${API}/children`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.children = response
                }
                )
}

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.clowns = response
                }
                )
}

export const fetchClownParties = () => {
    return fetch(`${API}/clownParties`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.clownParties = response
                }
                )
}

export const fetchparentsChild = () => {
    return fetch(`${API}/parentsChild`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.parentsChild = response
                }
                )
}

export const fetchData = () => {
    return fetchClowns()
    .then(() => fetchParents())
    .then(() => fetchChildren())
    .then(() => fetchParties())
    .then(() => fetchClownParties())
    .then(() => fetchparentsChild())
}

// Send data to database.json

export const sendParty = (userParty) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userParty)
    }

    return fetch(`${API}/parties`, fetchOptions)
        .then(response => response.json())
}

export const sendParent = (userParent) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userParent)
    }

    return fetch(`${API}/parents`, fetchOptions)
        .then(response => response.json())
}

export const sendChild = (userChild) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userChild)
    }

    return fetch(`${API}/children`, fetchOptions)
        .then(response => response.json())
}

export const sendParentChild = (userParentChild) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userParentChild)
    }

    return fetch(`${API}/parentsChild`, fetchOptions)
        .then(response => response.json())
}

const mainContainer = document.querySelector("#container")

export const sendRequest = (party, parent, child, parentChild) => {
    return sendParty(party)
            .then(() => sendParent(parent))
            .then(() => sendChild(child))
            .then(() => sendParentChild(parentChild))
            .then(() => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            })
}


// get Data from application state
export const getParties = () => {
    return applicationState.parties.map(party => ({...party}))
}

export const getParents = () => {
    return applicationState.parents.map(parent => ({...parent}))
}

export const getChildren = () => {
    return applicationState.children.map(child => ({...child}))
}

export const getClowns = () => {
    return applicationState.clowns.map(clown => ({...clown}))
}

export const getParentsChild = () => {
    return applicationState.parentsChild.map(parentChild => ({...parentChild}))
}