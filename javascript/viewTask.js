let apiTaskApi = new TempApi.TaskApi();import TempApi from '../src/index';window.onload = () => {apiTaskApi.getAlltask((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i7vs3").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'tName']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].tName;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'tName'){
        subDataElements[i].textContent = data[data.length -i -1].tName;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});let taskId = window.location.pathname.replace('/viewTask/','');apiTaskApi.gettask( taskId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { document.querySelector('[annotationname = tName]').textContent = response.body.query.tName; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tStart]').textContent = response.body.query.tStart; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tEnd]').textContent = response.body.query.tEnd; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tPMs]').textContent = response.body.query.tPMs; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = tDescription]').textContent = response.body.query.tDescription; } catch (e) { console.log(e) };}});};