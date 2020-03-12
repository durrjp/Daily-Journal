export const EntryForm = () => {
    return `
        <form action="" class="form">
            <fieldset class="formitem">
                <label for="journalDate">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset class="formitem">
                <label for="journalConcept">Concepts covered</label>
                <input type="text" name="journalConcept" id="journalConcept">
            </fieldset>
            <fieldset class="formitem">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="journalEntry"></textarea>
            </fieldset>
            <fieldset class="formitem">
                <label for="journalMood">Mood for the Day</label>
                <select name="journalMood" id="journalMood">
                    <option value="Very sad">Very sad</option>
                    <option value="Sad">Sad</option>
                    <option value="Meh">Meh</option>
                    <option value="Happy">Happy</option>
                    <option value="PUMPED">PUMPED</option>
                </select>
            </fieldset>
        </form>
        <button type="submit" id="submitEntry">Record Journal Entry</button>
    `
}