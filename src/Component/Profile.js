import "../Style/profile.css"
import {People} from "./People"
import { useState } from "react";




const Profile = () =>{

    const [filteredName, setFilteredName] = useState("");

    const handleFilteredChange = (event) => {
        setFilteredName(event.target.value)
    }

    const filtered = People.filter((person) => {
        const fullName = `${person.firstName}${person.lastName}`;
       return fullName.toLowerCase().includes(filteredName.toLowerCase())
          })
          console.log(filtered)

          // const firstnames = People.filter((person) => person.firstName === "firstname")
            //console.log(firstnames)

    return(
        <div className="body" >
            <div className="appContainer">
                <input type = "text" id="searchbar" placeholder = "search by name..." value = {filteredName} onChange={handleFilteredChange}/> 

                <div className="gridContainer">
                    {filtered.map((person) => {
                        return ( 
                            <li key={person.id}>
                                <div className="profile">
                                    <div className="personinfo">
                                        <img src={person.picture} alt="profile" />
                                        <div className="personData">
                                            <p>{person.id}</p> 
                                            <div className="personName"> 
                                                <p>{person.title}. </p>
                                                <p>{person.firstName}</p>
                                                <p>{person.lastName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </li>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Profile;