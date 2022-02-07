import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./Requests.js"

export function ClownPage() {
    return `
        <h1>Buttons Clown Service</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="parties">
            <h2>Scheduled Parties</h2>
            ${Requests()}
        </section>
    `
}