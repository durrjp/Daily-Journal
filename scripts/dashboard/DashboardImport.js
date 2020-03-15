import { Dashboard } from "./Dashboard.js";
import EntryListComponent from "../entries/JournalEntryList.js";
import { getEntries } from "../entries/JournalDataProvider.js";
import { makeForm } from "../entryForm/entryFormImport.js";


export const DashboardImport = () => {
    return `
    ${Dashboard()}
    ${makeForm()}
    ${getEntries().then(EntryListComponent)}
    `
}

