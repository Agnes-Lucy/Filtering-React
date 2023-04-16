import {useState} from "react"
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import "../Style/Userapp.css";
import {People} from "./People";


const UserProfileApp = () => {
    const [filteredName, setfilteredName] = useState([]);

        const handlefilteredChange = (e) => {
            setfilteredName (e.target.value.toLowerCase(e))
        }
        const searchName = (filteredName) => (Name) => Name.firstName.tolowercase().includes(filteredName) ||
        Name.lastName.toLowerCase().includes(filteredName)
    return (
        <div className="body">
            <div className="appContainer">
                <SearchBar value = {filteredName} onChange={handlefilteredChange} />
                {People.filter(searchName(filteredName)).map((person)=> {
                    return (
                        <Profile key={person.id}/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default UserProfileApp;