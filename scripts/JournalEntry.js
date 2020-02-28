/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entryitem) => {
    return `
        <section id="entry--${entryitem.id}" class="journalEntry">
            ${entryitem.date}<br>
            We learned about ${entryitem.concept}.<br>
            Entry: ${entryitem.entry}<br>
            Overal Mood: ${entryitem.mood}<br><br><br>
        </section>
    `
}

export default JournalEntryComponent