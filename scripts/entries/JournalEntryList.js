/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, deleteEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryLog")
const eventHub = document.querySelector(".body")

eventHub.addEventListener("noteStateChanged", () => {
  EntryListComponent()
})

const render = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    const contentTarget = document.querySelector(".entryLog")
    let rightSide = true
    contentTarget.innerHTML = entries.map(entry => {
      rightSide = !rightSide
      if(rightSide) {
        return JournalEntryComponent(entry, "right")
      } else {
        return JournalEntryComponent(entry, "left")
      }
    }).join("")
}

export const EntryListComponent = () => {
  render()
}

//delete journal entries
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteEntry--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      /*
          Invoke the function that performs the delete operation.
          Once the operation is complete you should THEN invoke
          useNotes() and render the note list again.
      */
     deleteEntry(id).then(EntryListComponent)
  }
})