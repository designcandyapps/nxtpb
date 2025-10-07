export default defineEventHandler(async(event)=>{
  //alert("Ptrk2");
  const query=getQuery(event); const imageUrl=query.url as string;
  if(!imageUrl){return new Response("Invalid URL",{status:400})}
  try{const response=await fetch(imageUrl,{headers:{"User-Agent":"Mozilla/5.0"}});
  if(!response.ok){return new Response("Error",{status:500})}
  const contentType=response.headers.get("Content-Type");
  if(!contentType||!contentType.startsWith("image/")){return new Response("Not Img URL",{status:400})}
  return new Response(await response.arrayBuffer(),{headers:{"Content-Type":contentType,"Access-Control-Allow-Origin":"*","Cache-Control":"no-cache"}})}
  catch(error){return new Response("Server Error",{status:500})}
});

