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
  tbody.innerHTML = "";

  for (let i = 0; i < coders.length; i++) {
    tbody.innerHTML += `  
          <tr>
          <th scope="row">${coders[i].id}</th>
          <td>${coders[i].name}</td>
          <td>${coders[i].lastName}</td>
          <td class="text-lowercase">${coders[i].email}<br>
          <td>
          <button type="button" data-id=${coders[i].id} class="btn btn-primary" >datils</button>
          <button type="button" data-id=${coders[i].id} class="btn btn-danger">delete</button>
          <button type="button" data-id=${coders[i].id} class="btn btn-warning">edit</button>
          </td>
          <tr>`;
  }
}

export function create(name, lastName, email, coders) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  };
  coders.push(newCoder);
  
}

export function Eliminar(e,coders){
  if (e.target.classList.contains("btn-danger")) {
    let idParaEliminar = e.target.getAttribute("data-id");
    console.log(idParaEliminar);

    // let versionLarge = e.target.parentelement.parentElement.parentElement.firstElementChild.TextContent
    // console.log(versionLarge);
    
    
    coders.forEach((coder,index) => {
      if (coder.id == idParaEliminar) {
        console.log("el coder fue encontrado listo para eliminar");
        coders.splice(index,1)
      }
    });
  }
  
}
