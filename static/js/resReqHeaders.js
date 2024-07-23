
const request = async () => {
  const res = await fetch('http://localhost:3000/req-res-headers/info', {
    method: "post",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({a: 1, b: 2})
  }).then(res => res.json())
  console.log(res)
}
request()


const request2 = async () => {
  const res = await fetch('http://localhost:3000/req-res-headers/custom', {
    method: "post",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({a: 1, b: 2})
  }).then(res => {
    console.log(res.headers.get('wz-token'))
    return res.json()
  })
  console.log(res)
}
request2()



const request3 = async () => {
  // sse
  const sse = new EventSource('http://localhost:3000/req-res-headers/sse')
  // sse.addEventListener('message', (e) => {
  //   console.log(e.type, e.data)
  // })
  sse.addEventListener('test', (e) => {
    console.log(e.type, e.data)
  })
}
request3()
