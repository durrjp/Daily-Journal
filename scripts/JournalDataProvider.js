/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data. Can't Touch This.
const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "02/27/2020",
        concept: "Javascript",
        entry: "We learned some new javascript including HTML rendering automation.",
        mood: "Happy"
    },
    {
        date: "02/28/2020",
        concept: "HTML & CSS",
        entry: "Steve reviewed the code Globetrotters created for our first project. The biggest feedback was the nav bar needed better CSS style naming. I created it so I'll need to fix those styles!",
        mood: "Meh"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}