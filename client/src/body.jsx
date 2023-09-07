import React, { useState } from 'react'
import axios from 'axios'
import './body.css'

function BODY() {
  const [listing, setListing] = useState('');
  const[inputdata,setInputdata]=useState([]);

  const updateInputData=(value)=>{
    const updatedData=[...inputdata].concat(value);
    setInputdata(updatedData)
  }

  function kebabpost (){
    console.log({listing: listing})
    axios.post('http://localhost:5000/pascal', {listing: listing}).
    then(res=> {console.log(res); updateInputData(res.data);})
    .catch(err=> console.log(err))
  }

  function convertToKebabCase() {
    axios.post('http://localhost:5000/pascal', {listing: listing})
    const inputText = document.getElementById('output').value;
    const kebabCaseText = inputText.replace(/\s+/g, '-').toLowerCase();
    setListing(kebabCaseText)
    setInputdata(kebabCaseText)
}
function kebab(){
kebabpost()
convertToKebabCase()
}

function pascalpost (){
  console.log({listing: listing})
  axios.post('http://localhost:5000/pascal', {listing: listing}).
  then(res=> {console.log(res); updateInputData(res.data);})
  .catch(err=> console.log(err))
}
function convertTopascalCase() {
  axios.post('http://localhost:5000/pascal', {listing: listing})
  const inputText = document.getElementById('output').value;
const words = inputText.split(/\s+/);
const pascalCaseText = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}).join(' ');
  setListing(pascalCaseText)
  setInputdata(pascalCaseText)
}
function pascal(){
  pascalpost()
  convertTopascalCase()
}

function snakepost (){
  console.log({listing: listing})
  axios.post('http://localhost:5000/pascal', {listing: listing}).
  then(res=> {console.log(res); updateInputData(res.data);})
  .catch(err=> console.log(err))
}
function convertTosnakeCase() {
  axios.post('http://localhost:5000/pascal', {listing: listing})
  const inputText = document.getElementById('output').value;
  const snakeCaseText = inputText.replace(/\s+/g, '_').toLowerCase();
  setListing(snakeCaseText)
  setInputdata(snakeCaseText)
}
function snake(){
  snakepost()
  convertTosnakeCase()
}

function camelpost (){
  console.log({listing: listing})
  axios.post('http://localhost:5000/pascal', {listing: listing}).
  then(res=> {console.log(res); updateInputData(res.data);})
  .catch(err=> console.log(err))
}
function convertTocamelCase() {
  axios.post('http://localhost:5000/pascal', {listing: listing})
  const inputText = document.getElementById('output').value;
  const words = inputText.split(/\s+/);
            const camelCaseText = words.map((word, index) => {
                if (index === 0) {
                    return word.toLowerCase();
                } else {
                    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                }
            }).join(' ');
  setListing(camelCaseText)
  setInputdata(camelCaseText)
}
function camel(){
  camelpost()
  convertTocamelCase()
}


  return (
   <div>
     <div id='main'>
 <div id='div1'>
 
  <input id='input' type="text"  onChange={e=>setListing(e.target.value)} />

 </div>

 <div id='div2'>
<button id='snakeCase' onClick={snake}>Snake Case</button>
<button id='CamelCase' onClick={camel}>Camel Case</button>
<button id='PascalCase' onClick={pascal}  >Pascal Case</button>
<button id='KebabCase' onClick={kebab} >Kebab Case</button>
 </div>

 <div id='div3'>
 <input  id='output' value={listing} />
 </div>

    </div>
    <br />
 <div id='div4' className='container' >
    <h4 style={{color:"rgb(53, 55, 58)"}}>The caseConverter classifield by four camel case, snake case, kebab case, and Pascal case</h4>
 </div>
 <div id='div5'>
 <h4 style={{color:"rgb(53, 55, 58)"}}>Each case have different naming conventions and this web page is used for to convert the different naming conventions by clicking buttons</h4>
 </div>
 <div>
<h4 style={{color:"rgb(31, 31, 31)"}}> &copy; Manoj.Projects</h4>
 </div>
   </div>
  )
}

export default BODY