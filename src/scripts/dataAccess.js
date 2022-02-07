const applicationState = [

]

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

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }


    return fetch(`${API}/requests`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}