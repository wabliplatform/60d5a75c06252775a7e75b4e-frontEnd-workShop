let apiProjectApi = new TempApi.ProjectApi();import TempApi from '../src/index';document.getElementById('iegma').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/homepage' ;}};document.getElementById('iy5jt').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createProject' ;}};document.getElementById('i1lmr').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/createWorkpackage' ;}};document.getElementById('i2ylij').onclick = (event) => {
    event.preventDefault();
    {  location.href= '/updateProject' ;}};document.getElementById('i3cy3w').onclick = (event) => {
    event.preventDefault();
    let projectId = window.location.pathname.replace('/viewProject/','');
      if(projectId === '/viewProject' || projectId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i3cy3w")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            projectId = value._id;
            parentId = key;
          }
        });
      }
    apiProjectApi.deleteproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{  location.href= '/homepage' ;}}});};window.onload = () => {let projectId = window.location.pathname.replace('/viewProject/','');apiProjectApi.getproject( projectId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = projectWebsite]').textContent = response.body.query.projectWebsite; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectGA]').textContent = response.body.query.projectGA; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectStartDate]').textContent = response.body.query.projectStartDate; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectEndDate]').textContent = response.body.query.projectEndDate; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectDuration]').textContent = response.body.query.projectDuration; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectAbstract]').textContent = response.body.query.projectAbstract; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = projectDescription]').textContent = response.body.query.projectDescription; } catch (e) { console.log(e) };try { 
      if(response.body.query.projectImage !== undefined){
        if(document.querySelector('[annotationname = projectImage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = projectImage]').setAttribute('data-image-base64',response.body.query.projectImage.data);
          let fileName = response.body.query.projectImage.name;
          let file = new File([response.body.query.projectImage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = projectImage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = projectImage]').src = response.body.query.projectImage.data ;
        }
        document.querySelector('[annotationname = projectImage]').name = response.body.query.projectImage.name ;
      }
       } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = projectWp]').setAttribute('selected-element',response.body.query.projectWp.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'projectWp']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.projectWp;
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wpTitle']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wpTitle;
      }
    }
    catch(e) {console.log(e);}; try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wpRole']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wpRole;
      }
    }
    catch(e) {console.log(e);}; try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'wpPMS']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].wpPMS;
      }
    }
    catch(e) {console.log(e);};
      
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
      if(response.body.query.projectWp._id){
        map.set(
          document.querySelector(
            "[annotationname = 'projectWp']"
          ).getAttribute("id"),
          response.body.query.projectWp
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};