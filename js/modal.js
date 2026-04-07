var modal = {
    visible: false,
    header: "",
    body: "",
    exit: "",
    hide() {
        this.visible = false
    },
    show(t, c, d = "Close") {
        this.visible = true
        this.header = t
        this.body = c
        this.exit = d
    },
}
function StartModal() {
    modal.show(
        "Welcome",`
        <span style="font-size:14px">
            This is the big scary popup meant to tell you about the concept for this game, so to explain in homestuck terms, you will be choosing the starting aspects of a session, imagine it like choosing your players, as such it is recommended your first playthrough starts with TIME and/or SPACE as completing the game without these to start with is HARDER by A LOT.<br>
            So you have a few options here, you can choose your starting aspects yourself or go with the default selection (TIME,SPACE,BREATH,LIGHT)
            <div class="state1" style='cursor:pointer;margin-top:5px' onClick='player.StartingState = 0'>
                <h3 style:"font-size:20px">Default</h3>
            </div>
        </span>
        `,
        ""
    )
}