export const EntryForm = () => {
    return `
        <form action="" class="form">
            <fieldset class="formitem">
                <label for="journalDate" class="bold">Date of Entry</label>
                <input type="date" name="journalDate" id="journalDate" class="width100">
            </fieldset>
            <fieldset class="formitem">
                <label for="journalConcept" class="bold">Concepts covered</label>
                <input type="text" name="journalConcept" id="journalConcept" class="width100">
            </fieldset>
            <fieldset class="formitem">
                <label for="journalEntry" class="bold">Journal Entry</label>
                <textarea rows="8" cols="60" name="journalEntry" id="journalEntry" class="width100"></textarea>
            </fieldset>
            <fieldset class="formitem">
                <label for="journalMood" class="bold">Mood for the Day</label>
                <select name="journalMood" id="journalMood">
                    <option value="Very sad">Very sad</option>
                    <option value="Sad">Sad</option>
                    <option value="Soso" selected>Okay</option>
                    <option value="Happy">Happy</option>
                    <option value="PUMPED">PUMPED</option>
                </select>
            </fieldset>
        <button type="submit" id="submitEntry" class="button">Record Journal Entry</button>
        </form>
    `
}