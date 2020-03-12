import EntryListComponent from "./JournalEntryList.js";
import { getEntries } from "./JournalDataProvider.js";
import { makeForm } from "./entryForm/entryFormImport.js";


makeForm()
getEntries().then(
EntryListComponent
)