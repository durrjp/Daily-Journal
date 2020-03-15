
export const importDashboard = () => {
    const contentTarget = document.querySelector(".container")
    contentTarget.innerHTML = `
        <div class="leftContainer">
            <h1 class="container__header">Daily Journal<div class="name">Jon Durr</div></span></h1>
            <div class ="entryForm"></div>
        </div>
        <section class="entryLog timeline"></section>
    `
}