/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".body")

eventHub.addEventListener("noteStateChanged", () => {
  const entries = useJournalEntries()
  contentTarget.innerHTML = ""
  contentTarget.innerHTML = entries.map(entry => {
    return JournalEntryComponent(entry)
  }).join("")
})

const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    const contentTarget = document.querySelector(".entryLog")

    for (const entry of entries) {
                /*
                  Invoke the component that returns an
                  HTML representation of a single entry
                */
               contentTarget.innerHTML += JournalEntryComponent(entry);
    }
}

export default EntryListComponent