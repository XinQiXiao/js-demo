function imgLoad(url){
  return new Promise(function(resolve, reject){
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = 'blob'
    request.onload = function(){
      if(request.status === 200){
        resolve(request.response)
      } else {
        reject(Error('err '+request.statusText))
      }
    }
    request.onerror = function(){
      reject(Error('err'))
    }
    request.send()
  })
}

function doPromise(){
  return new Promise((resolve, reject)=>{
    if(/*success*/){
      resolve()
    } 
    if(/*fail*/){
      reject()
    }
  })
}