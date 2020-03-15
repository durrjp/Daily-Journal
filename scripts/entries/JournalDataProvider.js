
const eventHub = document.querySelector(".body")

const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    eventHub.dispatchEvent(noteStateChangedEvent)
}

let entries = []
export const getEntries = () => {
    return fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(parsedEntries => {
        entries = parsedEntries.slice()
        // What should happen when we finally have the array?
            }
        )
}

export const saveEntry = entry => {
    fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}

eventHub.addEventListener("saveClicked", event => {
    const newEntry = event.detail
    if ("date" in event.detail) {
    }
    saveEntry(newEntry)
})
/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
    const sortedByDate = entries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}