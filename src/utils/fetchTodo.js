export const URL_BACK = "https://electronic-shelia-nicosup98-4098638c.koyeb.app"

export async function getTodo(url, method= "GET") {
   const resp = await fetch(url, {method})
   if(!resp.ok) {
      const error = await resp.text()
      console.error(resp.statusText,error)
      alert("a ocurrido un error")
      return error
   }
   return method === "DELETE"? resp.text() : resp.json()
}

export async function bodyTodo(url,method,body) {
   const resp = await fetch(url,{
      method,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body)

   })

   if(!resp.ok) {
      const error = await resp.text()
      alert("a ocurrido un error")
      console.error(resp.statusText, error)
      return error
   }

   return resp.json()
}