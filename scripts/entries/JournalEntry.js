/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entryitem) => {
    if (entryitem.id%2 === 0) {
        const side = "left"
        return `
            <div class="containers ${side}">
                <section id="entry--${entryitem.id}" class="journalEntry content">
                    <div class="entryHeader">${new Date(entryitem.date).toLocaleDateString('en-US')}</div>
                    <div><span class="entryDetails">Concept</span>: ${entryitem.concept}</div>
                    <div><span class="entryDetails">Entry</span>: ${entryitem.entry}</div>
                    <div><span class="entryDetails">Overal Mood</span>: ${entryitem.mood}</div>
                </section>
            </div>
        `
    } else {
        const side = "right"
        return `
        <div class="containers ${side}">
            <section id="entry--${entryitem.id}" class="journalEntry content">
                <div class="entryHeader">${new Date(entryitem.date).toLocaleDateString('en-US')}</div>
                <div><span class="entryDetails">Concept</span>: ${entryitem.concept}</div>
                <div><span class="entryDetails">Entry</span>: ${entryitem.entry}</div>
                <div><span class="entryDetails">Overal Mood</span>: ${entryitem.mood}</div>
            </section>
        </div>
        `
    }
}

export default JournalEntryComponent