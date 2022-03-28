let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';let apiEmployeeApi = new TempApi.EmployeeApi();let employee = new TempApi.Employee();
 const uploadImage = async (event) => {
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        return base64;
      };const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            let imageBase64 = await uploadImage(e);
        document.getElementById('formFile').setAttribute('data-image-base64' ,imageBase64);
        document.getElementById('formFile').setAttribute('name',e.target.files[0].name)
        });
const arrayiyadf = [];
document.getElementById("iskcr").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("ijb3j")
  arrayiyadf.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
    let e=``;
   for (let y=0; y<arrayiyadf.length; y++)
   {
     e += `<li arrayvalue='${arrayiyadf[y].value}'>${arrayiyadf[y].liValue}</li>`;
   }
   document.getElementById("i54iu").innerHTML = e;
};document.getElementById('iikqd').onclick = (event) => {
    event.preventDefault();
    employee['eName'] = document.querySelector("[annotationname = 'eName']").value;employee['eSurname'] = document.querySelector("[annotationname = 'eSurname']").value;employee['eImage'] = {
        data: document.querySelector("[annotationname = 'eImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'eImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'eImage']").src,
        name: document.querySelector("[annotationname = 'eImage']").getAttribute("name")
      };
      employee["eProjects"] = [...document.querySelector("[annotationname = 'eProjects']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiEmployeeApi.createemployee( employee, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/homepage/'+response.body.query._id+'' ;}}});};window.onload = () => {apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ipki6").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        console.log('There are no inside data elements');
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};