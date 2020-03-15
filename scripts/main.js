import EntryListComponent from "./entries/JournalEntryList.js";
import { getEntries } from "./entries/JournalDataProvider.js";
import { makeForm } from "./entryForm/entryFormImport.js";


makeForm()
getEntries().then(
EntryListComponent
)