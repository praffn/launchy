module.exports=function(t){function e(a){if(l[a])return l[a].exports;var o=l[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var l={};return e.m=t,e.c=l,e.d=function(t,l,a){e.o(t,l)||Object.defineProperty(t,l,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(l,"a",l),l},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,l){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var l=0;l<e.length;l++){var a=e[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,l,a){return l&&t(e.prototype,l),a&&t(e,a),e}}(),i={launchModal:"a",closeModal:"a",modalWindow:"div",modalContent:"div",modalOverlay:"div",modalTitle:"h2"},n={modalLaunchLink:"modal__launch-link",modalCloseLink:"modal__close-link",modalWindow:"modal__window",modalContent:"modal__content",modalOverlay:"modal__overlay",modalTitle:"modal__title",modalWindowIsVisible:"modal__window--is-visible",modalOverlayIsVisible:"modal__overlay--is-visible"},s={launchyText:"data-launchy-text",launchyTitle:"data-launchy-title"},d={launchyElements:"[data-launchy]",launchyControl:"launchy-control-",launchyDialog:"launchy-dialog-",launchyCloseControl:"launchy-close-control-",modalOverlay:"modal-overlay-",modalTitle:"modal-title-"},r={modalClose:"Close modal window!",modalError:"Launchy container must have a `data-launchy-text` attribute!",modalErrorEmpty:"Launchy container `data-launchy-text` attribute cannot be empty!",modalWarning:"Launchy container should have a `data-launchy-title` attribute, or be sure to supply your own heading! (Prefereably an `<h2>`.)"},h=0,c=function(){function t(e){a(this,t),this.focusable=l(1),this.launchyId=h,this.hasTitle=!!e.title,this.modalIsVisible=!1,this.activeElement=null,this.shiftKeyIsPressed=!1,this.allFocusable=null,this.firstFocusable=null,this.lastFocusable=null,this.createElements(e),this.insertElements(e),this.setupEventListeners(),h++}return o(t,[{key:"createElements",value:function(t){this.launchControl=document.createElement(i.launchModal),this.launchControl.id=""+d.launchyControl+this.launchyId,this.launchControl.href="#"+d.launchyDialog+this.launchyId,this.launchControl.classList.add(n.modalLaunchLink),this.launchControl.textContent=t.text,this.closeControl=document.createElement(i.closeModal),this.closeControl.id=""+d.launchyCloseControl+this.launchyId,this.closeControl.href="#"+d.launchyControl+this.launchyId,this.closeControl.classList.add(n.modalCloseLink),this.closeControl.setAttribute("aria-label",r.modalClose),this.closeControl.innerHTML='<span aria-hidden="true">&times;</span>',this.modalWindow=document.createElement(i.modalWindow),this.modalWindow.id=""+d.launchyDialog+this.launchyId,this.modalWindow.classList.add(n.modalWindow),this.modalWindow.setAttribute("tabindex",-1),this.modalWindow.setAttribute("role","dialog"),this.modalWindow.setAttribute("aria-hidden",!0),this.hasTitle&&this.modalWindow.setAttribute("aria-labelledby",""+d.modalTitle+this.launchyId),this.modalOverlay=document.createElement(i.modalOverlay),this.modalOverlay.id=""+d.modalOverlay+this.launchyId,this.modalOverlay.classList.add(n.modalOverlay),this.modalOverlay.setAttribute("tabindex",0),this.modalContent=document.createElement(i.modalContent),this.modalContent.classList.add(n.modalContent),this.hasTitle&&(this.modalTitle=document.createElement(i.modalTitle),this.modalTitle.id=""+d.modalTitle+this.launchyId,this.modalTitle.classList.add(n.modalTitle),this.modalTitle.textContent=t.title)}},{key:"insertElements",value:function(t){t.target.parentNode.insertBefore(this.launchControl,t.target),t.target.parentNode.insertBefore(this.modalWindow,t.target),this.modalWindow.appendChild(this.modalContent),this.modalContent.appendChild(this.closeControl),this.hasTitle&&this.modalContent.appendChild(this.modalTitle),this.modalContent.appendChild(t.target),document.body.appendChild(this.modalOverlay)}},{key:"setupEventListeners",value:function(){this.launchControl.addEventListener("click",this.showModal.bind(this),!1),this.closeControl.addEventListener("click",this.hideModal.bind(this),!1),this.modalOverlay.addEventListener("click",this.hideModal.bind(this),!1),document.addEventListener("focus",this.trapFocus.bind(this),!0),document.addEventListener("keydown",this.checkEsc.bind(this),!1)}},{key:"showModal",value:function(t){t.preventDefault(),this.activeElement=document.activeElement,this.modalIsVisible=!0,this.allFocusable=this.modalWindow.querySelectorAll(this.focusable),this.firstFocusable=this.allFocusable[0],this.lastFocusable=this.allFocusable[this.allFocusable.length-1],this.modalWindow.classList.add(n.modalWindowIsVisible),this.modalOverlay.classList.add(n.modalOverlayIsVisible),this.modalWindow.setAttribute("aria-hidden",!1),this.modalWindow.focus()}},{key:"hideModal",value:function(t){t.preventDefault(),this.modalIsVisible=!1,this.allFocusable=null,this.firstFocusable=null,this.lastFocusable=null,this.modalWindow.classList.remove(n.modalWindowIsVisible),this.modalOverlay.classList.remove(n.modalOverlayIsVisible),this.modalWindow.setAttribute("aria-hidden",!0),this.activeElement.focus()}},{key:"trapFocus",value:function(t){this.modalIsVisible&&!this.modalWindow.contains(t.target)&&(t.stopPropagation(),this.shiftKeyIsPressed?this.lastFocusable.focus():this.firstFocusable.focus())}},{key:"checkEsc",value:function(t){this.modalIsVisible&&(this.shiftKeyIsPressed=t.shiftKey,27===t.keyCode&&this.hideModal(t))}}]),t}(),u=document.querySelectorAll(d.launchyElements),m=!0,y=!1,b=void 0;try{for(var f,v=Array.from(u)[Symbol.iterator]();!(m=(f=v.next()).done);m=!0){var C=f.value,p=C.getAttribute(s.launchyText),w=C.getAttribute(s.launchyTitle);if(!p)throw Error(r.modalError);if(""===p.trim())throw Error(r.modalErrorEmpty);w||console.warn(r.modalWarning);new c({target:C,text:p,title:w})}}catch(t){y=!0,b=t}finally{try{!m&&v.return&&v.return()}finally{if(y)throw b}}e.Launchy=c},function(t,e){t.exports='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'}]);