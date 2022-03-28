let apiEmployeeApi = new TempApi.EmployeeApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();
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
    let employeeId = window.location.pathname.replace('/updateEmployee/','');let employee = new TempApi.Employee();employee['eName'] = document.querySelector("[annotationname = 'eName']").value;employee['eSurname'] = document.querySelector("[annotationname = 'eSurname']").value;employee['eImage'] = {
        data: document.querySelector("[annotationname = 'eImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'eImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'eImage']").src,
        name: document.querySelector("[annotationname = 'eImage']").getAttribute("name")
      };employee['eProjects'] = document.querySelector("[annotationname = 'eProjects']").textContent; let opts = {employee};apiEmployeeApi.updateemployee( employeeId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); document.querySelector('[annotationname = eName]').value = response.body.query.eName ;document.querySelector('[annotationname = eSurname]').value = response.body.query.eSurname ;
      if(response.body.query.eImage !== undefined){

        if(document.querySelector('[annotationname = eImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = eImage]').setAttribute('data-image-base64',response.body.query.eImage.data);
        }
        else{
          document.querySelector('[annotationname = eImage]').src = response.body.query.eImage.data;
        }
        document.querySelector('[annotationname = eImage]').name = response.body.query.eImage.name;
      }
      document.querySelector('[annotationname = eProjects]').textContent = response.body.query.eProjects ;{  location.href= '/homepage/'+response.body.query._id+'' ;}}});};window.onload = () => {let employeeId = window.location.pathname.replace('/updateEmployee/','');apiEmployeeApi.getemployee( employeeId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = eName]').value = response.body.query.eName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = eSurname]').value = response.body.query.eSurname; } catch (e) { console.log(e) };try { 
      if(response.body.query.eImage !== undefined){
        if(document.querySelector('[annotationname = eImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = eImage]').setAttribute('data-image-base64',response.body.query.eImage.data);
          let fileName = response.body.query.eImage.name;
          let file = new File([response.body.query.eImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = eImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = eImage]').src = response.body.query.eImage.data ;
        }
        document.querySelector('[annotationname = eImage]').name = response.body.query.eImage.name ;
      }
       } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = eProjects]').setAttribute('selected-element',response.body.query.eProjects.projectTitle);
        const insideSubdocument = document.querySelector("[annotationname = 'eProjects']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.eProjects;
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
      
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.eProjects._id){
        map.set(
          document.querySelector(
            "[annotationname = 'eProjects']"
          ).getAttribute("id"),
          response.body.query.eProjects
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiProjectApi.getAllproject((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ipki6").querySelectorAll( "[dataitem='true']" )].filter(
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