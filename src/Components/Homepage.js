import React from "react";
import style from "../css/homepage.module.css";
import margerita from "../Images/items/margerita.png";
import cheesencorn from "../Images/items/cheesencorn.png";
import farmhouse from "../Images/items/farmhouse.png";
import peppypaneer from "../Images/items/peppypaneer.png";
import veggieparadise from "../Images/items/veggieparadise.png";
import chickensausage from "../Images/items/chickensausage.png";
import pepperbarbecuechicken from "../Images/items/pepperbarbecuechicken.png";

import capsicum from "../Images/items/capsicum.png";
import goldencorn from "../Images/items/goldencorn.png";
import onion from "../Images/items/onion.png";
import paneer from "../Images/items/paneer.png";
import tomato from "../Images/items/tomato.png";
import paneermakhani from "../Images/items/paneermakhani.png";
import inditandoorpaneer from "../Images/items/inditandoorpaneer.png";
import freshveggie from "../Images/items/freshveggie.png";
import mexicangreenwave from "../Images/items/mexicangreenwave.png";

import chickendominator from "../Images/items/chickendominator.png";
import chickenfiesta from "../Images/items/chickenfiesta.png";
import chickengoldendelight from "../Images/items/chickengoldendelight.png";
import indichickentikka from "../Images/items/indichickentikka.png";
import nonvegsupreme from "../Images/items/nonvegsupreme.png";

import pepsi from "../Images/items/pepsi.jpg";
import mirinda from "../Images/items/mirinda.png";
import pepsiblack from "../Images/items/pepsiblack.png";
import nimbooz from "../Images/items/nimbooz.jpg";
import bailyone from "../Images/items/BailleyONE.jpg";

import vegvaluecombo from "../Images/items/vegvaluecombo.png";
import nonvegvaluecombo from "../Images/items/nonvegvaluecombo.png";
import vegdeluxcombo from "../Images/items/vegdeluxcombo.png";
import nonvegdeluxcombo from "../Images/items/nonvegdeluxcombo.png";
import nonvegpremiumcombo from "../Images/items/nonvegpremiumcombo.png";

import chocolava from "../Images/items/chocolava.png";
import brownie from "../Images/items/browniefantasy.png";
import mousse from "../Images/items/moussecake.png";
import redvelvet from "../Images/items/redvelevt.jpg";

import { useState } from "react";

var type1,type2; let p1;
var type3,type4; let p2;
var type5,type6; let p3;
var type7,type8; let p4;
var type9,type10; let p5;
var type11,type12; let p6;
var type13,type14; let p7;
var type15,type16; let p8;
var type17,type18; let p9;
var type19,type20; let p10;
var type21,type22; let p11;
var type23,type24; let p12;
var type25,type26; let p13;
var type27,type28; let p14;
var type29,type30; let p15;
var type31,type32; let p16;
var type33,type34; let p17;
var type35,type36; let p18;
var type37,type38; let p19;
var type39,type40; let p20;
var type41,type42; let p21;

