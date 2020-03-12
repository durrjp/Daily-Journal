import { EntryForm } from "./entryForm.js"

const contentTarget = document.querySelector(".entryForm")
const eventHub = document.querySelector(".body")

contentTarget.addEventListener("click", event => {
    if(event.target.id === "submitEntry") {
        const saveClickEvent = new CustomEvent("saveClicked", {
            detail: {
                date: document.getElementById("journalDate").value,
                concept: document.getElementById("journalConcept").value,
                entry: document.getElementById("journalEntry").value,
                mood: document.getElementById("journalMood").value
            }
        })
    eventHub.dispatchEvent(saveClickEvent)
    }
})

export const makeForm = () => {
    contentTarget.innerHTML = EntryForm()
}