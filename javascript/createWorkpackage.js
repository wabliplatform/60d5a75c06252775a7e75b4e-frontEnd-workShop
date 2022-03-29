let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';let workpackage = new TempApi.Workpackage();document.getElementById('i811').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homepage' ;}};document.getElementById('iuhly').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('i3voj').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('iyefn').onclick = (event) => {
    event.preventDefault();
    workpackage['wpTitle'] = document.querySelector("[annotationname = 'wpTitle']").value;workpackage['wpPMS'] = document.querySelector("[annotationname = 'wpPMS']").value;workpackage['wpRole'] = document.querySelector("[annotationname = 'wpRole']").value;apiWorkpackageApi.createworkpackage( workpackage, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {  location.href= '/createProject/'+response.body.query._id+'' ;}}});};window.onload = () => {};