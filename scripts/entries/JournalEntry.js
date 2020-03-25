/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entryitem, side) => {
            return `
            <div class="containers ${side}">
                <section id="entry--${entryitem.id}" class="journalEntry content">
                    <div class="entryHeader">${new Date(`${entryitem.date} CST`).toLocaleDateString('en-US')}</div>
                    <div><span class="entryDetails">Concept</span>: ${entryitem.concept}</div>
                    <div><span class="entryDetails">Entry</span>: ${entryitem.entry}</div>
                    <div><span class="entryDetails">Overal Mood</span>: ${entryitem.mood}</div>
                    <button id="deleteEntry--${entryitem.id}">Delete</button>
                </section>
            </div>
        `
}

export default JournalEntryComponent