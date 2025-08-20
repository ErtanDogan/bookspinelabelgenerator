function Language() {
    return (
        <>
            <h3>Language (Default is English)</h3>
            <input type="radio" id="English" name = "Language" defaultChecked/>
            <label for="English">(None) English</label><br />
            <input type="radio" id="CH" name = "Language"/>
            <label for="CH">(CH) Chinese</label><br />
            <input type="radio" id="SP" name = "Language"/>
            <label for="SP">(SP) Spanish</label><br />
        </>
    )
}

export default Language