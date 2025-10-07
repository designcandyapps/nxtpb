<script lang="ts" setup>
const fetchPh=async(query)=>{
  const response=await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=OOBNDpH2xNShX6T9wWV_-9py3NtxfpGT2zMcashaO_o`);
  const data=await response.json(); //alert("RES1P: "+JSON.stringify(data));
  return data.results;
};
async function fetchGetty(query){
  try{
    const response=await fetch(`https://api.gettyimages.com/v3/search/images?phrase=${encodeURIComponent(query)}&page_size=1`,{method:"GET",headers:{"Api-Key":"ep3mq3jxr4u99m7hy3gzzp3g"}});
    if(!response.ok){throw new Error(`Error1:${response.statusText}`)}
    const data=await response.json(); //alert("RES2P: "+JSON.stringify(data));
    if(data.images&&data.images.length>0){const image=data.images[0];console.log("Im:",image);return image}else{console.log("No ims");return null}
  }catch(error){console.error("Error2:",error)}
}
onMounted(()=>{
  setTimeout(function(){
    const pr=document.querySelector("#pr").value; //alert("PR: "+pr);
    //fetchPh(pr).then(photos=>{photos.forEach(photo=>{pho.value=photo.urls.small})});
    //fetchGetty(pr).then(image=>{pho2.value=image.display_sizes[0].uri});
  },600)
});
</script>

<template>
  <main>
    <img id="ee" src="https://pinfluents.com/_BCK/4/im/bp.png" width="60" height="60">
    <div class="g">
      <div id="t" style="border:3px solid red;"></div>
      <div id="y" style="border:3px solid green;">s</div>
      <div id="z" style="border:3px solid blue;"><ColorThief /></div>
      <input id="pr" name="pr" value="Open Source">
      <input id="prompt" v-model="prompt">
      <input id="pho" v-model="pho"><input id="pho2" v-model="pho2">
      <div id="response" v-if="response">{{response}}</div>
    </div>
  </main>
</template>

<script lang="ts">
export default{
  data(){return{pr:"",response:null}},
  //mounted(){setTimeout(()=>{this.send()},300)},
  methods:{
    async send(){
      const response=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:document.querySelector("#pr").value})});
      const data=await response.json(); this.response=data.reply; alert("RES00: "+JSON.stringify(data)); alert("RES01: "+this.response);
      document.querySelector("#t").innerText=this.response;
    },
  },
}
</script>
