let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';document.getElementById('iu416s').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iu416s")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homepage' ;}}});};document.getElementById('i283j3').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i283j3")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homepage' ;}}});};document.getElementById('inwwcw').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("inwwcw")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homepage' ;}}});};document.getElementById('idmb7q').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("idmb7q")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homepage' ;}}});};document.getElementById('i8d6af').onclick = (event) => {
    event.preventDefault();
    let taskId = window.location.pathname.replace('/viewTasks/','');
      if(taskId === '/viewTasks' || taskId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i8d6af")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            taskId = value._id;
            parentId = key;
          }
        });
      }
    apiTaskApi.deletetask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homepage' ;}}});};window.onload = () => {};