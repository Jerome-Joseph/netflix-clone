import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Nav from '../components/Nav'
import "../components/styles/ProfileScreen.css"
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'

const ProfileScreen = () => {
    const user = useSelector(selectUser);

    const [click, setClick] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);

    const handleClick =()=>{
        click ? setClick(false) : setClick(true)
    }
    const handleClick2 =()=>{
        click2 ? setClick2(false) : setClick2(true)
    }
    const handleClick3 =()=>{
        click3 ? setClick3(false) : setClick3(true)
    }

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;

  return (
    <div className='profileScreen'>
        <Nav />
        <div className="profile__body">
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
                <div className="profile__details">
                    <h2>{user.email}</h2>
                    <div className="profile__plans">
                        <h3>Plans</h3>
                        {click && <p>Renewal date: {today}</p>}
                        {click2 && <p>Renewal date: {today}</p>}
                        {click3 && <p>Renewal date: {today}</p>}
                        <div className={`${click && "plans__disable"} plans`}>
                            <div className="info">
                                <h5>Basic</h5>
                                <h6>720p</h6>
                            </div>
                            <button onClick={()=>handleClick()}>
                                {!click ? "Subscribe" : "Unsubscribe"}
                            </button>
                        </div>
                        <div className={`${click2 && "plans__disable"} plans`}>
                            <div className="info">
                                <h5>Standard</h5>
                                <h6>1080p</h6>
                            </div>
                            <button onClick={()=>handleClick2()}>
                                {!click2 ? "Subscribe" : "Unsubscribe"}
                            </button>
                        </div>
                        <div className={`${click3 && "plans__disable"} plans`}>
                            <div className="info">
                                <h5>Premium</h5>
                                <h6>4K + HDR</h6>
                            </div>
                            <button onClick={()=>handleClick3()}>
                                {!click3 ? "Subscribe" : "Unsubscribe"}
                            </button>
                        </div>
                        <button onClick={()=> auth.signOut()} className='profile__signOut'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen