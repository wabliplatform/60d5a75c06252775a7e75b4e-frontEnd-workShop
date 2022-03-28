let apiWorkpackageApi = new TempApi.WorkpackageApi();import TempApi from '../src/index';document.getElementById('iwp9m5').onclick = (event) => {
    event.preventDefault();
    let workpackageId = window.location.pathname.replace('/viewWorkpackages/','');
      if(workpackageId === '/viewWorkpackages' || workpackageId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iwp9m5")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            workpackageId = value._id;
            parentId = key;
          }
        });
      }
    apiWorkpackageApi.deleteworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iqla6f').onclick = (event) => {
    event.preventDefault();
    let workpackageId = window.location.pathname.replace('/viewWorkpackages/','');
      if(workpackageId === '/viewWorkpackages' || workpackageId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iqla6f")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            workpackageId = value._id;
            parentId = key;
          }
        });
      }
    apiWorkpackageApi.deleteworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('is1vh2').onclick = (event) => {
    event.preventDefault();
    let workpackageId = window.location.pathname.replace('/viewWorkpackages/','');
      if(workpackageId === '/viewWorkpackages' || workpackageId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("is1vh2")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            workpackageId = value._id;
            parentId = key;
          }
        });
      }
    apiWorkpackageApi.deleteworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};document.getElementById('iud0hp').onclick = (event) => {
    event.preventDefault();
    let workpackageId = window.location.pathname.replace('/viewWorkpackages/','');
      if(workpackageId === '/viewWorkpackages' || workpackageId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iud0hp")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            workpackageId = value._id;
            parentId = key;
          }
        });
      }
    apiWorkpackageApi.deleteworkpackage( workpackageId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {};