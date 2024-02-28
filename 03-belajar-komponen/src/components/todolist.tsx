import Image from "next/image";

const baseUrl = 'https://i.imgur.com';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
  imageSize: 's',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }


// export default function TodoList() {
//     return (
        
//         <><h1>Daftar Tugas Putri</h1>
//         <Image
//             src="https://i.imgur.com/yXOvdOSs.jpg"
//             alt="Putri"
//             width={100}
//             height={100}
//             style={{
//             maxWidth: "100%",
//             height: "auto",
//             margin: "13px"
//         }}
//              />
//             <div>
//             <ul>
//                 <li>Mengerjakan Pr</li>
//                 <li>Pergi Belanja</li>
//                 <li>Minum Vitamin</li>
//             </ul>    
//             </div></>
        
//     );
//   }