function Homepage() {


// margerita
  const [result1, setResult1] = useState("");
  const handleclick1 = (e) => {
    setResult1(e.target.name);
    type1=(e.target.name);
  };
  const [result2, setResult2] = useState("");
  const handleclick2 = (e) => {
    setResult2(e.target.name); 
    type2=(e.target.name);
    
  };

// cheese n corn
  const [result3, setResult3] = useState("");
  const handleclick3 = (e) => {
    setResult3(e.target.name);
    type3=(e.target.name);
  };
  const [result4, setResult4] = useState("");
  const handleclick4 = (e) => {
    setResult4(e.target.name);
    type4=(e.target.name);
  };


// farmhouse
const [result5, setResult5] = useState("");
const handleclick5 = (e) => {
  setResult5(e.target.name);
  type5=(e.target.name)
};
const [result6, setResult6] = useState("");
const handleclick6 = (e) => {
  setResult6(e.target.name);
  type6=(e.target.name)
};

// peppy paneer
const [result7, setResult7] = useState("");
const handleclick7 = (e) => {
  setResult7(e.target.name);
  type7=(e.target.name)
};
const [result8, setResult8] = useState("");
const handleclick8 = (e) => {
  setResult8(e.target.name);
  type8=(e.target.name)
};

  // veggie paradise
  const [result9, setResult9] = useState("");
  const handleclick9 = (e) => {
    setResult9(e.target.name);
    type9=(e.target.name)
  };
  const [result10, setResult10] = useState("");
  const handleclick10 = (e) => {
    setResult10(e.target.name);
    type10=(e.target.name)
  };

   //chicken sausage
   const [result11, setResult11] = useState("");
   const handleclick11 = (e) => {
     setResult11(e.target.name);
     type11=(e.target.name)
   };
   const [result12, setResult12] = useState("");
   const handleclick12 = (e) => {
     setResult12(e.target.name);
     type12=(e.target.name)
   };


   // paper barbique chiken
  const [result13, setResult13] = useState("");
  const handleclick13 = (e) => {
    setResult13(e.target.name);
    type13=(e.target.name)
  };
  const [result14, setResult14] = useState("");
  const handleclick14 = (e) => {
    setResult14(e.target.name);
    type14=(e.target.name)
  };


    // capsicum
    const [result15, setResult15] = useState("");
    const handleclick15 = (e) => {
      setResult15(e.target.name);
      type15=(e.target.name)
    };
    const [result16, setResult16] = useState("");
    const handleclick16 = (e) => {
      setResult16(e.target.name);
      type16=(e.target.name)
    };
    
  
  
    // golden corn
    const [result17, setResult17] = useState("");
    const handleclick17 = (e) => {
      setResult17(e.target.name);
      type17=(e.target.name)
    };
    const [result18, setResult18] = useState("");
    const handleclick18 = (e) => {
      setResult18(e.target.name);
      type18=(e.target.name)
    };
  
  
    // onion
    const [result19, setResult19] = useState("");
    const handleclick19 = (e) => {
      setResult19(e.target.name);
      type19=(e.target.name)
    };
    const [result20, setResult20] = useState("");
    const handleclick20 = (e) => {
      setResult20(e.target.name);
      type20=(e.target.name)
    };
  
    // paneer and onion
    const [result21, setResult21] = useState("");
    const handleclick21 = (e) => {
      setResult21(e.target.name);
      type21=(e.target.name)
    };
    const [result22, setResult22] = useState("");
    const handleclick22 = (e) => {
      setResult22(e.target.name);
      type22=(e.target.name)
    };
  
  
    // tomato
    const [result23, setResult23] = useState("");
    const handleclick23 = (e) => {
      setResult23(e.target.name);
      type23=(e.target.name)
    };
    const [result24, setResult24] = useState("");
    const handleclick24 = (e) => {
      setResult24(e.target.name);
      type24=(e.target.name)
    };


    // paneer makhani
    const [result25, setResult25] = useState("");
    const handleclick25 = (e) => {
      setResult25(e.target.name);
      type25=(e.target.name)
    };
    const [result26, setResult26] = useState("");
    const handleclick26 = (e) => {
      setResult26(e.target.name);
      type26=(e.target.name)
    };
  // indi tandoori paneer
  const [result27, setResult27] = useState("");
  const handleclick27 = (e) => {
    setResult27(e.target.name);
    type27=(e.target.name)
  };
  const [result28, setResult28] = useState("");
  const handleclick28 = (e) => {
    setResult28(e.target.name);
    type28=(e.target.name)
  };
  // fresh veggie
  const [result29, setResult29] = useState("");
  const handleclick29 = (e) => {
    setResult29(e.target.name);
    type29=(e.target.name)
  };
  const [result30, setResult30] = useState("");
  const handleclick30 = (e) => {
    setResult30(e.target.name);
    type30=(e.target.name)
  };

  // maxican green wave
  const [result31, setResult31] = useState("");
  const handleclick31 = (e) => {
    setResult31(e.target.name);
    type31=(e.target.name)
  };
  const [result32, setResult32] = useState("");
  const handleclick32 = (e) => {
    setResult32(e.target.name);
    type32=(e.target.name)
  };

  // chicken dominator
  const [result33, setResult33] = useState("");
  const handleclick33 = (e) => {
    setResult33(e.target.name);
    type33=(e.target.name)
  };
  const [result34, setResult34] = useState("");
  const handleclick34 = (e) => {
    setResult34(e.target.name);
    type34=(e.target.name)
  };
  // chicken fiesta
  const [result35, setResult35] = useState("");
  const handleclick35 = (e) => {
    setResult35(e.target.name);
    type35=(e.target.name)
  };
  const [result36, setResult36] = useState("");
  const handleclick36 = (e) => {
    setResult36(e.target.name);
    type36=(e.target.name)
  };

   // chicken golden delight
   const [result37, setResult37] = useState("");
   const handleclick37 = (e) => {
     setResult37(e.target.name);
     type37=(e.target.name)
   };
   const [result38, setResult38] = useState("");
   const handleclick38 = (e) => {
     setResult38(e.target.name);
     type38=(e.target.name)
   };

   // indi chicken tikka
  const [result39, setResult39] = useState("");
  const handleclick39 = (e) => {
    setResult39(e.target.name);
    type39=(e.target.name)
  };
  const [result40, setResult40] = useState("");
  const handleclick40 = (e) => {
    setResult40(e.target.name);
    type40=(e.target.name)
  };

  // nonveg supreme
  const [result41, setResult41] = useState("");
  const handleclick41 = (e) => {
    setResult41(e.target.name);
    type41=(e.target.name)
  };
  const [result42, setResult42] = useState("");
  const handleclick42 = (e) => {
    setResult42(e.target.name);
    type42=(e.target.name)
  };


  if(type1==="Regular" && type2==="New Hand"){
    p1=("₹ "+109)

  }
  else if(type1==="Regular" && type2==="Classic"){
    p1=("₹ "+109)

  }
  else if(type1==="Regular" && type2==="Cheese Burst"){
    p1=("₹ "+184)

  }
  else if(type1==="Medium" && type2==="New Hand"){
    p1=("₹ "+239)

  }
  else if(type1==="Medium" && type2==="Classic"){
    p1=("₹ "+239)

  }
  else if(type1==="Medium" && type2==="Cheese Burst"){
    p1=("₹ "+338)

  }
  else if(type1==="Large" && type2==="New Hand"){
    p1=("₹ "+449)

  }
  else if(type1==="Large" && type2==="Classic"){
    p1=("₹ "+449)

  }
  else if(type1==="Large" && type2==="Cheese Burst"){
    p1=("₹ "+499)

  }





  
  if(type3==="Regular" && type4==="New Hand"){
    p2=("₹ "+209)
  }
  else if(type3==="Regular" && type4==="Classic"){
    p2=("₹ "+209)

  }
  else if(type3==="Regular" && type4==="Cheese Burst"){
    p2=("₹ "+284)

  }
  else if(type3==="Medium" && type4==="New Hand"){
    p2=("₹ "+379)

  }
  else if(type3==="Medium" && type4==="Classic"){
    p2=("₹ "+399)

  }
  else if(type3==="Medium" && type4==="Cheese Burst"){
    p2=("₹ "+478)

  }
  else if(type3==="Large" && type4==="New Hand"){
    p2=("₹ "+609)

  }
  else if(type3==="Large" && type4==="Classic"){
    p2=("₹ "+629)

  }
  else if(type3==="Large" && type4==="Cheese Burst"){
    p2=("₹ "+699)

  }



  if(type5==="Regular" && type6==="New Hand"){
    p3=("₹ "+209)

  }
  else if(type5==="Regular" && type6==="Classic"){
    p3=("₹ "+209)

  }
  else if(type5==="Regular" && type6==="Cheese Burst"){
    p3=("₹ "+284)

  }
  else if(type5==="Medium" && type6==="New Hand"){
    p3=("₹ "+379)

  }
  else if(type5==="Medium" && type6==="Classic"){
    p3=("₹ "+399)

  }
  else if(type5==="Medium" && type6==="Cheese Burst"){
    p3=("₹ "+478)

  }
  else if(type5==="Large" && type6==="New Hand"){
    p3=("₹ "+609)

  }
  else if(type5==="Large" && type6==="Classic"){
    p3=("₹ "+629)

  }
  else if(type5==="Large" && type6==="Cheese Burst"){
    p3=("₹ "+699)

  }


  if(type7==="Regular" && type8==="New Hand"){
    p4=("₹ "+209)

  }
  else if(type7==="Regular" && type8==="Classic"){
    p4=("₹ "+209)

  }
  else if(type7==="Regular" && type8==="Cheese Burst"){
    p4=("₹ "+284)

  }
  else if(type7==="Medium" && type8==="New Hand"){
    p4=("₹ "+379)

  }
  else if(type7==="Medium" && type8==="Classic"){
    p4=("₹ "+399)

  }
  else if(type7==="Medium" && type8==="Cheese Burst"){
    p4=("₹ "+478)

  }
  else if(type7==="Large" && type8==="New Hand"){
    p4=("₹ "+609)

  }
  else if(type7==="Large" && type8==="Classic"){
    p4=("₹ "+629)

  }
  else if(type7==="Large" && type8==="Cheese Burst"){
    p4=("₹ "+699)

  }


  if(type9==="Regular" && type10==="New Hand"){
    p5=("₹ "+209)

  }
  else if(type9==="Regular" && type10==="Classic"){
    p5=("₹ "+209)

  }
  else if(type9==="Regular" && type10==="Cheese Burst"){
    p5=("₹ "+284)

  }
  else if(type9==="Medium" && type10==="New Hand"){
    p5=("₹ "+379)

  }
  else if(type9==="Medium" && type10==="Classic"){
    p5=("₹ "+399)

  }
  else if(type9==="Medium" && type10==="Cheese Burst"){
    p5=("₹ "+478)

  }
  else if(type9==="Large" && type10==="New Hand"){
    p5=("₹ "+609)

  }
  else if(type9==="Large" && type10==="Classic"){
    p5=("₹ "+629)

  }
  else if(type9==="Large" && type10==="Cheese Burst"){
    p5=("₹ "+699)

  }

 
  if(type11==="Regular" && type12==="New Hand"){
    p6=("₹ "+209)

  }
  else if(type11==="Regular" && type12==="Classic"){
    p6=("₹ "+209)

  }
  else if(type11==="Regular" && type12==="Cheese Burst"){
    p6=("₹ "+284)

  }
  else if(type11==="Medium" && type12==="New Hand"){
    p6=("₹ "+379)

  }
  else if(type11==="Medium" && type12==="Classic"){
    p6=("₹ "+399)

  }
  else if(type11==="Medium" && type12==="Cheese Burst"){
    p6=("₹ "+478)

  }
  else if(type11==="Large" && type12==="New Hand"){
    p6=("₹ "+609)

  }
  else if(type11==="Large" && type12==="Classic"){
    p6=("₹ "+629)

  }
  else if(type11==="Large" && type12==="Cheese Burst"){
    p6=("₹ "+699)

  }

  
  if(type13==="Regular" && type14==="New Hand"){
    p7=("₹ "+209)

  }
  else if(type13==="Regular" && type14==="Classic"){
    p7=("₹ "+209)

  }
  else if(type13==="Regular" && type14==="Cheese Burst"){
    p7=("₹ "+284)

  }
  else if(type13==="Medium" && type14==="New Hand"){
    p7=("₹ "+379)

  }
  else if(type13==="Medium" && type14==="Classic"){
    p7=("₹ "+399)

  }
  else if(type13==="Medium" && type14==="Cheese Burst"){
    p1=("₹ "+478)

  }
  else if(type13==="Large" && type14==="New Hand"){
    p7=("₹ "+609)

  }
  else if(type13==="Large" && type14==="Classic"){
    p7=("₹ "+629)

  }
  else if(type13==="Large" && type14==="Cheese Burst"){
    p7=("₹ "+699)

  }




  if(type15==="Regular" && type16==="New Hand"){
    p1=("₹ "+209)

  }
  else if(type15==="Regular" && type16==="Classic"){
    p1=("₹ "+209)

  }
  else if(type15==="Regular" && type16==="Cheese Burst"){
    p1=("₹ "+284)

  }


  if(type17==="Regular" && type18==="New Hand"){
    p1=("₹ "+209)

  }
  else if(type17==="Regular" && type18==="Classic"){
    p1=("₹ "+209)

  }
  else if(type17==="Regular" && type18==="Cheese Burst"){
    p1=("₹ "+284)

  }

  
  if(type19==="Regular" && type20==="New Hand"){
    p1=("₹ "+209)

  }
  else if(type19==="Regular" && type20==="Classic"){
    p1=("₹ "+209)

  }
  else if(type19==="Regular" && type20==="Cheese Burst"){
    p1=("₹ "+284)

  }

  
  if(type21==="Regular" && type22==="New Hand"){
    p1=("₹ "+209)

  }
  else if(type21==="Regular" && type22==="Classic"){
    p1=("₹ "+209)

  }
  else if(type21==="Regular" && type22==="Cheese Burst"){
    p1=("₹ "+284)

  }
  


  if(type23==="Regular" && type24==="New Hand"){
    p1=("₹ "+209)

  }
  else if(type23==="Regular" && type24==="Classic"){
    p1=("₹ "+209)

  }
  else if(type23==="Regular" && type24==="Cheese Burst"){
    p1=("₹ "+284)

  }
  


  if(type25==="Regular" && type26==="New Hand"){
    p1=("₹ "+109)

  }
  else if(type25==="Regular" && type26==="Classic"){
    p1=("₹ "+109)

  }
  else if(type25==="Regular" && type26==="Cheese Burst"){
    p1=("₹ "+184)

  }
  else if(type25==="Medium" && type26==="New Hand"){
    p1=("₹ "+239)

  }
  else if(type25==="Medium" && type26==="Classic"){
    p1=("₹ "+239)

  }
  else if(type25==="Medium" && type26==="Cheese Burst"){
    p1=("₹ "+338)

  }
  else if(type25==="Large" && type26==="New Hand"){
    p1=("₹ "+449)

  }
  else if(type25==="Large" && type26==="Classic"){
    p1=("₹ "+449)

  }
  else if(type25==="Large" && type26==="Cheese Burst"){
    p1=("₹ "+499)

  }


  


  if(type27==="Regular" && type28==="New Hand"){
    p1=("₹ "+109)

  }
  else if(type27==="Regular" && type28==="Classic"){
    p1=("₹ "+109)

  }
  else if(type27==="Regular" && type28==="Cheese Burst"){
    p1=("₹ "+184)

  }
  else if(type27==="Medium" && type28==="New Hand"){
    p1=("₹ "+239)

  }
  else if(type27==="Medium" && type28==="Classic"){
    p1=("₹ "+239)

  }
  else if(type27==="Medium" && type28==="Cheese Burst"){
    p1=("₹ "+338)

  }
  else if(type27==="Large" && type28==="New Hand"){
    p1=("₹ "+449)

  }
  else if(type27==="Large" && type28==="Classic"){
    p1=("₹ "+449)

  }
  else if(type27==="Large" && type28==="Cheese Burst"){
    p1=("₹ "+499)

  }



  
  if(type29==="Regular" && type30==="New Hand"){
    p1=("₹ "+109)

  }
  else if(type29==="Regular" && type30==="Classic"){
    p1=("₹ "+109)

  }
  else if(type29==="Regular" && type30==="Cheese Burst"){
    p1=("₹ "+184)

  }
  else if(type29==="Medium" && type39==="New Hand"){
    p1=("₹ "+239)

  }
  else if(type29==="Medium" && type30==="Classic"){
    p1=("₹ "+239)

  }
  else if(type29==="Medium" && type30==="Cheese Burst"){
    p1=("₹ "+338)

  }
  else if(type29==="Large" && type30==="New Hand"){
    p1=("₹ "+449)

  }
  else if(type29==="Large" && type30==="Classic"){
    p1=("₹ "+449)

  }
  else if(type29==="Large" && type30==="Cheese Burst"){
    p1=("₹ "+499)

  }



  
  if(type31==="Regular" && type32==="New Hand"){
    p1=("₹ "+109)

  }
  else if(type31==="Regular" && type32==="Classic"){
    p1=("₹ "+109)

  }
  else if(type31==="Regular" && type32==="Cheese Burst"){
    p1=("₹ "+184)

  }
  else if(type31==="Medium" && type32==="New Hand"){
    p1=("₹ "+239)

  }
  else if(type31==="Medium" && type32==="Classic"){
    p1=("₹ "+239)

  }
  else if(type31==="Medium" && type32==="Cheese Burst"){
    p1=("₹ "+338)

  }
  else if(type31==="Large" && type32==="New Hand"){
    p1=("₹ "+449)

  }
  else if(type31==="Large" && type32==="Classic"){
    p1=("₹ "+449)

  }
  else if(type31==="Large" && type32==="Cheese Burst"){
    p1=("₹ "+499)

  }





  if(type33==="Regular" && type34==="New Hand"){
    p1=("₹ "+109)

  }
  else if(type33==="Regular" && type34==="Classic"){
    p1=("₹ "+109)

  }
  else if(type33==="Regular" && type34==="Cheese Burst"){
    p1=("₹ "+184)

  }
  else if(type33==="Medium" && type34==="New Hand"){
    p1=("₹ "+239)

  }
  else if(type33==="Medium" && type34==="Classic"){
    p1=("₹ "+239)

  }
  else if(type33==="Medium" && type34==="Cheese Burst"){
    p1=("₹ "+338)

  }
  else if(type33==="Large" && type34==="New Hand"){
    p1=("₹ "+449)

  }
  else if(type33==="Large" && type4==="Classic"){
    p1=("₹ "+449)

  }
  else if(type33==="Large" && type34==="Cheese Burst"){
    p1=("₹ "+499)

  }





  if(type35==="Regular" && type36==="New Hand"){
    p18=("₹ "+109)

  }
  else if(type35==="Regular" && type36==="Classic"){
    p18=("₹ "+109)

  }
  else if(type35==="Regular" && type36==="Cheese Burst"){
    p18=("₹ "+184)

  }
  else if(type35==="Medium" && type36==="New Hand"){
    p18=("₹ "+239)

  }
  else if(type35==="Medium" && type36==="Classic"){
    p18=("₹ "+239)

  }
  else if(type35==="Medium" && type36==="Cheese Burst"){
    p18=("₹ "+338)

  }
  else if(type35==="Large" && type36==="New Hand"){
    p18=("₹ "+449)

  }
  else if(type35==="Large" && type36==="Classic"){
    p18=("₹ "+449)

  }
  else if(type35==="Large" && type36==="Cheese Burst"){
    p18=("₹ "+499)

  }


 
  if(type37==="Regular" && type38==="New Hand"){
    p19=("₹ "+109)

  }
  else if(type37==="Regular" && type38==="Classic"){
    p19=("₹ "+109)

  }
  else if(type37==="Regular" && type38==="Cheese Burst"){
    p19=("₹ "+184)

  }
  else if(type37==="Medium" && type38==="New Hand"){
    p19=("₹ "+239)

  }
  else if(type37==="Medium" && type38==="Classic"){
    p19=("₹ "+239)

  }
  else if(type37==="Medium" && type38==="Cheese Burst"){
    p19=("₹ "+338)

  }
  else if(type37==="Large" && type38==="New Hand"){
    p19=("₹ "+449)

  }
  else if(type37==="Large" && type38==="Classic"){
    p19=("₹ "+449)

  }
  else if(type37==="Large" && type38==="Cheese Burst"){
    p19=("₹ "+499)

  }
  


  if(type39==="Regular" && type40==="New Hand"){
    p20=("₹ "+109)

  }
  else if(type39==="Regular" && type40==="Classic"){
    p20=("₹ "+109)

  }
  else if(type39==="Regular" && type40==="Cheese Burst"){
    p20=("₹ "+184)

  }
  else if(type39==="Medium" && type40==="New Hand"){
    p20=("₹ "+239)

  }
  else if(type39==="Medium" && type40==="Classic"){
    p20=("₹ "+239)

  }
  else if(type39==="Medium" && type40==="Cheese Burst"){
    p20=("₹ "+338)

  }
  else if(type39==="Large" && type40==="New Hand"){
    p20=("₹ "+449)

  }
  else if(type39==="Large" && type40==="Classic"){
    p20=("₹ "+449)

  }
  else if(type39==="Large" && type40==="Cheese Burst"){
    p20=("₹ "+499)

  }
 
  

  if(type41==="Regular" && type42==="New Hand"){
    p21=("₹ "+109)

  }
  else if(type41==="Regular" && type42==="Classic"){
    p21=("₹ "+109)

  }
  else if(type41==="Regular" && type42==="Cheese Burst"){
    p21=("₹ "+184)

  }
  else if(type41==="Medium" && type42==="New Hand"){
    p21=("₹ "+239)

  }
  else if(type41==="Medium" && type42==="Classic"){
    p21=("₹ "+239)

  }
  else if(type41==="Medium" && type42==="Cheese Burst"){
    p21=("₹ "+338)

  }
  else if(type41==="Large" && type42==="New Hand"){
    p21=("₹ "+449)

  }
  else if(type41==="Large" && type42==="Classic"){
    p21=("₹ "+449)

  }
  else if(type41==="Large" && type42==="Cheese Burst"){
    p21=("₹ "+499)

  }
  return (
    <>
    <section className={style.navbarsecond}>
    <a href="#one"className={style.move1}>BESTSELLERS</a>
    <a href="#two"className={style.move}>VEG PIZZA</a>
    <a href="#three"className={style.move}>NON-VEG PIZZA</a>
    <a href="#four"className={style.move}>BEVERAGES</a>
    <a href="#five"className={style.move}>PARTY COMBOS</a>
    <a href="#six"className={style.move}>DESSERT</a>























    </section>
      <section className={style.bestsellers} id="one">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>BESTSELLERS</div>
        <section className={style.row1}>
          <div className={style.item1}>
            <img
              src={margerita}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p1}
                    name="name1"
                    
                  />
            <h2 className={style.heading1}>Margherita</h2>
            <p className={style.para1}>
              Classic delight with 100% real mozzarella cheese
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result1}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick1}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick1}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick1}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result2}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick2}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick2}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick2}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>








          {/* newone */}
          <div className={style.item2}>
            <img
              src={cheesencorn}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p2}
                  />
            <h2 className={style.heading1}>Cheese n Corn</h2>
            <p className={style.para1}>
              A delectable combination of sweet And juicy golden corn
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result3}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick3}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick3}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick3}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result4}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick4}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick4}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick4}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={farmhouse}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p3}
                  />
            <h2 className={style.heading1}>Farmhouse</h2>
            <p className={style.para1}>
            Delightful combination of onion, capsicum, tomato and mushroom
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result5}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick5}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick5}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick5}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result6}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick6}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick6}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick6}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={peppypaneer}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p4}
                  />
            <h2 className={style.heading1}>Peppy Paneer</h2>
            <p className={style.para1}>
            Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result7}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick7}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick7}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick7}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result8}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick8}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick8}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick8}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>

        <section className={style.row1}>
          {/* newone */}
          <div className={style.item5}>
            <img
              src={veggieparadise}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p5}
                  />
            <h2 className={style.heading1}>Veggie Paradise</h2>
            <p className={style.para1}>
              The awesome foursome! Golden corn, black olives, capsicum, red
              paprika
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result9}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick9}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick9}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick9}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result10}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick10}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick10}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick10}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item6}>
            <img
              src={chickensausage}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p6}
                  />
            <h2 className={style.heading1}>Chicken Sausage</h2>
            <p className={style.para1}>
              American classic! Spicy, herbed chicken sausage on pizza
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result11}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick11}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick11}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick11}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result12}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick12}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick12}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick12}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item7}>
            <img
              src={pepperbarbecuechicken}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p7}
                  />
            <h2 className={style.heading1}>Pepper Barbecue Chicken</h2>
            <p className={style.para1}>
              Pepper barbecue chicken for that extra zing
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result13}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick13}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick13}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick13}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result14}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick14}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick14}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick14}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>
      </section>


























      {/* new section starts from here */}

      <section className={style.bestsellers} id="two">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>VEG PIZZA</div>
        <section className={style.row1}>
          <div className={style.item1}>
            <img
              src={capsicum}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p8}
                  />
            <h2 className={style.heading1}>Capsicum</h2>
            <p className={style.para1}>
              Fresh and crisp capsicum for the perfect crunch in pizza
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result15}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick15}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result16}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick16}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick16}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick16}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item2}>
            <img
              src={goldencorn}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p9}
                  />
            <h2 className={style.heading1}>Golden Corn</h2>
            <p className={style.para1}>
              Sweet and juicy golden corn for that lipsmacking taste
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result17}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick17}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result18}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick18}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick18}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick18}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={onion}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p10}
                  />
            <h2 className={style.heading1}>Onion</h2>
            <p className={style.para1}>
              Crunchy onion on a cheesy base. The pizza mania classic
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result19}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick19}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result20}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick20}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick20}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick20}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={paneer}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p11}
                  />
            <h2 className={style.heading1}>Paneer and Onion</h2>
            <p className={style.para1}>
              Creamy Paneer and Onion with cheese and tangy sauce
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result21}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick21}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                   
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result22}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick22}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick22}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick22}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>

        <section className={style.row1}>
          {/* newone */}
          <div className={style.item5}>
            <img
              src={tomato}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p12}
                  />
            <h2 className={style.heading1}>Tomato</h2>
            <p className={style.para1}>
              Juicy tomato in a flavourful combination with cheese and tangy
              sauce
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result23}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick23}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
            
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result24}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick24}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick24}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick24}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item5}>
            <img
              src={paneermakhani}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p13}
                  />
            <h2 className={style.heading1}>Paneer Makhani</h2>
            <p className={style.para1}>
              Flavorful twist of spicy makhani sauce topped with paneer and
              capsicum with extra cheese
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result25}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick25}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick25}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick25}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result26}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick26}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick26}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick26}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item5}>
            <img
              src={inditandoorpaneer}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p14}
                  />
            <h2 className={style.heading1}>Indi Tandoori Paneer</h2>
            <p className={style.para1}>
              It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with
              capsicum, red paprika and mint mayo
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result27}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick27}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick27}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick27}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result28}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick28}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick28}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick28}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          {/* newone */}
          <div className={style.item5}>
            <img
              src={freshveggie}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p15}
                  />
            <h2 className={style.heading1}>Fresh Veggie</h2>
            <p className={style.para1}>
              Delectable combination of onion and capsicum, a veggie lovers pick including mozzarella cheese
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result29}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick29}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick29}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick29}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result30}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick30}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick30}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick30}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>
{/* 
        newone */}
        <section className={style.row1}>
          <div className={style.item5}>
            <img
              src={mexicangreenwave}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p16}
                  />
            <h2 className={style.heading1}>Mexican Green Wave</h2>
            <p className={style.para1}>
            Mexican herbs sprinkled on onion, capsicum, tomato and jalapeno
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result31}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick31}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick31}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick31}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result32}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick32}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick32}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick32}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>
      </section>












      {/* new section starts from here */}
      <section className={style.bestsellers} id="three">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>NON-VEG PIZZA</div>
        <section className={style.row1}>
          <div className={style.item1}>
            <img
              src={chickendominator}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p17}
                  />
            <h2 className={style.heading1}>Chicken Dominator</h2>
            <p className={style.para1}>
            Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka and grilled chicken
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result33}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick33}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick33}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick33}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result34}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick34}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick34}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick34}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item2}>
            <img
              src={chickenfiesta}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p18}
                  />
            <h2 className={style.heading1}>Chicken Fiesta</h2>
            <p className={style.para1}>
            Grilled chicken rashers, peri-peri chicken, onion and capsicum, a complete fiesta
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result35}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick35}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick35}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick35}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result36}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick36}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick36}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick36}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={chickengoldendelight}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p19}
                  />
            <h2 className={style.heading1}>Chicken Golden Delight</h2>
            <p className={style.para1}>
            Double pepper barbecue chicken, golden corn and extra cheese, true delight
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result37}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick37}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick37}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick37}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result38}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick38}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick38}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick38}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={indichickentikka}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p20}
                  />
            <h2 className={style.heading1}>Indi Chicken Tikka</h2>
            <p className={style.para1}>
            The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika and mint mayo
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result39}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick39}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick39}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick39}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result40}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick40}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick40}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick40}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>

        <section className={style.row1}>
          {/* newone */}
          <div className={style.item5}>
            <img
              src={nonvegsupreme}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <input
                    type="text"
                    className={style.price}
                    value={p21}
                  />
            <h2 className={style.heading1}>Non Veg Supreme</h2>
            <p className={style.para1}>
            Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken
              sauce
            </p>
            <div className={style.line}></div>
            <div className={style.sizebase}>
              <ul className={style.ull}>
                <h4 className={style.size}> Size </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext1}
                    placeholder=" Choose Size▾"
                    value={result41}
                  />
                  <ul className={style.dropdown}>
                    <li>
                      <button
                        onClick={handleclick41}
                        name="Regular"
                        className={style.dr}
                      >
                        {" "}
                        Regular
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick41}
                        name="Medium"
                        className={style.dr}
                      >
                        {" "}
                        Medium
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick41}
                        name="Large"
                        className={style.dr}
                      >
                        {" "}
                        Large
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className={style.ull}>
                <h4 className={style.crust}> Crust </h4>
                <li>
                  <input
                    type="text"
                    className={style.ntext2}
                    placeholder="Crust type ▾"
                    value={result42}
                  />
                  <ul className={style.dropdown2}>
                    <li>
                      <button
                        onClick={handleclick42}
                        name="New Hand"
                        className={style.dr}
                      >
                        {" "}
                        New Hand
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick42}
                        name="Classic"
                        className={style.dr}
                      >
                        {" "}
                        Classic
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleclick42}
                        name="Cheese Burst"
                        className={style.dr}
                      >
                        {" "}
                        Cheese Burst
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          
        </section>
      </section>



      {/* new section starts from here */}
      <section className={style.bestsellers} id="four">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>BEVERAGES</div>
        <section className={style.row1}>
          <div className={style.item1}>
            <img
              src={pepsi}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 60</h2> 
            <h2 className={style.heading2}>Pepsi (500ml)</h2>
            <p className={style.para1}>
            Sparkling and Refreshing Beverage
            </p>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item2}>
            <img
              src={mirinda}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 60</h2> 
            <h2 className={style.heading2}>Mirinda (500ml)</h2>
            <p className={style.para1}>
            Delicious Orange Flavoured beverage
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={pepsiblack}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 60</h2> 
            <h2 className={style.heading2}>Pepsi Black Can</h2>
            <p className={style.para1}>
            Maximum Taste Zero Calories
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={nimbooz}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 60</h2> 
            <h2 className={style.heading2}>Nimbooz ( 350ml )</h2>
            <p className={style.para1}>
            Nimbooz ( 350ml )
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>

        <section className={style.row1}>
          {/* newone */}
          <div className={style.item5}>
            <img
              src={bailyone}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 60</h2> 
            <h2 className={style.heading2}>Bailley One (500ml)</h2>
            <p className={style.para1}>
            Packaged Drinking Water
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          
        </section>
      </section>


       {/* new section starts from here */}
       <section className={style.bestsellers} id="five">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>PARTY COMBOS</div>
        <section className={style.row1}>
          <div className={style.item1}>
            <img
              src={vegvaluecombo}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.price2}>₹ 1059</h2> 
            <h2 className={style.heading2}>Family House Party – Veg Value Combo</h2>
            <p className={style.para1}>
            Large Fresh Veggie Pizza + Garlic Bread With Cheesy Dip + 4 Brownie Fantasy + 2 Pepsi
            </p>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item2}>
            <img
              src={nonvegvaluecombo}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 1119</h2> 
            <h2 className={style.heading2}>Family House Party – Non Veg Value Combo</h2>
            <p className={style.para1}>
            Large Pepper BBQ Chicken Pizza + Garlic Bread + 4 Brownie Fantasy + 2 Pepsi
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={vegdeluxcombo}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 1459</h2> 
            <h2 className={style.heading2}>Family House Party – Veg Deluxe Combo</h2>
            <p className={style.para1}>
            Large Veg Extravaganza Pizza + 2 Garlic Bread + 4 Choco lava cake + 2 Pepsi
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={nonvegdeluxcombo}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 1489</h2> 
            <h2 className={style.heading2}>Family House Party – Non Veg Deluxe Combo</h2>
            <p className={style.para1}>
            Large Chicken Golden Delight Pizza + 2 Garlic Bread + 4 Choco lava cake + 2 Pepsi
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>

        <section className={style.row1}>
          {/* newone */}
          <div className={style.item5}>
            <img
              src={nonvegpremiumcombo}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 1647</h2> 
            <h2 className={style.heading2}>Family House Party – Non Veg Premium Combo</h2>
            <p className={style.para1}>
            Large Non Veg Supreme Pizza + 2 Stuffed Garlic Bread + 4 Choco lava cake + 2 Pepsi
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>

          
        </section>
      </section>


