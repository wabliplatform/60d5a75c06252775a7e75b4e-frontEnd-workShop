let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';let task = new TempApi.Task();$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );$(
      function () { $("#datepicker-2").datepicker({format: 'dd-mm-yyyy'}); }
    );document.getElementById('ix6u5').onclick = (event) => {
    event.preventDefault();
    task['tName'] = document.querySelector("[annotationname = 'tName']").value;task['tStart'] = document.querySelector("[annotationname = 'tStart']").value;task['tEnd'] = document.querySelector("[annotationname = 'tEnd']").value;task['tDescription'] = document.querySelector("[annotationname = 'tDescription']").value;task['tPMs'] = document.querySelector("[annotationname = 'tPMs']").value;apiTaskApi.createtask( task, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); }});};window.onload = () => {};