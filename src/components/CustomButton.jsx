//import "../Assets/CSS/CustomButton.css"
function CustomButton({name='default button',bgcolor='blue',cr='white'}){
    return(
        <div>
            <button 
            style = {{
                color:'black',
                backgroundColor:'greenyellow',
                fontSize:'20px',
                boxShadow:'2px 2px 3px',
                borderRadius:'10px',
                padding:'2%'

            }}
            >{name }
            </button>
        </div>
    )

    
}
export default CustomButton