{/* new section starts from here */}
<section className={style.bestsellers} id="six">
        <div className={style.linemain}></div>
        <div className={style.mainhead}>DESSERT</div>
        <section className={style.row1}>
          <div className={style.item1}>
            <img
              src={redvelvet}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 139</h2>   
            <h2 className={style.heading2}>Red Velvet Lava Cake</h2>
            <p className={style.para1}>
            A truly indulgent experience with sweet and rich red velvet cake on a creamy cheese flavoured base
            </p>

            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item2}>
            <img
              src={chocolava}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 109</h2>   
            <h2 className={style.heading2}>Choco Lava Cake</h2>
            <p className={style.para1}>
            Chocolate lovers delight! Indulgent, gooey molten lava inside chocolate cake
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item3}>
            <img
              src={mousse}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
             <h2 className={style.price2}>₹ 109</h2>   
            <h2 className={style.heading2}>Butterscotch Mousse Cake</h2>
            <p className={style.para1}>
            Sweet temptation! Butterscotch flavored mousse
            </p>
            <br></br>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
          {/* newone */}
          <div className={style.item4}>
            <img
              src={brownie}
              className={style.border}
              alt=""
              width="300px"
              height="150px"
            />
            <h2 className={style.price2}>₹ 79</h2>      
            <h2 className={style.heading2}>Brownie Fantasy</h2>
            <p className={style.para1}>
            Sweet Temptation! Hot Chocolate Brownie drizzled with chocolate fudge sauce
            </p>
            <button className={style.addtocart} type="submit">
              ADD TO CART
            </button>
          </div>
        </section>
      </section>

    </>
  );
}

export default Homepage;
