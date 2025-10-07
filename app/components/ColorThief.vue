<script setup>
import {ref,onMounted} from "vue"; import ColorThief from "colorthief"; import {converter,differenceEuclidean,formatHex,nearest} from "culori";
const imageUrl=ref(""); const proxyUrl=ref(""); const palette=ref([]); const backgroundImage=ref(""); const toLCH=converter("lch"); const isLoading=ref(false);

const generatePalette=async()=>{
  isLoading.value=true; proxyUrl.value=`/api/proxy?url=${encodeURIComponent(imageUrl.value)}`; //alert("PR-URL: "+proxyUrl.value);
  const img=new Image(); img.crossOrigin="Anonymous"; img.src=proxyUrl.value;
  img.onload=()=>{
    //alert("IMG: "+img);
    const colorThief=new ColorThief(); let colors=colorThief.getPalette(img).map((c)=>toLCH({r:c[0]/255,g:c[1]/255,b:c[2]/255,mode:"rgb"}));
    const palettesz=discoverPalettes(colors); document.getElementById("y").innerHTML=`<span class="content"></span>`;
    //alert("Z1: "+document.getElementById("z").innerHTML);

    var i=0; for(const type of Object.keys(palettesz)){
      const paletteWrapper=document.createElement("span"); paletteWrapper.classList.add("palette-colors"); document.querySelector(".content").appendChild(paletteWrapper);
      paletteWrapper.innerHTML=palettesz[type].colors.reduce((html,color)=>{i++; html+=`<span id="dv${i}" style="background:${formatHex(color)}"></span>`;return html},"");
    }
    //alert("yZ: "+document.getElementById("y").innerHTML);
    document.body.style.backgroundColor=document.querySelector("#dv13").style.backgroundColor;

    const scientificColors=discoverPalettes(colors); palette.value=Object.keys(scientificColors).map((type)=>({type,colors:scientificColors[type].colors.map((color)=>({hex:formatHex(color)}))}));
    backgroundImage.value=`url('${imageUrl.value}')`; isLoading.value=false
  };
  img.onerror=()=>{console.error("Failed to Load"); isLoading.value=false}
};
function createScientificPalettes(baseColor){const targetHueSteps={analogous:[0,30,60],triadic:[0,120,240],tetradic:[0,90,180,270],complementary:[0,180],splitComplementary:[0,150,210]}; const palettes={}; for(const type of Object.keys(targetHueSteps)){palettes[type]=targetHueSteps[type].map((step)=>({mode:"lch",l:baseColor.l,c:baseColor.c,h:(baseColor.h+step)%360}))} return palettes}
function discoverPalettes(colors){const palettes={}; for(const color of colors){const targetPalettes=createScientificPalettes(color); for(const paletteType of Object.keys(targetPalettes)){const palette=[]; for(const targetColor of targetPalettes[paletteType]){const availableColors=colors.filter((c)=>!palette.some((existing)=>isColorEqual(c,existing))); const match=nearest(availableColors,differenceEuclidean("lch"))(targetColor)[0]; palette.push(match)} palettes[paletteType]={colors:palette}}} return palettes}
function isColorEqual(c1,c2){return c1.h===c2.h&&c1.l===c2.l&&c1.c===c2.c}

onMounted(()=>{
  //alert("0: "+document.getElementById("y").innerHTML);
  //alert("2: "+document.getElementById("ee").src);
  window.onload=function(){
    setTimeout(function(){
      //alert("1: "+document.getElementById("ee").src);
      //imageUrl.value=document.getElementById("i1").firstChild.src;
      imageUrl.value=document.getElementById("ee").src;
      //alert("IM: "+imageUrl.value);
      generatePalette();
    },1800);
  }
});
</script>
