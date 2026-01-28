module.exports=[37936,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"registerServerReference",{enumerable:!0,get:function(){return d.registerServerReference}});let d=a.r(11857)},13095,(a,b,c)=>{"use strict";function d(a){for(let b=0;b<a.length;b++){let c=a[b];if("function"!=typeof c)throw Object.defineProperty(Error(`A "use server" file can only export async functions, found ${typeof c}.
Read more: https://nextjs.org/docs/messages/invalid-use-server-value`),"__NEXT_ERROR_CODE",{value:"E352",enumerable:!1,configurable:!0})}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"ensureServerEntryExports",{enumerable:!0,get:function(){return d}})},66381,a=>{"use strict";var b=a.i(37936);async function c(a){if(!a.name||!a.email||!a.subject||!a.message)return{success:!1,error:"Please fill in all required fields"};if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email))return{success:!1,error:"Please provide a valid email address"};try{let b=`*New Quote Request from ASSAP Website*

*Contact Details:*
Name: ${a.name}
Email: ${a.email}
Phone: ${a.phone||"Not provided"}
Company: ${a.company||"Not provided"}

*Subject:* ${a.subject}

*Message:*
${a.message}

---
Sent from ASSAP Company Website`,c=encodeURIComponent(b),d=`https://wa.me/255752026592?text=${c}`;return{success:!0,message:"Redirecting to WhatsApp...",whatsappURL:d}}catch(a){return console.error("Error processing quote request:",a),{success:!1,error:"Failed to process your request. Please try again."}}}(0,a.i(13095).ensureServerEntryExports)([c]),(0,b.registerServerReference)(c,"40300a556578babb2495d794c278fd968a1e33325a",null),a.s([],87807),a.i(87807),a.s(["40300a556578babb2495d794c278fd968a1e33325a",()=>c],66381)}];

//# sourceMappingURL=_5c26dd00._.js.map