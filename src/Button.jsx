function Button(){
// const handleClick = () => console.log('ouch');

// const handleClick2 = (name) => console.log(`${name} Stom clicking me`);

// let count = 0;
// const handleClick = (name) => {
//     if(count < 3){
//         count++;
//         console.log(`${name} you clicked me ${count} Times`);
//          }
//          else{
//             console.log(`${name} stop clicking me!!!!!!!!!!!!`);
            
//          }
// }


const handleClick = (e) => e.target.textContent = 'Ouch!! 🥲'

return(<button onDoubleClick={(e) => handleClick(e)}>Click ME 😗</button>)

// return(<button onClick={(e) => handleClick(e)}>Click ME 😗</button>)

}

export default Button