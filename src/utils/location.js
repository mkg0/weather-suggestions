export function getLocation() {
  return new Promise((resolve,reject)=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
      return 
    }
    reject()
  })
}