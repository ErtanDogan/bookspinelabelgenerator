import './App.css'
import {useState} from 'react'
import {Page, Text, View, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'

function LargeType({largeType, setLargeType}){
  return (
    <>
        <h3>Large Type Tag: </h3>
        <input type="checkbox" id="LT" onChange={(event) => {
          if (event.target.checked){
            setLargeType("LT")
          } else {
            setLargeType("")
          }
        }}></input>
        <label for="LT">(LT) Large Type</label>
        <br></br>
    </>
  )
}

function Author({setName, tag, setShownName}) {
  let text = "Author Last Name"
  if (tag == "B") {
    text = "Subject Last Name"
  }
  
  return (
    <>
        <h3>{text}: </h3>
        <input type="text" id="Author" onChange={(event) => {
          if (tag == "B"){
            setName(event.target.value.toUpperCase())
            setShownName(event.target.value.toUpperCase())
          } else {
            setName(event.target.value.toUpperCase())
            setShownName(event.target.value.toUpperCase().slice(0, 3))
          }
          }}></input>
        <br></br>
    </>
  )
}
function Language({langValue, setLangValue}) {
    return (
        <>
            <h3>Language (Default is English): </h3>
            <input type="radio" id="English" name = "Language" defaultChecked value="" onChange={(event) => setLangValue(event.target.value)}/>
            <label for="English">(None) English</label><br />
            <input type="radio" id="CH" name = "Language" value="CH" onChange={(event) => setLangValue(event.target.value)}/>
            <label for="CH">(CH) Chinese</label><br />
            <input type="radio" id="SP" name = "Language" value="SP" onChange={(event) => setLangValue(event.target.value)}/>
            <label for="SP">(SP) Spanish</label><br />
        </>
    )
}
function AgeTag({ageValue, setAgeValue}) {
    return (
        <>
            <h3>Age Group: </h3>
            <input type="radio" id="Adult" name="AgeTag" value="Adult" onChange={(event)=>{
              setAgeValue("")
              }}></input>
            <label for="Adult">(None) Adult</label><br></br>
            <input type="radio" id="J" name="AgeTag" value="J" onChange={(event)=>{
              setAgeValue("J")
              }}></input>
            <label for="J">(J) Junior</label><br></br>
            <input type="radio" id="Teen" name="AgeTag" value="Teen" onChange={(event)=>{
              setAgeValue("TEEN")
              }}></input>
            <label for="Teen">(TEEN) Teen</label><br></br>
        </>
    )
}
function SectionTag ({setSectionValue, setDecimal, decimal, sectionValue, setName, name}) {
    return (
        <>
            <h3>Section: </h3>
            <input type="radio" id="F" name="SectionTag" value="F" onClick={()=>{
                setSectionValue("F")
                setName(name.toUpperCase().slice(0, 3))
              }}></input>
            <label for="F">(F) Fiction</label><br></br>
            <input type="radio" id="B" name="SectionTag" value="B" onClick={()=>{
                setSectionValue("B")
                setName(name.toUpperCase())
              }}></input>
            <label for="B">(B) Biography</label><br></br>
            <input type="radio" id="NF" name="SectionTag" value="NF" onClick={()=>{
                setSectionValue(decimal)
                setName(name.toUpperCase().slice(0, 3))
              }}></input>
            <label for="NF">(NF) Nonfiction </label>
            <input type="text" id="Decimal" name="SectionTag" onChange={(event) => {
              setDecimal(event.target.value);
              if(!(sectionValue == "F" || sectionValue == "B")){
                setSectionValue(event.target.value)
              }
            }}/><br></br>
            <input type="radio" id="SF" name="SectionTag" value="SF" onClick={()=>{
                setSectionValue("SF")
                setName(name.toUpperCase().slice(0, 3))
              }}></input>
            <label for="SF">(SF) Science Fiction </label><br></br>
            <input type="radio" id="M" name="SectionTag" value="M" onClick={()=>{
                setSectionValue("M")
                setName(name.toUpperCase().slice(0, 3))
              }}></input>
            <label for="M">(M) Mystery </label><br></br>
            <input type="radio" id="P" name="SectionTag" value="P" onClick={()=>{
                setSectionValue("P")
                setName(name.toUpperCase().slice(0, 3))
              }}></input>
            <label for="P">(P) Picture Book </label><br></br>
            <input type="radio" id="R" name="SectionTag" value="R" onClick={()=>{
                setSectionValue("R")
                setName(name.toUpperCase().slice(0, 3))
              }}></input>
            <label for="R">(R) Reference </label><br></br>
        </>
    )
}


const styles = StyleSheet.create({
  page: {
    color: 'black',
    backgroundColor: 'white',
  },
  section: {
    marginTop: '20%',
  },
  text: {
    fontSize: 10,
    textAlign: 'center'
  }
});

function MyDocument({largeType, age, lang, section, name}) {
  let text = ''
  if (largeType != ""){
    text = text + largeType + "\n"
  }
  if (age != ""){
    if (section != "P"){
      text = text + age + "\n"
    }
  }
  if (lang != ""){
    text = text + lang + "\n"
  }
  if (section != ""){
    text = text + section + "\n"
  }
  if (name != ""){
    text = text + name + "\n"
  }
  
  return(
    <Document>
      <Page size={[72,72]} style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </Page>
    </Document>
  )
}

function App() {
  const [authorName, setAuthorName] = useState("")
  const [shownName, setShownName] = useState("")
  const [lang, setLang] = useState("")
  const [age, setAge] = useState("")
  const [sectionTag, setSectionTag] = useState("F")
  const [nfDecimal, setNfDecimal] = useState("0.0")
  const [largeType, setLargeType] = useState("")

  return (
    <>
      <div class = 'top'>
        <h1>Book Spinelabel Generator</h1>
      </div>
      <div class='options'>
        <h2>Parameters:</h2>
        <LargeType largeType={largeType} setLargeType={(param) => setLargeType(param)} />
        <AgeTag ageValue={age} setAgeValue={(param)=>setAge(param)}/>
        <Language langValue={lang} setLangValue={(param) => setLang(param)}/>
        <SectionTag setSectionValue={(param) => setSectionTag(param)} setDecimal={(param) => setNfDecimal(param)} decimal={nfDecimal} sectionValue={sectionTag} setName={(param) => setShownName(param)} name={authorName}/>
        <Author setName={(param) => setAuthorName(param)} tag={sectionTag} setShownName={(param) => setShownName(param)}/>
      </div>
     
      <div class="output">
        <h2>Download and Print:</h2>
        <PDFDownloadLink document={<MyDocument largeType={largeType} age={age} lang={lang} section={sectionTag} name={shownName} />} fileName="test.pdf">
          Download And Print
        </PDFDownloadLink>
        <br />
        <br />
        <PDFViewer width='500px' height='300px'>
          <MyDocument largeType={largeType} age={age} lang={lang} section={sectionTag} name={shownName}/>
        </PDFViewer>
      </div>
     
      
    </>
  )
}

export default App
