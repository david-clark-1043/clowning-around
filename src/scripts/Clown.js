import { RequestForm } from "./RequestForm.js"
import { Requests } from "./Requests.js"

export const clownPage = () => {
    return `
        <h1>Buttons Clown Service</h1>
        <section class="requestForm">
            ${RequestForm()}
        </section>

        <section class="parties">
            <h2>Scheduled Parties</h2>
            ${Requests()}
        </section>
    `
}