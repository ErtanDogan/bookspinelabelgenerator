function SectionTag () {
    return (
        <>
            <h3>Section: </h3>
            <input type="radio" id="F" name="SectionTag"></input>
            <label for="F">(F) Fiction</label><br></br>
            <input type="radio" id="B" name="SectionTag"></input>
            <label for="B">(B) Biography</label><br></br>
            <input type="radio" id="NF" name="SectionTag"></input>
            <label for="NF">(NF) Nonfiction </label>
            <input type="text" id="Decimal" name="SectionTag"/>
        </>
    )
}

export default SectionTag