/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entryitem) => {
    return `
        <section id="entry--${entryitem.id}" class="journalEntry">
            <div>Date: ${entryitem.date}</div>
            <div>Concept: ${entryitem.concept}</div>
            <div>Entry: ${entryitem.entry}</div>
            <div>Overal Mood: ${entryitem.mood}</div>
        </section>
    `
}

export default JournalEntryComponent