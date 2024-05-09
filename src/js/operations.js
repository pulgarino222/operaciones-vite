// function withforoff(){
//     for (const coder of coders) {
//         tbody.innerHTML += `
//         <tr>
//         <th scope="row">${coder.id}</th>
//         <td>${coder.name}</td>
//         <td>${coder.lastName}</td>
//         <td class="text-lowercase">${coder.email}<br>
//         <tr>`;
//       }
// }
// export function withforEach(coders,tbody){
//     coders.forEach(coder => {
//         tbody.innerHTML += `
//       <tr>
//       <th scope="row">${coder.id}</th>
//       <td>${coder.name}</td>
//       <td>${coder.lastName}</td>
//       <td class="text-lowercase">${coder.email}<br>
//       <tr>`
//     });
// }

// function withForIn(){
//     for (const index in coders) {
//         tbody.innerHTML += `
//           <tr>
//           <th scope="row">${coders[index].id}</th>
//           <td>${coders[index].name}</td>
//           <td>${coders[index].lastName}</td>
//           <td class="text-lowercase">${coders[index].email}<br>
//           <tr>`
//         }
// }

export function index(coders, tbody) {
  for (let i = 0; i < coders.length; i++) {
    tbody.innerHTML += `  
          <tr>
          <th scope="row">${coders[i].id}</th>
          <td>${coders[i].name}</td>
          <td>${coders[i].lastName}</td>
          <td class="text-lowercase">${coders[i].email}<br>
          <tr>`;
  }
}
