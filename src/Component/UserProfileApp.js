import {useState} from "react"
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import "../Style/Userapp.css";
import { People } from "./People";


const UserProfileApp = () => {
        const [filteredName, setFilteredName] = useState("");

        const handleFilteredChange = (event) => {
            setFilteredName(event.target.value.toLowerCase())
            //console.log())
        }
        
        //const filtered = People.filter(person => {
          // return People.firstName.toLowerCase()=== "filtered" || People.lastName.toLowerCase() === "filtered"
           // })
           //console.log(filtered)

    return (
        <div className="body">
            <div className="appContainer">
                <SearchBar value = {filteredName} onChange={handleFilteredChange} />            
                  <Profile/> 
                
            </div>
        </div>
    )
}

export default UserProfileApp;