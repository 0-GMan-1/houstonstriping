import {useRef} from 'react'
import {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import XLogo from '../assets/xlogo.png'
import sendEmail from '../Interactions/email'

const Alert = () => {
  const dispatch = useDispatch()

  const isQuote = useSelector(state => state.quote.started)
  const isQuoteComplete = useSelector(state => state.quote.completed)
  const [nameVal, setNameVal ]= useState('')
  const [lastNameVal, setLastNameVal ]= useState('')
  const [phone, setPhone ]= useState('')
  const [windows, setWindows ]= useState('')
  const [feet, setFeet ]= useState('')
  const [driveway, setDriveway ]= useState('')
  const [bulbs, setBulbs ]= useState('')
  const [stories, setStories ]= useState('')
  const [notes, setNotes ]= useState('')

  const [type, setType ]= useState('')

  const alertRef = useRef(null)
  const guildRef = useRef(null)
  const formRef = useRef(null)


  const removeHandler = async (e) => {
      alertRef.current.className='alert2 alert--remove'
      dispatch({type: 'QUOTE_DATARESET'})
    }

  const typeHandler = (e) => {
    setType(e.target.value)
  }

  const quoteHandler = (e) => {
    sendEmail(type, nameVal, lastNameVal, phone, windows, feet, driveway, bulbs, notes, e)
  }

  useEffect(() => {
    if(isQuote){
      alertRef.current.className = 'alert2'
    }
  }, [isQuote, isQuoteComplete])
  
  return (
    <div className='alertcontainer'>
        
        <div className="alert2 alert--remove" ref={alertRef}>
        <img src={XLogo} alt='Logos' className='close' onClick={removeHandler}/>
          <h1>QUOTE FOR <><select name="networks" id="networks" onChange={(e) => typeHandler(e)}>
          <option value="0" disabled>Select Quote Type</option>
          <option value='windows'>Window Cleaning</option>
          <option value='lights'>Holiday Lighting</option>
          <option value='powerwashing'>Power Washing</option>
          <option value='gutters'>Gutter Cleaning</option>
          <option value='snow'>Snow Removal</option>
        </select></></h1>
          <h1 className='alert2--warning--remove' ref={formRef}>Invalid Username or Password</h1>
            <div className='alert2--form'>    
              <form onSubmit={(e) => quoteHandler(e)}>
                <label>First and Last Name</label>
                <input className='alert2--input' onChange={(e) => setNameVal(e.target.value)}></input>
                <input className='alert2--input' onChange={(e) => setLastNameVal(e.target.value)}></input>

                <label>Phone Number</label>
                <input className='alert2--input' onChange={(e) => setPhone(e.target.value)}></input>
                
                {type === 'windows' ?
                (
                <div className='alertform--small'>
                  <label>Amount of Windows</label>
                  <input className='alert2--input' onChange={(e) => setWindows(e.target.value)}></input>
                </div>
                ) : type === 'lights' ? (
                <div className='alertform--small'>
                  <label>Estimated Feet</label>
                  <input className='alert2--input' onChange={(e) => setFeet(e.target.value)}></input>
                  <label>Bulb Colors</label>
                  <input className='alert2--input' onChange={(e) => setBulbs(e.target.value)}></input>
                </div>
                )
                : type === 'powerwashing' ? (
                  <div className='alertform--small'>
                    <label>Estimated Feet</label>
                    <input className='alert2--input' onChange={(e) => setFeet(e.target.value)}></input>
                    <label>Driveway? (yes or no)</label>
                    <input className='alert2--input' onChange={(e) => setDriveway(e.target.value)}></input>
                  </div>
                  )
                  : type === 'gutters' ? (
                    <div className='alertform--small'>
                      <label>Estimated Feet</label>
                      <input className='alert2--input' onChange={(e) => setFeet(e.target.value)}></input>
                    </div>
                  )
                  : (
                    <div className='alertform--small'>
                      <label>Estimated Feet</label>
                      <input className='alert2--input' onChange={(e) => setFeet(e.target.value)}></input>
                    </div>
                  )
                  
                }

                <label>Notes</label>
                <input className='alert2--notes' onChange={(e) => setNotes(e.target.value)}></input>
                

                <button className='button' type='submit'>Submit</button>
              </form>  
            </div>
        </div>
    </div>
  )
}

export default Alert;