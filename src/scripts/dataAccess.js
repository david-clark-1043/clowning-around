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

export const fetchParentParties = () => {
    return fetch(`${API}/parentParties`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.parentParties = response
                }
                )
}

export const fetchChildParties = () => {
    return fetch(`${API}/childParties`)
            .then(response => response.json())
            .then(
                (response) => {
                    applicationState.childParties = response
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
    .then(() => fetchParentParties())
    .then(() => fetchChildParties())
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

export const sendParentParty = (userParentParty) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userParentParty)
    }

    return fetch(`${API}/parentParties`, fetchOptions)
        .then(response => response.json())
}

export const sendChildParty = (userChildParty) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userChildParty)
    }

    return fetch(`${API}/childParties`, fetchOptions)
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

export const sendRequest = (party, parent, child, parentParty, childParty, parentChild) => {
    return sendParty(party)
            .then(() => sendParent(parent))
            .then(() => sendChild(child))
            .then(() => sendParentParty(parentParty))
            .then(() => sendChildParty(childParty))
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

export const getParentParties = () => {
    return applicationState.parentParties.map(parentParty => ({...parentParty}))
}

export const getChildParties = () => {
    return applicationState.childParties.map(childParty => ({...childParty}))
}

export const getParentsChild = () => {
    return applicationState.parentsChild.map(parentChild => ({...parentChild}))
}