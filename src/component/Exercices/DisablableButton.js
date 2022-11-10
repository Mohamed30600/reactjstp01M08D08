import React, {  useState } from 'react';

const DisablableButton = () => {
    const [disabled, setDisabled] = useState(true);

    const handleClick = ()=>{
        if(disabled){
            setDisabled(false)
        }else{
            setDisabled(true)
        }

    }
    
    return disabled ?(
        
        <div>
              <button className='pure-material-button' onClick={()=>{handleClick()}} >cliquez pour me desactiver</button>
        </div>
    ) :(
        <div>
            <h4>le bouton est desactiver</h4>
        </div>
    );
};

export default DisablableButton;