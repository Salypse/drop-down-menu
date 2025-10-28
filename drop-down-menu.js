function dropDownMenu(dropDownMenu) {
    this.dropDownMenu = dropDownMenu
    this.dropDownHeader = dropDownMenu.children[0]
    this.dropDownItems = dropDownMenu.children[1]

    this.dropDownItems.style.visibility = "hidden"

    // Opens/Closes drop down menu based on current state
    this.dropDownHeader.addEventListener("click", () => {
        changeMenuVisibility()
    })

    // Closes Menu when a menu item is clicked
    this.dropDownItems.addEventListener("click", () => {
        changeMenuVisibility()
    })

    // If user clicks outside of menu while visible then close menu
    document.addEventListener("click", (event) => {
        if (!dropDownMenu.contains(event.target) && this.dropDownItems.style.visibility === "visible") {
            changeMenuVisibility()
        }
    })

    const changeMenuVisibility = () => {
        if (this.dropDownItems.style.visibility === "hidden") {
            this.dropDownItems.style.visibility = "visible";
        } else {
            this.dropDownItems.style.visibility = "hidden";
        }
    }
}

const testDropDownDiv1 = document.querySelector(".drop-down-menu")
let testMenu1 =  new dropDownMenu(testDropDownDiv1)