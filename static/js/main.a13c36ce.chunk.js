(window["webpackJsonpreact-colors-app"]=window["webpackJsonpreact-colors-app"]||[]).push([[0],{230:function(e,a,t){e.exports=t.p+"static/media/bg.898d1731.svg"},256:function(e,a,t){e.exports=t(496)},261:function(e,a,t){},262:function(e,a,t){},496:function(e,a,t){"use strict";t.r(a);var o,n,r,l,c,i=t(0),m=t.n(i),s=t(6),d=t.n(s),u=t(29),p=(t(261),t(96)),f=t(18),g=t(58),h=t(556),b=t(555),E=(t(262),function(e){var a=e.children;return m.a.createElement("section",{className:"page"},a)}),x=t(15),v=t(224),C=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},y=Object(v.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(o={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px",opacity:"1",backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(x.a)(o,C("lg"),{width:"25%",height:"33.3333%"}),Object(x.a)(o,C("md"),{width:"50%",height:"20%"}),Object(x.a)(o,C("xs"),{width:"100%",height:"10%"}),o)}),w=t(554),j=t(539),O=t(557),k=t(540),N=t(120),S=t.n(N),P=t(237),B=Object(v.a)({Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(x.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},C("xs"),{display:"none"}),slider:Object(x.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},C("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),F=(t(318),function(e){var a=B(),t=Object(i.useState)("hex"),o=Object(f.a)(t,2),n=o[0],r=o[1],l=Object(i.useState)(!1),c=Object(f.a)(l,2),s=c[0],d=c[1],p=e.level,g=e.changeLevel,h=e.showingAllColors,b=function(){d(!1)};return m.a.createElement("header",{className:a.Navbar},m.a.createElement("div",{className:a.logo},m.a.createElement(u.b,{to:"/"},"Color Picker")),h&&m.a.createElement("div",null,m.a.createElement("span",null,"Level: ",p),m.a.createElement("div",{className:a.slider},m.a.createElement(P.a,{defaultValue:p,min:100,max:900,step:100,onAfterChange:g}))),m.a.createElement("div",{className:a.selectContainer},m.a.createElement(w.a,{value:n,onChange:function(a){r(a.target.value),d(!0),e.handleChange(a.target.value)}},m.a.createElement(j.a,{value:"hex"},"HEX - #ffffff"),m.a.createElement(j.a,{value:"rgb"},"RGB - rgb(255, 255, 255)"),m.a.createElement(j.a,{value:"rgba"},"RGBA - rgb(255, 255, 255. 1.0)"))),m.a.createElement(O.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:s,autoHideDuration:3e3,message:m.a.createElement("span",{id:"message-id"},"Format Changed To ",m.a.createElement("strong",null,n.toUpperCase())),ContentProps:{"aria-describedby":"message-id"},onClose:b,action:[m.a.createElement(k.a,{onClick:b,color:"inherit",key:"close","aria-label":"close"},m.a.createElement(S.a,null))]}))}),I=t(4),D=t(229),A=t(38),G=t.n(A),T=Object(v.a)({ColorBox:(n={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px","&:hover button":{opacity:"1",transition:"0.5s"}},Object(x.a)(n,C("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(x.a)(n,C("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(x.a)(n,C("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),n),copyText:{color:function(e){return G()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return G()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return G()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return G()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:"0"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(x.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},C("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showCopyMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3"}}),R=function(e){var a=T(e),t=Object(i.useState)(!1),o=Object(f.a)(t,2),n=o[0],r=o[1],l=e.name,c=e.background,s=e.paletteId,d=e.id,p=e.showingFullPalette;return m.a.createElement(D.CopyToClipboard,{text:c,onCopy:function(){r(!0),setTimeout(function(){r(!1)},1500)}},m.a.createElement("div",{style:{background:c},className:a.ColorBox},m.a.createElement("div",{style:{background:c},className:Object(I.a)(a.copyOverlay,Object(x.a)({},a.showOverlay,n))}),m.a.createElement("div",{className:Object(I.a)(a.copyMessage,Object(x.a)({},a.showCopyMessage,n))},m.a.createElement("h1",null,"copied!"),m.a.createElement("p",{className:a.copyText},c)),m.a.createElement("div",null,m.a.createElement("div",{className:a.boxContent},m.a.createElement("span",{className:a.colorName},l)),m.a.createElement("button",{className:a.copyButton},"Copy")),p&&m.a.createElement(u.b,{to:"/palette/".concat(s,"/").concat(d),onClick:function(e){return e.stopPropagation()}},m.a.createElement("span",{className:a.seeMore},"MORE"))))},L=t(497),M=Object(L.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return m.a.createElement("footer",{className:o.PaletteFooter},a," ",m.a.createElement("span",{className:o.emoji},t))}),z=function(e){var a=e.palette,t=y(),o=Object(i.useState)(500),n=Object(f.a)(o,2),r=n[0],l=n[1],c=Object(i.useState)("hex"),s=Object(f.a)(c,2),d=s[0],u=s[1],p=a.colors,g=a.paletteName,h=a.emoji,b=a.id,E=p[r].map(function(e){return m.a.createElement(R,{background:e[d],name:e.name,key:e.id,id:e.id,paletteId:b,showingFullPalette:!0})});return m.a.createElement("div",{className:t.Palette},m.a.createElement(F,{showingAllColors:!0,level:r,changeLevel:function(e){l(e)},handleChange:function(e){u(e)}}),m.a.createElement("div",{className:t.colors},E),m.a.createElement(M,{paletteName:g,emoji:h}))},H=t(541),U=t(542),V=t(544),q=t(538),W=t(499),J=t(543),Y=t(545),K=t(231),Q=t.n(K),X=t(161),$=t.n(X),_=t(162),Z=t.n(_),ee=t(121),ae=t.n(ee),te=Object(v.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"30px",height:"30px",position:"absolute",right:"0px",top:"0px",padding:"3px",zIndex:"10",opacity:"0",transition:"all 0.3s ease-in-out"}}),oe=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],ne=Object(i.memo)(function(e){var a=te(),t=e.id,o=e.paletteName,n=e.emoji,r=e.colors,l=e.handleClick,c=e.openDialog,i=r.map(function(e){return m.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return m.a.createElement("div",{className:a.root,onClick:l},!oe.some(function(e){return e.paletteName===o})&&m.a.createElement("div",{className:a.delete},m.a.createElement(ae.a,{className:a.deleteIcon,onClick:function(e){e.stopPropagation(),c(t)}})),m.a.createElement("div",{className:a.colors},i),m.a.createElement("h5",{className:a.title},o,m.a.createElement("span",{className:a.emoji},n)))}),re=t(230),le=t.n(re),ce=Object(v.a)({"@global":{".fade-exit":{opacity:"1"},".fade-exit-active":{opacity:"0",transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#350eaa",backgroundImage:"url(".concat(le.a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:(r={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(x.a)(r,C("xl"),{width:"80%"}),Object(x.a)(r,C("xs"),{width:"75%"}),r),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(l={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"1.5rem"},Object(x.a)(l,C("md"),{gridTemplateColumns:"repeat(2, 50%)",gridGap:"1rem"}),Object(x.a)(l,C("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),l)}),ie=function(e){var a=e.palettes,t=e.history,o=e.deletePalette,n=ce(),r=Object(i.useState)(""),l=Object(f.a)(r,2),c=l[0],s=l[1],d=Object(i.useState)(!1),p=Object(f.a)(d,2),g=p[0],E=p[1],x=function(e){s(e),E(!0)},v=function(){s(""),E(!1)};return m.a.createElement("div",{className:n.root},m.a.createElement("div",{className:n.container},m.a.createElement("nav",{className:n.nav},m.a.createElement("h1",{className:n.heading},"Color Picker"),m.a.createElement(u.b,{to:"/palette/new"},"Create Palette")),m.a.createElement(h.a,{className:n.palettes},a.map(function(e){return m.a.createElement(b.a,{key:e.id,classNames:"fade",timeout:500},m.a.createElement(ne,Object.assign({},e,{id:e.id,openDialog:x,handleClick:(a=e.id,function(){t.push("/palette/".concat(a))})})));var a}))),m.a.createElement(H.a,{onClose:v,open:g,"aria-labelledby":"delete-dialog-title"},m.a.createElement(U.a,{id:"delete-dialog-title"},"Delete This Palette?"),m.a.createElement(q.a,null,m.a.createElement(W.a,{button:!0,onClick:function(){o(c),v()}},m.a.createElement(J.a,null,m.a.createElement(V.a,{style:{backgroundColor:$.a[100],color:$.a[600]}},m.a.createElement(Q.a,null))),m.a.createElement(Y.a,{primary:"Delete"})),m.a.createElement(W.a,{button:!0,onClick:v},m.a.createElement(J.a,null,m.a.createElement(V.a,{style:{backgroundColor:Z.a[100],color:Z.a[600]}},m.a.createElement(S.a,null))),m.a.createElement(Y.a,{primary:"Cancel"})))))},me=t(558),se=t(81),de=t(553),ue=t(236),pe=t.n(ue),fe=t(549),ge=t(552),he=t(232),be=t.n(he),Ee=t(550),xe=t(551),ve=t(234),Ce=t.n(ve),ye=t(548),we=t(546),je=t(547),Oe=t(48),ke=t(238),Ne=(t(333),function(e){var a=Object(i.useState)("form"),t=Object(f.a)(a,2),o=t[0],n=t[1],r=Object(i.useState)(""),l=Object(f.a)(r,2),c=l[0],s=l[1],d=e.open,u=e.palettes,p=e.handleSubmit,g=e.hideForm;Object(i.useEffect)(function(){Oe.ValidatorForm.addValidationRule("isPaletteNameUnique",function(e){return u.every(function(a){return a.paletteName.toLowerCase()!==e.toLowerCase()})})},[u]);var h=function(){g(),s("")};return m.a.createElement(m.a.Fragment,null,m.a.createElement(H.a,{open:d&&"emoji"===o,onClose:function(){n("form")}},m.a.createElement(U.a,{id:"form-dialog-title"},"Choose A Palette Emoji"),m.a.createElement(ke.a,{emoji:"point_up",title:"Pick A Palette Emoji",onSelect:function(e){var a=e.native;p({paletteName:c,emoji:a}),n()}})),m.a.createElement(H.a,{open:d&&"form"===o,onClose:h,"aria-labelledby":"form-dialog-title"},m.a.createElement(U.a,{id:"form-dialog-title"},"Choose A Palette Name"),m.a.createElement(Oe.ValidatorForm,{onSubmit:function(){n("emoji")}},m.a.createElement(we.a,null,m.a.createElement(je.a,null,"Please enter a name for your new beautiful palette. It needs to be unique!"),m.a.createElement(Oe.TextValidator,{fullWidth:!0,margin:"normal",label:"Palette Name",name:"newPaletteName",value:c,onChange:function(e){s(e.target.value)},validators:["required","isPaletteNameUnique"],errorMessages:["Enter a palette name","Palette name already used"]})),m.a.createElement(ye.a,null,m.a.createElement(fe.a,{onClick:h,color:"primary"},"Cancel"),m.a.createElement(fe.a,{type:"submit",variant:"contained",color:"primary"},"Save Palette")))))}),Se=Object(v.a)(function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},navBtns:Object(x.a)({marginRight:"1rem","& a":{textDecoration:"none"}},C("xs"),{marginRight:"0.5rem"}),button:Object(x.a)({margin:"0 0.5rem"},C("xs"),{margin:"0 0.2rem",padding:"0.3rem"})}}),Pe=function(e){var a=Se(),t=Object(i.useState)(!1),o=Object(f.a)(t,2),n=o[0],r=o[1],l=e.open,c=e.palettes,s=e.handleSubmit,d=e.handleDrawerOpen;return m.a.createElement("div",{className:a.root},m.a.createElement(Ee.a,{position:"fixed",color:"default",className:Object(I.a)(a.appBar,Object(x.a)({},a.appBarShift,l))},m.a.createElement(xe.a,null,m.a.createElement(k.a,{color:"inherit","aria-label":"open drawer",onClick:d,edge:"start",className:Object(I.a)(a.menuButton,l&&a.hide)},m.a.createElement(Ce.a,null)),m.a.createElement(se.a,{variant:"h6",noWrap:!0},"Create A Palette")),m.a.createElement("div",{className:a.navBtns},m.a.createElement(u.b,{to:"/"},m.a.createElement(fe.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),m.a.createElement(fe.a,{variant:"contained",color:"primary",onClick:function(){r(!0)},className:a.button},"Save"))),m.a.createElement(Ne,{open:n,palettes:c,hideForm:function(){r(!1)},handleSubmit:s}))},Be=t(235),Fe=Object(v.a)({picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}}),Ie=function(e){var a=Fe(),t=e.colors,o=e.paletteIsFull,n=e.addNewColor,r=Object(i.useState)(""),l=Object(f.a)(r,2),c=l[0],s=l[1],d=Object(i.useState)("teal"),u=Object(f.a)(d,2),p=u[0],g=u[1];Object(i.useEffect)(function(){Oe.ValidatorForm.addValidationRule("isColorNameUnique",function(e){return t.every(function(a){return a.name.toLowerCase()!==e.toLowerCase()})}),Oe.ValidatorForm.addValidationRule("isColorUnique",function(){return t.every(function(e){return e.color!==p})})},[t,p]);return m.a.createElement("div",null,m.a.createElement(Be.ChromePicker,{color:p,className:a.picker,onChangeComplete:function(e){g(e.hex)}}),m.a.createElement(Oe.ValidatorForm,{onSubmit:function(){n({color:p,name:c}),s("")},instantValidate:!1},m.a.createElement(Oe.TextValidator,{value:c,name:"newColorName",variant:"filled",margin:"normal",placeholder:"Color Name",className:a.colorNameInput,onChange:function(e){s(e.target.value)},validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used"]}),m.a.createElement(fe.a,{variant:"contained",type:"submit",color:"primary",className:a.addColor,disabled:o,style:{backgroundColor:o?"grey":p}},o?"Palette Full":"Add Color")))},De=t(122),Ae=Object(v.a)({root:(c={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(x.a)(c,C("lg"),{width:"25%",height:"20%"}),Object(x.a)(c,C("md"),{width:"50%",height:"10%"}),Object(x.a)(c,C("sm"),{width:"100%",height:"5%"}),c),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return G()(e.color).luminance()<=.08?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, ,0, 0.5)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}}),Ge=Object(De.b)(function(e){var a=Ae(e),t=e.color,o=e.name,n=e.handleClick;return m.a.createElement("div",{className:a.root,style:{backgroundColor:t}},m.a.createElement("div",{className:a.boxContent},m.a.createElement("span",null,o),m.a.createElement(ae.a,{className:a.deleteIcon,onClick:n})))}),Te=Object(De.a)(function(e){var a=e.colors,t=e.removeColor;return m.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return m.a.createElement(Ge,{index:a,key:e.name,color:e.color,name:e.name,handleClick:t(e.name)})}))});function Re(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,o)}return t}function Le(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?Re(t,!0).forEach(function(a){Object(x.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Re(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var Me=Object(v.a)(function(e){var a;return{root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Le({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:(a={flexGrow:1,height:"calc(100vh - 64px)",padding:"0px",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},Object(x.a)(a,C("sm"),{paddingTop:e.spacing(0)}),Object(x.a)(a,C("xs"),{paddingTop:e.spacing(1)}),a),contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}}),ze=function(e){var a=Me(),t=Object(i.useState)(!0),o=Object(f.a)(t,2),n=o[0],r=o[1],l=Object(i.useState)(oe[0].colors),c=Object(f.a)(l,2),s=c[0],d=c[1],u=s.length>=20;return m.a.createElement("div",{className:a.root},m.a.createElement(ge.a,null),m.a.createElement(Pe,{open:n,palettes:e.palettes,handleSubmit:function(a){a.colors=s,a.id=a.paletteName.toLowerCase().replace(/ /g,"-"),e.savePalette(a),e.history.push("/")},handleDrawerOpen:function(){r(!0)}}),m.a.createElement(me.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},m.a.createElement("div",{className:a.drawerHeader},m.a.createElement(k.a,{onClick:function(){r(!1)}},m.a.createElement(pe.a,null))),m.a.createElement(de.a,null),m.a.createElement("div",{className:a.container},m.a.createElement(se.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),m.a.createElement("div",{className:a.buttons},m.a.createElement(fe.a,{variant:"contained",color:"secondary",onClick:function(){d([])},className:a.button},"Clear Palette"),m.a.createElement(fe.a,{variant:"contained",color:"primary",disabled:u,onClick:function(){for(var a,t,o=e.palettes.map(function(e){return e.colors}).flat(),n=!0;n;)a=Math.floor(Math.random()*o.length),t=o[a],n=s.some(function(e){return e.name===t.name});d([].concat(Object(p.a)(s),[t]))},className:a.button},"Random Color")),m.a.createElement(Ie,{colors:s,addNewColor:function(e){d([].concat(Object(p.a)(s),[e]))},paletteIsFull:u}))),m.a.createElement("main",{className:Object(I.a)(a.content,Object(x.a)({},a.contentShift,n))},m.a.createElement("div",{className:a.drawerHeader}),m.a.createElement(Te,{axis:"xy",distance:20,colors:s,onSortEnd:function(e){var a=e.oldIndex,t=e.newIndex;d(be()(s,a,t))},removeColor:function(e){return function(){d(s.filter(function(a){return a.name!==e}))}}})))},He=function(e){var a=y(),t=Object(i.useState)("hex"),o=Object(f.a)(t,2),n=o[0],r=o[1],l=e.palette,c=l.paletteName,s=l.emoji,d=l.id,p=function(e,a){var t=[],o=e.colors;return Object.keys(o).forEach(function(e){t=t.concat(o[e].filter(function(e){return e.id===a}))}),t.slice(1)}(e.palette,e.colorId).map(function(e){return m.a.createElement(R,{key:e.name,name:e.name,background:e[n],showingFullPalette:!1})});return m.a.createElement("div",{className:a.Palette},m.a.createElement(F,{showingAllColors:!1,handleChange:function(e){r(e)}}),m.a.createElement("div",{className:a.colors},p,m.a.createElement("div",{className:a.goBack},m.a.createElement(u.b,{to:"/palette/".concat(d)},"GO BACK"))),m.a.createElement(M,{paletteName:c,emoji:s}))},Ue=[50,100,200,300,400,500,600,700,800,900],Ve=function(e){var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=!0,o=!1,n=void 0;try{for(var r,l=Ue[Symbol.iterator]();!(t=(r=l.next()).done);t=!0){var c=r.value;a.colors[c]=[]}}catch(h){o=!0,n=h}finally{try{t||null==l.return||l.return()}finally{if(o)throw n}}var i=!0,m=!1,s=void 0;try{for(var d,u=e.colors[Symbol.iterator]();!(i=(d=u.next()).done);i=!0){var p=d.value,f=qe(p.color,10).reverse();for(var g in f)a.colors[Ue[g]].push({name:"".concat(p.name," ").concat(Ue[g]),id:p.name.toLowerCase().replace(/ /g,"-"),hex:f[g],rgb:G()(f[g]).css(),rgba:G()(f[g]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){m=!0,s=h}finally{try{i||null==u.return||u.return()}finally{if(m)throw s}}return a},qe=function(e,a){return G.a.scale(function(e){return[G()(e).darken(1.4).hex(),e,"#fff"]}(e)).mode("lab").colors(a)},We=function(){var e=JSON.parse(window.localStorage.getItem("palettes")),a=Object(i.useState)(e||oe),t=Object(f.a)(a,2),o=t[0],n=t[1];Object(i.useEffect)(function(){window.localStorage.setItem("palettes",JSON.stringify(o))},[o]);var r=function(e){return o.find(function(a){return a.id===e})},l=function(e){n([].concat(Object(p.a)(o),[e]))},c=function(e){n(o.filter(function(a){return a.id!==e}))};return m.a.createElement(g.a,{render:function(e){var a=e.location;return m.a.createElement(h.a,null,m.a.createElement(b.a,{key:a.key,classNames:"page",timeout:500},m.a.createElement(g.c,{location:a},m.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return m.a.createElement(E,null,m.a.createElement(ie,Object.assign({},e,{palettes:o,deletePalette:c})))}}),m.a.createElement(g.a,{exact:!0,path:"/palette/new",render:function(e){return m.a.createElement(E,null,m.a.createElement(ze,Object.assign({},e,{palettes:o,savePalette:l})))}}),m.a.createElement(g.a,{exact:!0,path:"/palette/:paletteId",render:function(e){return m.a.createElement(E,null,m.a.createElement(z,{palette:Ve(r(e.match.params.paletteId))}))}}),m.a.createElement(g.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(e){return m.a.createElement(E,null,m.a.createElement(He,{colorId:e.match.params.colorId,palette:Ve(r(e.match.params.paletteId))}))}}),m.a.createElement(g.a,{render:function(e){return m.a.createElement(E,null,m.a.createElement(ie,Object.assign({},e,{palettes:o,deletePalette:c})))}}))))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(m.a.createElement(u.a,{basename:"/react-colors-app"},m.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[256,1,2]]]);
//# sourceMappingURL=main.a13c36ce.chunk.js.map