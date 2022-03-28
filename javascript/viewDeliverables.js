let apiDeliverableApi = new TempApi.DeliverableApi();import TempApi from '../src/index';document.getElementById('ic2ofs').onclick = (event) => {
    event.preventDefault();
    let deliverableId = window.location.pathname.replace('/viewDeliverables/','');
      if(deliverableId === '/viewDeliverables' || deliverableId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ic2ofs")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            deliverableId = value._id;
            parentId = key;
          }
        });
      }
    apiDeliverableApi.deletedeliverable( deliverableId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');}});};window.onload = () => {};