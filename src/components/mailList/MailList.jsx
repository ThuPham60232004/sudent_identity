// import "./mailList.css"

// const MailList = () => {
// const listItem = [
//   {
//     title: 'Asdswhqbf bnsmb',
//     des: 'How to make Card Flip effect in after effects in Tamil #aftereffects #motiongraphics #tamiltutorial',
//     imgageURL: 'https://th.bing.com/th/id/OIP.dYV00oMaFWUn4Q0QibkaUgHaHa?rs=1&pid=ImgDetMain',
//     bgColor: '#6ce3f2',
//     target: 'Any',
//     housing: 30,
//     movement: 13,
//     attack: "3.5s",
//     training: "6m",
//   },
//   {
//     title: 'Motion Graphics Basics',
//     des: 'Learn the fundamentals of motion graphics in this beginner tutorial #motiongraphics #tutorial',
//     imgageURL: 'https://th.bing.com/th/id/OIP.6JgM3bGh2wGsX5aslXcoWgHaFj?w=1600&h=1200&rs=1&pid=ImgDetMain',
//     bgColor: '#f5a623',
//     target: 'Beginner',
//     housing: 25,
//     movement: 10,
//     attack: "4s",
//     training: "5m",
//   },
//   {
//     title: 'Advanced VFX Techniques',
//     des: 'Master advanced visual effects using After Effects #vfx #aftereffects #advanced',
//     imgageURL: 'https://th.bing.com/th/id/OIP.tgE_ZBcyZMJMujDr5idvWQHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain',
//     bgColor: '#ff7f50',
//     target: 'Advanced',
//     housing: 40,
//     movement: 15,
//     attack: "2.8s",
//     training: "7m",
//   },
//   {
//     title: '3D Animation with Blender',
//     des: 'Get started with 3D animation using Blender #blender #3danimation #tutorial',
//     imgageURL: 'https://img.freepik.com/premium-photo/realistic-portrait-scifi-cyberpunk-men-cyber-suit-hightech-futuristic-man-from-future_968529-89205.jpg',
//     bgColor: '#c1ffd7',
//     target: 'Intermediate',
//     housing: 35,
//     movement: 12,
//     attack: "3.9s",
//     training: "6.5m",
//   },
//   {
//     title: 'Photoshop for Beginners',
//     des: 'Learn how to edit photos using Photoshop in this step-by-step guide #photoshop #beginner #photoediting',
//     imgageURL: 'https://th.bing.com/th/id/OIP.kMQTwFlp7_KHZ6is3iWi_gAAAA?w=473&h=626&rs=1&pid=ImgDetMain',
//     bgColor: '#c1e7ff',
//     target: 'Beginner',
//     housing: 20,
//     movement: 9,
//     attack: "4.5s",
//     training: "4m",
//   },
//   {
//     title: 'Cinematic Color Grading',
//     des: 'Enhance your videos with cinematic color grading techniques #colorgrading #cinematic #tutorial',
//     imgageURL: 'https://th.bing.com/th/id/OIP.8ZPoOzV0MHZwhtMEiwpd-AHaJQ?w=501&h=626&rs=1&pid=ImgDetMain',
//     bgColor: '#f6c1ff',
//     target: 'Advanced',
//     housing: 45,
//     movement: 16,
//     attack: "2.6s",
//     training: "8m",
//   },
// ];


// const backgroundWrapper = document.querySelector(".carousel_bg_wrapper");
// for(let i=0; i < listItem.length; i++){
//   backgroundWrapper.innerHTML += `
//   <img src="${listItem[i].imgageURL}" alt="" className="carousel_bg"/>
//   `;
// }

// const contentWrapper = document.querySelector(".content_wrapper");
// for(let i = 0; i < listItem.length; i++)
// {
//   contentWrapper.innerHTML += `
//     <div className="content">
//       <h1 className="name" style={"--i: 0">${listItem[i].name}}</h1>
//       <div className="describe" style={"--i: 1"}>
//         <p>${listItem[i].des}</p>
//       </div>
//       <ul className="properties" style={"--i: 2"}>
//         <li>
//           <span className="icon">
//             <img src="./img/collection.png" alt="" />
//           </span>
//           <span>Prefer target</span>
//           <span>${listItem[i].target}</span>
//         </li>
//            <li>
//           <span className="icon">
//             <img src="./img/collection.png" alt="" />
//           </span>
//           <span>Housing</span>
//           <span>${listItem[i].housing}</span>
//         </li>
//            <li>
//           <span className="icon">
//             <img src="./img/collection.png" alt="" />
//           </span>
//           <span>Movement</span>
//           <span>${listItem[i].movement}</span>
//         </li>
//            <li>
//           <span className="icon">
//             <img src="./img/collection.png" alt="" />
//           </span>
//           <span>Attack</span>
//           <span>${listItem[i].attack}</span>
//         </li>
//            <li>
//           <span className="icon">
//             <img src="./img/collection.png" alt="" />
//           </span>
//           <span>Training</span>
//           <span>${listItem[i].training}</span>
//         </li>
//       </ul>
//       <button style={"--i: 3"}>More detail</button>
//     </div>
//   `

  
// }
//   return (
//     <div className="carousel_component">
//       <div className="carousel_bg_wrapper"></div>
//       <div className="carousel_inner">
//         <div className="carousel_indicators">
//           <span className="line"></span>
//           <span className="number"></span>
//           <span className="number"></span>
//           <span className="number"></span>
//           <span className="number"></span>
//           <span className="number"></span>
//         </div>
//         <div className="carousel_control">
//           <button></button>
//           <button></button>
//         </div>
//         <div className="content_wrapper"></div>
//           <div className="slide_wrapper">
//             <div className="slide"></div>
//           </div>
//       </div>
//     </div>


  

//   )
// }

// export default MailList