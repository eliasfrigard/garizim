(function(e){function t(t){for(var a,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f7639346"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"25ebeced"}[e]+".css",i=s.p+a,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=i;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/garizim/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1bcb":function(e){e.exports=JSON.parse('[{"id":1,"title":"Our Time Was Not Enough To Grow Old Together","link":"music/Time was not enough for us to grow old together.mp3","artist":"Garizim","album":"Moments in Between","length":"6:01"},{"id":2,"title":"Shabash!","link":"music/Shabash!.mp3","artist":"Garizim","album":"Moments in Between","length":"4:38"},{"id":3,"title":"What Thoughts Are Made Of","link":"music/What Thoughts Are Made Of.mp3","artist":"Garizim","album":"Moments in Between","length":"3:48"},{"id":4,"title":"Moments in Between","link":"music/Moments in Between.mp3","artist":"Garizim","album":"Moments in Between","length":"7:00"},{"id":5,"title":"Stories from the End","link":"music/Stories from the End.mp3","artist":"Garizim","album":"Moments in Between","length":"6:23"}]')},"34ea":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o={class:"player-div"};function i(e,t,n,i,r,c){var s=Object(a["A"])("router-view"),u=Object(a["A"])("Player");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(s),Object(a["g"])("div",o,[r.playerIsActive?(Object(a["t"])(),Object(a["d"])(u,{key:0,"data-aos":"fade-in",class:"audio-player",onClosePlayer:c.closePlayer},null,8,["onClosePlayer"])):Object(a["e"])("",!0)])],64)}n("b680"),n("c35a"),n("a9e3"),n("9911");var r=function(e){return Object(a["w"])("data-v-94eff6e8"),e=e(),Object(a["u"])(),e},c={class:"player"},s={class:"audio-controls"},u=r((function(){return Object(a["g"])("i",{class:"fas fa-backward"},null,-1)})),l=[u],d=r((function(){return Object(a["g"])("i",{class:"fas fa-pause"},null,-1)})),f=[d],b=r((function(){return Object(a["g"])("i",{class:"fas fa-play"},null,-1)})),m=[b],p=r((function(){return Object(a["g"])("i",{class:"fas fa-forward"},null,-1)})),g=[p],h={key:0,class:"music-info"},v={class:"music-title"},O=r((function(){return Object(a["g"])("div",{class:"music-progress"},null,-1)})),y=[O],j={class:"window-controls"},w=r((function(){return Object(a["g"])("i",{class:"fas fa-volume-up"},null,-1)})),k=[w],S=r((function(){return Object(a["g"])("i",{class:"fas fa-volume-down"},null,-1)})),A=[S],x=r((function(){return Object(a["g"])("i",{class:"fas fa-volume-mute"},null,-1)})),z=[x],C=r((function(){return Object(a["g"])("i",{class:"fas fa-chevron-down"},null,-1)})),T=[C],I=r((function(){return Object(a["g"])("i",{class:"fas fa-chevron-up"},null,-1)})),M=[I],P=r((function(){return Object(a["g"])("i",{class:"fas fa-times"},null,-1)})),E=[P],G={class:"song-container"},L={class:"ui container song-list"},_={class:"song-table"},q=r((function(){return Object(a["g"])("tr",null,[Object(a["g"])("th",null,"#"),Object(a["g"])("th",null,"Title"),Object(a["g"])("th",null,"Album"),Object(a["g"])("th",null,"Artist"),Object(a["g"])("th",{class:"length-header"},"Length")],-1)})),B=["id","onClick"],V={class:"song-id"},F={class:"song-title"},N={class:"song-album"},R={class:"song-artist"},W={class:"song-length"},J={key:0,class:"mobile-progress"},H=r((function(){return Object(a["g"])("div",{class:"music-progress"},null,-1)})),U=[H],D=["src","volume"];function Y(e,t,n,o,i,r){return Object(a["t"])(),Object(a["f"])("div",c,[Object(a["g"])("div",s,[Object(a["g"])("button",{id:"prev",name:"previous",class:"action-btn",onClick:t[0]||(t[0]=function(){return r.prevSong&&r.prevSong.apply(r,arguments)})},l),i.isPlaying?(Object(a["t"])(),Object(a["f"])("button",{key:0,id:"pause",name:"pause",class:"action-btn-big",onClick:t[1]||(t[1]=function(){return r.pauseAudio&&r.pauseAudio.apply(r,arguments)})},f)):(Object(a["t"])(),Object(a["f"])("button",{key:1,id:"play",name:"play",class:"action-btn-big",onClick:t[2]||(t[2]=function(){return r.playAudio&&r.playAudio.apply(r,arguments)})},m)),Object(a["g"])("button",{id:"next",name:"next",class:"action-btn",onClick:t[3]||(t[3]=function(){return r.nextSong&&r.nextSong.apply(r,arguments)})},g)]),r.mobile?Object(a["e"])("",!0):(Object(a["t"])(),Object(a["f"])("div",h,[Object(a["g"])("h4",v,Object(a["C"])(i.currentSong.title),1),Object(a["g"])("div",{class:"music-progress-container",onClick:t[4]||(t[4]=function(){return r.setProgress&&r.setProgress.apply(r,arguments)})},y)])),Object(a["g"])("div",j,[Object(a["g"])("div",{class:"volume-controls",onMouseover:t[9]||(t[9]=function(){return r.openVolumeControl&&r.openVolumeControl.apply(r,arguments)}),onMouseout:t[10]||(t[10]=function(){return r.closeVolumeControl&&r.closeVolumeControl.apply(r,arguments)})},[Object(a["g"])("input",{type:"range",class:"volume-range",name:"",id:"",min:"0",max:"100",value:"80",onChange:t[5]||(t[5]=function(){return r.changeVolume&&r.changeVolume.apply(r,arguments)})},null,32),i.volumeValue>50?(Object(a["t"])(),Object(a["f"])("button",{key:0,class:"action-btn",name:"volume up",onClick:t[6]||(t[6]=function(){return r.muteAudio&&r.muteAudio.apply(r,arguments)})},k)):i.volumeValue>0?(Object(a["t"])(),Object(a["f"])("button",{key:1,class:"action-btn",name:"volume down",onClick:t[7]||(t[7]=function(){return r.muteAudio&&r.muteAudio.apply(r,arguments)})},A)):(Object(a["t"])(),Object(a["f"])("button",{key:2,class:"action-btn",name:"mute",onClick:t[8]||(t[8]=function(){return r.unmuteAudio&&r.unmuteAudio.apply(r,arguments)})},z))],32),i.listIsOpen?(Object(a["t"])(),Object(a["f"])("button",{key:0,class:"action-btn",name:"close playlist",onClick:t[11]||(t[11]=function(){return r.closeList&&r.closeList.apply(r,arguments)})},T)):(Object(a["t"])(),Object(a["f"])("button",{key:1,class:"action-btn",name:"open playlist",onClick:t[12]||(t[12]=function(){return r.openList&&r.openList.apply(r,arguments)})},M)),Object(a["g"])("button",{class:"action-btn",name:"close player",onClick:t[13]||(t[13]=function(t){return e.$emit("close-player")})},E)]),Object(a["g"])("div",G,[Object(a["g"])("div",L,[Object(a["g"])("table",_,[q,(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(i.songList,(function(e,t){return Object(a["t"])(),Object(a["f"])("tr",{class:"data-row",key:t,id:t,onClick:function(e){return r.changeTrack(t)}},[Object(a["g"])("td",V,Object(a["C"])(t+1),1),Object(a["g"])("td",F,Object(a["C"])(e.title),1),Object(a["g"])("td",N,Object(a["C"])(e.album),1),Object(a["g"])("td",R,Object(a["C"])(e.artist),1),Object(a["g"])("td",W,Object(a["C"])(e.length),1)],8,B)})),128))]),r.mobile?(Object(a["t"])(),Object(a["f"])("div",J,[Object(a["g"])("div",{class:"music-progress-container",onClick:t[14]||(t[14]=function(){return r.setProgress&&r.setProgress.apply(r,arguments)})},U)])):Object(a["e"])("",!0)])]),Object(a["g"])("audio",{src:i.currentSong.link,class:"music-audio",onTimeupdate:t[15]||(t[15]=function(){return r.updateProgress&&r.updateProgress.apply(r,arguments)}),onEnded:t[16]||(t[16]=function(){return r.nextSong&&r.nextSong.apply(r,arguments)}),volume:r.volume},null,40,D)])}var K=n("1da1"),Q=(n("96cf"),n("d3b7"),n("159b"),n("1bcb")),X={name:"Player",props:[],data:function(){return{songList:[],currentSong:"",currentSongIndex:0,isPlaying:!1,volumeValue:80,prevVolume:"",muted:!1,listIsOpen:!1}},created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Q.forEach((function(t){e.songList.push(t)}));case 1:case"end":return t.stop()}}),t)})))()},watch:{currentSong:function(){var e=this,t=document.querySelectorAll(".data-row");t.forEach((function(t){var n=t.querySelector(".song-title").textContent;e.currentSong.title===n?t.classList.add("is-active"):t.classList.remove("is-active")}))}},mounted:function(){this.currentSong=this.songList[0]},computed:{volume:function(){return this.volumeValue/100},mobile:function(){return screen.width<992}},methods:{openVolumeControl:function(){screen.width>992&&(document.querySelector(".volume-range").style.display="block")},closeVolumeControl:function(){document.querySelector(".volume-range").style.display="none"},changeVolume:function(e){this.volumeValue=e.srcElement.value},muteAudio:function(){this.volumeValue=0},unmuteAudio:function(){var e=document.querySelector(".volume-range").value;this.volumeValue=e},playAudio:function(){var e=document.querySelector(".music-audio");e.play(),this.isPlaying=!0},pauseAudio:function(){document.querySelector(".music-audio").pause(),this.isPlaying=!1},loadAndPlayAudio:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=document.querySelector(".music-audio"),e.isPlaying=!0,t.next=4,n.load();case 4:return t.next=6,n.play();case 6:case"end":return t.stop()}}),t)})))()},updateProgress:function(e){var t=document.querySelector(".music-progress"),n=e.srcElement,a=n.duration,o=n.currentTime,i=o/a*100;t.style.width="".concat(i,"%")},setProgress:function(e){var t=document.querySelector(".music-progress-container").clientWidth,n=e.offsetX,a=document.querySelector(".music-audio"),o=a.duration;a.currentTime=n/t*o},nextSong:function(){this.currentSongIndex++,this.currentSongIndex>this.songList.length-1&&(this.currentSongIndex=0),this.currentSong=this.songList[this.currentSongIndex],document.querySelector(".music-audio"),this.loadAndPlayAudio()},prevSong:function(){this.currentSongIndex--,this.currentSongIndex<0&&(this.currentSongIndex=this.songList.length-1),this.currentSong=this.songList[this.currentSongIndex],this.loadAndPlayAudio()},changeTrack:function(e){this.currentSongIndex=e,this.currentSong=this.songList[e],this.loadAndPlayAudio()},openList:function(){var e=document.querySelector(".song-container");e.style.display="flex",this.listIsOpen=!0},closeList:function(){var e=document.querySelector(".song-container");e.style.display="none",this.listIsOpen=!1}}},Z=(n("dab5"),n("6b0d")),$=n.n(Z);const ee=$()(X,[["render",Y],["__scopeId","data-v-94eff6e8"]]);var te=ee,ne=n("f5af"),ae=n.n(ne),oe=(n("e829"),{name:"App",components:{Player:te},data:function(){return{playerIsActive:!1,backgroundImage:""}},created:function(){ae.a.init(),window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var e=Number.parseFloat(window.scrollY).toFixed(2);e>75&&this.openPlayer()},reloadPage:function(){window.location.href="/"},closePlayer:function(){document.querySelector(".audio-player").remove(),this.playerIsActive=!1},openPlayer:function(){var e=document.querySelector(".player-div"),t=document.createElement("Player");e.appendChild(t),this.playerIsActive=!0},toTop:function(){window.scrollTo(0,0)}}});n("7760");const ie=$()(oe,[["render",i]]);var re=ie,ce=(n("3ca3"),n("ddb0"),n("6c02")),se=function(e){return Object(a["w"])("data-v-97be8d4a"),e=e(),Object(a["u"])(),e},ue=se((function(){return Object(a["g"])("div",{class:"home"},null,-1)})),le=se((function(){return Object(a["g"])("div",{class:"title"},[Object(a["g"])("h1",{id:"band-title"},"Garizim")],-1)})),de=se((function(){return Object(a["g"])("div",{class:"ui container content"},[Object(a["g"])("div",{id:"welcome",class:"ui container"},[Object(a["g"])("h2",{class:"welcome-title","data-aos":"fade-in"},"GARIZIM - MODERN FOLK"),Object(a["g"])("p",{"data-aos":"fade-in"}," Garizim is a colorful live experience taking the listener on musical journeys. With the unique line-up of hurdy-gurdy, saxophones and double bass, the young Swedish trio creates a highly contemporary musical expression in the borderland of composition and improvisation where folk, indie and jazz meets. "),Object(a["g"])("p",{"data-aos":"fade-in"},' Starting at a young age in 2010 - Garizim became known as a young progressive folk trio and toured extensively in Sweden. The band got nominated as the Best Newcomer of the Year at the Swedish Folk & World music awards in 2012. The album ”See The Birds Are Coming” from 2015 became highly acclaimed by Swedish and international critics. In March 2022 Garizim released the EP "Moments in Between". With this release of five original compositions, Garizim enters a new era - Celebrating more than 10 years together. '),Object(a["g"])("p",{"data-aos":"fade-in"},[Object(a["g"])("b",null,"Elias Frigård:"),Object(a["i"])(" Soprano- & Baritone Saxophone "),Object(a["g"])("br"),Object(a["g"])("b",null,"Johannes Geworkian Hellman:"),Object(a["i"])(" Hurdy-Gurdy "),Object(a["g"])("br"),Object(a["g"])("b",null," Jordi Carrasco Hjelm:"),Object(a["i"])(" Double Bass ")]),Object(a["g"])("div",{"data-aos":"fade-in",id:"welcome-meta"},[Object(a["g"])("p",null,[Object(a["g"])("a",{href:"mailto:garizimtrio@hotmail.com"},"garizimtrio@hotmail.com"),Object(a["g"])("br"),Object(a["i"])("+46(0)736750310 - Johannes"),Object(a["g"])("br"),Object(a["i"])("+46(0)706691374 - Elias ")])]),Object(a["g"])("div",{class:"garizim-links"},[Object(a["g"])("a",{href:"https://www.facebook.com/Garizimmusic"},[Object(a["g"])("i",{class:"fab fa-facebook fa-lg","data-aos":"slide-right"})]),Object(a["g"])("a",{href:"https://open.spotify.com/album/43AwTLyEl1frgfDGzYBc1F?si=MWUtFkz9TouuQEtzhHj4Ww"},[Object(a["g"])("i",{class:"fab fa-spotify fa-lg","data-aos":"slide-right"})]),Object(a["g"])("a",{href:"https://music.apple.com/ca/album/moments-in-between-ep/1611755467"},[Object(a["g"])("i",{class:"fab fa-apple fa-lg","data-aos":"slide-right"})]),Object(a["g"])("a",{href:"https://music.amazon.com/albums/B09TFT2RV1?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=FI&ref=dm_sh_JQ9UoDucPhzGrcRMOAKO67jHQ"},[Object(a["g"])("i",{class:"fab fa-amazon fa-lg","data-aos":"slide-right"})]),Object(a["g"])("a",{href:"https://youtube.com/playlist?list=OLAK5uy_nsX0XvldTvh6GkeHUagX3twvNEynFNUzI"},[Object(a["g"])("i",{class:"fab fa-youtube fa-lg","data-aos":"slide-right"})]),Object(a["g"])("a",{href:"https://soundcloud.com/garizim"},[Object(a["g"])("i",{class:"fab fa-soundcloud fa-lg","data-aos":"slide-right"})])])]),Object(a["g"])("hr"),Object(a["g"])("h3",{id:"so-me-title",class:"welcome-title","data-aos":"fade-in"}," SOCIAL MEDIA "),Object(a["g"])("div",{class:"ui container social-media"},[Object(a["g"])("div",{"data-aos":"fade-in",class:"fb-page","data-href":"https://www.facebook.com/Garizimmusic","data-tabs":"timeline","data-width":"500","data-height":"600","data-small-header":"false","data-adapt-container-width":"true","data-hide-cover":"false","data-show-facepile":"true"},[Object(a["g"])("blockquote",{cite:"https://www.facebook.com/Garizimmusic",class:"fb-xfbml-parse-ignore"},[Object(a["g"])("a",{href:"https://www.facebook.com/Garizimmusic"},"Garizim")])]),Object(a["g"])("div",{class:"spotify-page"},[Object(a["g"])("iframe",{"data-aos":"fade-in",style:{"border-radius":"12px"},src:"https://open.spotify.com/embed/playlist/0ed7GYbxtM9fmZ7FkRG8ii?utm_source=generator&theme=0",width:"100%",height:"600",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})])])],-1)})),fe=se((function(){return Object(a["g"])("div",{class:"divider"},null,-1)})),be={class:"ui container content"},me=se((function(){return Object(a["g"])("div",{class:"divider"},null,-1)})),pe={class:"ui container content"},ge=se((function(){return Object(a["g"])("div",{class:"divider"},null,-1)})),he={class:"ui container content"},ve=se((function(){return Object(a["g"])("div",null,null,-1)}));function Oe(e,t,n,o,i,r){var c=Object(a["A"])("Album"),s=Object(a["A"])("Quotes"),u=Object(a["A"])("Videos");return Object(a["t"])(),Object(a["f"])(a["a"],null,[ue,le,de,fe,Object(a["g"])("div",be,[Object(a["j"])(c)]),me,Object(a["g"])("div",pe,[Object(a["j"])(s)]),ge,Object(a["g"])("div",he,[Object(a["j"])(u)]),ve],64)}var ye=function(e){return Object(a["w"])("data-v-132e267d"),e=e(),Object(a["u"])(),e},je={class:"wrapper"},we=ye((function(){return Object(a["g"])("h2",{class:"quote-header","data-aos":"fade-in"},"QUOTES",-1)})),ke={class:"ui container quotes"},Se={class:"quote-text"},Ae={class:"quote-name"},xe=["href"];function ze(e,t,n,o,i,r){return Object(a["t"])(),Object(a["f"])("div",je,[we,Object(a["g"])("div",ke,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(i.quotesArray,(function(e){return Object(a["t"])(),Object(a["f"])("div",{"data-aos":"fade-in",class:"ui container quote",key:e.id},[Object(a["g"])("p",Se,'"'+Object(a["C"])(e.text)+'"',1),Object(a["g"])("p",Ae,Object(a["C"])(e.author),1),Object(a["g"])("a",{class:"quote-link",href:"https://"+e.link,target:"_blank"},Object(a["C"])(e.link),9,xe)])})),128))])])}var Ce=n("f853"),Te={name:"Quotes",data:function(){return{quotesArray:[]}},created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Ce.forEach((function(t){e.quotesArray.push(t)}));case 1:case"end":return t.stop()}}),t)})))()}};n("885b");const Ie=$()(Te,[["render",ze],["__scopeId","data-v-132e267d"]]);var Me=Ie,Pe={class:"ui container videos"},Ee={class:"main-video","data-aos":"fade-in"},Ge={class:"video-title"},Le={class:"video-meta"},_e=["id","src"],qe={class:"video-container"},Be={class:"video-title"},Ve={class:"video-meta"},Fe=["height","src"];function Ne(e,t,n,o,i,r){return Object(a["t"])(),Object(a["f"])("div",Pe,[Object(a["g"])("div",Ee,[Object(a["g"])("p",Ge,Object(a["C"])(i.mainVideo.title),1),Object(a["g"])("p",Le,Object(a["C"])(i.mainVideo.meta),1),Object(a["g"])("iframe",{id:i.mainVideo.id,width:"1120",height:"630",src:i.mainVideo.link,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,8,_e)]),Object(a["g"])("div",qe,[(Object(a["t"])(!0),Object(a["f"])(a["a"],null,Object(a["z"])(i.videoArray,(function(e){return Object(a["t"])(),Object(a["f"])("div",{key:e.link,class:"video-wrapper","data-aos":"fade-in"},[Object(a["g"])("p",Be,Object(a["C"])(e.title),1),Object(a["g"])("p",Ve,Object(a["C"])(e.meta),1),Object(a["g"])("iframe",{class:"video-frame",height:312.2,width:555,src:e.link,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",loading:"lazy"},null,8,Fe)])})),128))])])}var Re=n("6b7d"),We={name:"Videos",data:function(){return{videoArray:[],mainVideo:{}}},created:function(){var e=this;return Object(K["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Re.forEach((function(t,n){0!==n&&e.videoArray.push(t)})),e.mainVideo=Re[0];case 2:case"end":return t.stop()}}),t)})))()}};n("855c");const Je=$()(We,[["render",Ne],["__scopeId","data-v-27a7524f"]]);var He=Je,Ue={class:"wrapper"},De=Object(a["h"])('<div class="ui container album-header" data-v-48bfa870><h2 class="album-title" data-aos="fade-in" data-v-48bfa870> NEW MUSIC RELEASED IN MARCH 2022! </h2><p data-aos="fade-in" data-v-48bfa870> During four days in the summer of 2018, Garizim recorded some new music together. It feels like a very long time ago. The plan was to release the our new creation as soon as possible, but something happened, and everything was on hold for a while. Finally, it is time to share this new &amp; old music to the world, to our friends and listeners. Our new EP &quot;Moments in Between&quot; contains five tracks with original music composed by Garizim. You can find the &quot;Moments in Between&quot; on digital streaming platforms such as Spotify/Tidal/Apple music, as well as here on our website. </p><p data-aos="fade-in" data-v-48bfa870> Garizim is now moving into a new era. We look forward to being together again and create new music! </p></div><div class="ui container album" data-v-48bfa870><div class="left" data-aos="fade-in" data-v-48bfa870><img src="/images/albumcover.jpg" alt="" class="album-cover" data-v-48bfa870></div><div class="right" data-aos="fade-in" data-v-48bfa870><h2 data-v-48bfa870>Moments in Between</h2><p data-v-48bfa870>1. Our Time Was Not Enough To Grow Old Together</p><p data-v-48bfa870>2. Shabash!</p><p data-v-48bfa870>3. What Thoughts Are Made Of</p><p data-v-48bfa870>4. Moments in Between</p><p data-v-48bfa870>5. Stories from the End</p><br data-v-48bfa870><p data-v-48bfa870>Mixed &amp; Mastered by Lars-Emil Öjeberget</p><p data-v-48bfa870>Recorded at Kråktjärn Studio</p><p data-v-48bfa870>Photo by Sona Hellman</p><br data-v-48bfa870><div class="links" data-v-48bfa870><a href="https://youtube.com/playlist?list=OLAK5uy_nsX0XvldTvh6GkeHUagX3twvNEynFNUzI" data-v-48bfa870><i class="fab fa-youtube fa-lg" data-v-48bfa870></i></a><a href="https://open.spotify.com/album/43AwTLyEl1frgfDGzYBc1F?si=MWUtFkz9TouuQEtzhHj4Ww" data-v-48bfa870><i class="fab fa-spotify fa-lg" data-v-48bfa870></i></a><a href="https://music.apple.com/ca/album/moments-in-between-ep/1611755467" data-v-48bfa870><i class="fab fa-apple fa-lg" data-v-48bfa870></i></a><a href="https://music.amazon.com/albums/B09TFT2RV1?marketplaceId=A3K6Y4MI8GDYMT&amp;musicTerritory=FI&amp;ref=dm_sh_JQ9UoDucPhzGrcRMOAKO67jHQ" data-v-48bfa870><i class="fab fa-amazon fa-lg" data-v-48bfa870></i></a><a href="https://soundcloud.com/garizim" data-v-48bfa870><i class="fab fa-soundcloud fa-lg" data-v-48bfa870></i></a></div></div></div>',2),Ye=[De];function Ke(e,t,n,o,i,r){return Object(a["t"])(),Object(a["f"])("div",Ue,Ye)}var Qe={name:"Album"};n("f1d6");const Xe=$()(Qe,[["render",Ke],["__scopeId","data-v-48bfa870"]]);var Ze=Xe,$e={name:"Home",data:function(){return{}},created:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:function(){var e=Number.parseFloat(window.scrollY).toFixed(2);this.setBackgroundImage(e)},setBackgroundImage:function(e){var t=document.querySelector("#band-title"),n=document.querySelectorAll(".content"),a=n[0].offsetTop,o=n[1].offsetTop,i=n[2].offsetTop,r="";e<a?(r="images/webp/Garizim2019-0979.webp",t.style.display="block"):e>a&&e<o?(r="images/webp/garizim_press_web.webp",t.style.display="none"):e>o&&e<i?(r="images/webp/Garizim2019-0974_bw.webp",t.style.display="none"):(r="images/webp/69608686_10157410500941280_5649243090850938880_n.webp",t.style.display="none");var c=document.querySelector(".home");c.style.backgroundImage="url(".concat(r,")")}},components:{Quotes:Me,Videos:He,Album:Ze}};n("f074");const et=$()($e,[["render",Oe],["__scopeId","data-v-97be8d4a"]]);var tt=et,nt=[{path:"/",name:"Home",component:tt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/contact",name:"Contact",component:function(){return n.e("about").then(n.bind(null,"b8fa"))}},{path:"/live",name:"Live",component:function(){return n.e("about").then(n.bind(null,"c638"))}}],at=Object(ce["a"])({history:Object(ce["b"])("/garizim/"),routes:nt}),ot=at;Object(a["c"])(re).use(ot).mount("#app")},"6b7d":function(e){e.exports=JSON.parse('[{"id":1,"title":"Our Time Was Not Enough to Grow Old Together","meta":"Live in Stockholm (2014)","link":"https://www.youtube.com/embed/Z0ZxocwxM6A"},{"id":2,"title":"Moments in Between","meta":"Live at Confidencen, Stockholm (2016)","link":"https://www.youtube.com/embed/riCyj7Bt_BU"},{"id":3,"title":"Song for Valentin","meta":"Live in Stockholm (2014)","link":"https://www.youtube.com/embed/aLkRzKH_sPA"}]')},7760:function(e,t,n){"use strict";n("80b0")},"80b0":function(e,t,n){},"855c":function(e,t,n){"use strict";n("da7d")},"885b":function(e,t,n){"use strict";n("9ee1")},"9ee1":function(e,t,n){},cf62:function(e,t,n){},da7d:function(e,t,n){},dab5:function(e,t,n){"use strict";n("fcef")},f074:function(e,t,n){"use strict";n("cf62")},f1d6:function(e,t,n){"use strict";n("34ea")},f853:function(e){e.exports=JSON.parse('[{"id":1,"author":"Luke Kenny / Rolling Stone Magazine","author_title":"Music Journal","country":"US","link":"https://rollingstoneindia.com/","text":"(Stockholm Jazz Festival) I was treated to a powerful wave of the most unique amalgamation of sounds that I have ever heard. With some mind-boggling arrangements and stellar playing, it was no surprise that Garizim returned for two encores!"},{"id":2,"author":"Alex Monaghan / Folk World","author_title":"Music Journal","country":"FI","link":"http://www.folkworld.eu/","text":"This is not what you might expect from a Swedish folk group, and in fact this is one of the most unexpected albums I have come across in 2016, but it?s also one of my favorites. Close your eyes and see what Garizim conjures for you."},{"id":3,"author":"Urlich Joosten / Folker Magazine","author_title":"Music Journal","country":"FI","link":"https://www.folker.de/","text":"See The Birds Are Coming is a concept album, a musical poem about the bird flight, which presents surprising soundscapes and textures of emotional density in surprising arrangements. Before the spiritual eye of the listener are images of Scandinavian landscapes, of sea, clouds and migratory birds. A music of magical fascination and great beauty develops from original compositions and processed tradition."},{"id":4,"author":"Ton Mass / MixedWorldMusic.com","author_title":"Music Journal","country":"FI","link":"https://www.mixedworldmusic.com/","text":"The overwhelming capstone by the trio Garizim after the concert is still buzzing in my head - Sublime!!"}]')},fcef:function(e,t,n){}});
//# sourceMappingURL=app.e554d22a.js.map