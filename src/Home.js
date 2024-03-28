import React, { useState } from "react";
import './App.css'
let n=1
var index
const Home = () => {
    const [stkData, setStkData] = useState([])
    const [stackSize, setStackSize] = useState()
    const Create = () => {
       if(stackSize >= 1) {
        document.querySelector(".StOperation").style.display = "block"
        const target = document.querySelector('.outstackebox')
        const remove = document.querySelector('.stacksizebox')
        target.removeChild(remove)
        target.setAttribute('class','stacksizebox')
        target.style.border = '2px solid'
        target.style.borderTop = 'none'
        target.style.paddingTop = '30px'
        
        index = 0

        for(var i=0;i<stackSize;i++) {
           target.insertAdjacentHTML('beforeend',"<div class='block'></div><br/>")
        }
       }
    }

    return (
       <div className="outerDiv">
           <div>
              <h2>STACK OPERATION</h2>
           </div>
           <div className="outstackebox">
             <div className="stacksizebox">
              <div>
                  <input type="Number" min='1' placeholder="ENTER STACK SIZE" value={stackSize} onChange={(e) => setStackSize(e.target.value)}required className="input" style={{borderRadius:'5px 0px 0px 5px',paddingLeft:'25px',textAlign:'center'}}/>
              </div>
              <div className="CreateStack">
                  <input type="button" value= "CREATE" className="input"  style={{borderRadius:'0px 5px 5px 0px',backgroundColor:'blue',color:'white',padding:'5px 20px'}} onClick={() => Create()}/>
              </div>
             </div>
           </div>
           <div className="StOperation">
                 <div>
                    <a href="" style={{borderRadius:'5px 0px 0px 5px'}} onClick={( event ) => {
                        event.preventDefault()
                        if( stackSize <= stkData.length)
                           return alert("Stack Full...")

                        stkData.push(prompt("Enter the value "))
                        setStkData(stkData)
                        stkData.map( (dt,ind) => {
                           return (
                               document.querySelectorAll(".block")[stackSize-(ind+1)].innerHTML=dt
                           )
                        })

                       if(document.querySelectorAll(".block").length>=n) {
                        const k = prompt("Enter the value ")
                        console.log("hfg "+n)
                        setStkData([...stkData,k])
                        console.log(stkData)
                        const t = document.querySelectorAll(".block").length-n++
                        console.log(document.querySelectorAll(".block")[t].innerHTML=k)
                       } else {
                         alert("Stack is full....")
                       }

                    }}>PUSH</a>
                 </div>
                 <div>
                    <a href="" onClick={( event) => {
                       event.preventDefault()
                      
                       const poped = stkData.pop()
                       setStkData(poped)
                       console.log(stkData)
                       document.querySelectorAll(".block")[index++].innerHTML = ""
                       
                      

                       document.querySelector('.stkdata').innerHTML = ""
                       stkData.map( (dt,ind) => {
                        return (
                            document.querySelectorAll(".block")[stackSize-(ind+1)].innerHTML=dt
                        )
                     })
                    }}>POP</a>
                 </div>
                 <div>
                    <a href="" style={{borderRadius:'0px 5px 5px 0px'}} onClick={( event) => {
                       event.preventDefault()
                       document.querySelector('.stkdata').innerHTML = ""
                       stkData.map( (dt, ind) => {
                          return (
                            document.querySelector('.stkdata').insertAdjacentHTML('beforeend',`<span>${stkData[stkData.length-(ind+1)]}</span>`)
                          )
                       })
                    }}>SHOW</a>
                 </div>
             </div>
             <div className="stkdata"></div>
       </div>
    )
}
export default Home