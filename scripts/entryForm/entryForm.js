export const EntryForm = () => {
    return `
            <div class="buttonDiv">
                <button type="submit" id="submitEntry" class="button">Record Journal Entry</button>
            </div>
            <form class="form" action="">
                <fieldset class="formitem date">
                    <label for="journalDate" class="bold">Date of Entry</label>
                    <input type="date" name="journalDate" id="journalDate" class="width100">
                </fieldset>
                <fieldset class="formitem mood">
                    <label for="journalMood" class="bold">Mood for the Day</label>
                    <select name="journalMood" id="journalMood">
                        <option value="Very sad">Very sad</option>
                        <option value="Sad">Sad</option>
                        <option value="Okay" selected>Okay</option>
                        <option value="Happy">Happy</option>
                        <option value="PUMPED">PUMPED</option>
                    </select>
                </fieldset>
                <fieldset class="formitem concept">
                    <label for="journalConcept" class="bold">Concepts covered</label>
                    <input rows="5" type="text" name="journalConcept" id="journalConcept" class="conceptstext">
                </fieldset>
                <fieldset class="formitem text">
                    <label for="journalEntry" class="bold">Journal Entry</label>
                    <textarea rows="10" cols="40" name="journalEntry" id="journalEntry" class="width100"></textarea>
                </fieldset>
            </form>
            
    `
}