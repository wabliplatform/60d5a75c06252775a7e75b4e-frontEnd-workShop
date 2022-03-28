let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let apiProjectApi = new TempApi.ProjectApi();let project = new TempApi.Project();document.getElementById('ihdav').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homepage' ;}};document.getElementById('i8gzk').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};
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
$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.addEventListener('alignprojectWp', function(e) {
  const advanceSelect = document.getElementById('i5i53y');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.addEventListener('alignprojectWp', function(e) {
  const advanceSelect = document.getElementById('i7vqt');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i905gh').onclick = (event) => {
    event.preventDefault();
    {  window.open('/createWorkpackage' ,"_blank", 'width=600, height=600, location=yes');}};document.getElementById('ibuy1').onclick = (event) => {
    event.preventDefault();
    project['projectImage'] = {
        data: document.querySelector("[annotationname = 'projectImage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'projectImage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'projectImage']").src,
        name: document.querySelector("[annotationname = 'projectImage']").getAttribute("name")
      };
      project['projectTitle'] = document.querySelector("[annotationname = 'projectTitle']").value;project['projectStartDate'] = document.querySelector("[annotationname = 'projectStartDate']").value;project['projectWebsite'] = document.querySelector("[annotationname = 'projectWebsite']").value;project['projectEndDate'] = document.querySelector("[annotationname = 'projectEndDate']").value;project['projectDuration'] = document.querySelector("[annotationname = 'projectDuration']").value;project['projectGA'] = document.querySelector("[annotationname = 'projectGA']").value;project['projectAbstract'] = document.querySelector("[annotationname = 'projectAbstract']").value;project['projectDescription'] = document.querySelector("[annotationname = 'projectDescription']").value;project["projectWp"] = [...document.querySelector("[annotationname = 'projectWp']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiProjectApi.createproject( project, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/homepage/'+response.body.query._id+'' ;}}});};window.onload = () => {document.addEventListener('aligngetAllWorkpackages', function(e) {
  const advanceSelect = document.getElementById('ijawhs');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});};