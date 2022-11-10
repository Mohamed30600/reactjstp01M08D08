import  React , { useState} from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/button";

const NewPeople = () => {

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [baffiche, setBaffiche] = useState(false);

    const identiter = () =>{
      setBaffiche(!baffiche)
    }
   

    return (
        <div>
        <TextField id="outlined-basic" label="Nom" variant="outlined" onChange={(e)=>{setNom(e.target.value)}}/>
        <TextField id="outlined-basic" label="Prenom" variant="outlined" onChange={(e)=> {setPrenom(e.target.value)}} />
        <Button variant="outlined" onClick={identiter}>valider</Button>
       { baffiche &&
        <p>votre Identiter est :<strong>{nom}  {prenom}</strong> </p>
        }
        
       
        </div>
    );
};

export default NewPeople;