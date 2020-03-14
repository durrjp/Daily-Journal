/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entryitem) => {
    return `
        <section id="entry--${entryitem.id}" class="journalEntry">
            <div class="entryHeader">${entryitem.date}</div>
            <div><span class="entryDetails">Concept</span>: ${entryitem.concept}</div>
            <div><span class="entryDetails">Entry</span>: ${entryitem.entry}</div>
            <div><span class="entryDetails">Overal Mood</span>: ${entryitem.mood}</div>
        </section>
    `
}

export default JournalEntryComponent