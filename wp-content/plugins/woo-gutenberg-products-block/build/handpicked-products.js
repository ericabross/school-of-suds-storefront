this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["handpicked-products"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],d=0,b=[];d<u.length;d++)i=u[d],c[i]&&b.push(c[i][0]),c[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);b.length;)b.shift()();return r.push.apply(r,s||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,u=1;u<o.length;u++){var a=o[u];0!==c[a]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},c={7:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return r.push([543,1,3,0]),o()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},17:function(e,t){!function(){e.exports=this.wp.apiFetch}()},18:function(e,t){!function(){e.exports=this.wp.editor}()},27:function(e,t){!function(){e.exports=this.wp.blocks}()},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t){!function(){e.exports=this.wp.compose}()},310:function(e,t,o){var n=o(311);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};o(66)(n,c);n.locals&&(e.exports=n.locals)},311:function(e,t,o){},35:function(e,t){!function(){e.exports=this.wp.url}()},38:function(e,t){!function(){e.exports=this.wp.keycodes}()},4:function(e,t){!function(){e.exports=this.lodash}()},41:function(e,t,o){"use strict";var n=o(15),c=o.n(n),r=o(0),i=o(1),u=o(5),a=o.n(u),s=o(3),l=function(e){var t=e.onChange,o=e.settings,n=o.button,u=o.price,a=o.rating,l=o.title;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(s.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:l?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(c()({},o,{title:!l}))}}),Object(r.createElement)(s.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:u?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:u,onChange:function(){return t(c()({},o,{price:!u}))}}),Object(r.createElement)(s.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(c()({},o,{rating:!a}))}}),Object(r.createElement)(s.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(c()({},o,{button:!n}))}}))};l.propTypes={settings:a.a.shape({button:a.a.bool.isRequired,price:a.a.bool.isRequired,title:a.a.bool.isRequired}).isRequired,onChange:a.a.func.isRequired},t.a=l},42:function(e,t,o){"use strict";var n=o(0),c=o(6),r=o.n(c),i=o(59),u=o.n(i);o.d(t,"a",function(){return a});var a=function(e){return function(t){var o=t.attributes,c=o.align,i=o.contentVisibility,a=r()(c?"align".concat(c):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:a},function(e,t){var o=e.attributes,n=o.attributes,c=o.attrOperator,r=o.categories,i=o.catOperator,a=o.orderby,s=o.products,l=o.columns||wc_product_block_data.default_columns,d=o.rows||wc_product_block_data.default_rows,b=new Map;switch(b.set("limit",d*l),b.set("columns",l),r&&r.length&&(b.set("category",r.join(",")),i&&"all"===i&&b.set("cat_operator","AND")),n&&n.length&&(b.set("terms",n.map(function(e){return e.id}).join(",")),b.set("attribute",n[0].attr_slug),c&&"all"===c&&b.set("terms_operator","AND")),a&&("price_desc"===a?(b.set("orderby","price"),b.set("order","DESC")):"price_asc"===a?(b.set("orderby","price"),b.set("order","ASC")):"date"===a?(b.set("orderby","date"),b.set("order","DESC")):b.set("orderby",a)),t){case"woocommerce/product-best-sellers":b.set("best_selling","1");break;case"woocommerce/product-top-rated":b.set("orderby","rating");break;case"woocommerce/product-on-sale":b.set("on_sale","1");break;case"woocommerce/product-new":b.set("orderby","date"),b.set("order","DESC");break;case"woocommerce/handpicked-products":if(!s.length)return"";b.set("ids",s.join(",")),b.set("limit",s.length);break;case"woocommerce/product-category":if(!r||!r.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var p="[products",g=!0,h=!1,f=void 0;try{for(var m,w=b[Symbol.iterator]();!(g=(m=w.next()).done);g=!0){var _=u()(m.value,2);p+=" "+_[0]+'="'+_[1]+'"'}}catch(e){h=!0,f=e}finally{try{g||null==w.return||w.return()}finally{if(h)throw f}}return p+="]"}(t,e))}}},50:function(e,t){!function(){e.exports=this.ReactDOM}()},51:function(e,t){!function(){e.exports=this.wp.viewport}()},543:function(e,t,o){"use strict";o.r(t);var n=o(0),c=o(1),r=o(27),i=(o(310),o(22)),u=o.n(i),a=o(23),s=o.n(a),l=o(24),d=o.n(l),b=o(25),p=o.n(b),g=o(26),h=o.n(g),f=o(18),m=o(3),w=o(5),_=o.n(w),v=o(41),O=o(61),j=o(33),k=o.n(j),y=o(4),E=o(37),C=o(78),x=function(e){function t(){var e;return u()(this,t),(e=d()(this,p()(t).apply(this,arguments))).state={list:[],loading:!0},e.debouncedOnSearch=Object(y.debounce)(e.onSearch.bind(k()(e)),400),e}return h()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.selected;Object(C.a)({selected:t}).then(function(t){e.setState({list:t,loading:!1})}).catch(function(){e.setState({list:[],loading:!1})})}},{key:"onSearch",value:function(e){var t=this,o=this.props.selected;Object(C.a)({selected:o,search:e}).then(function(e){t.setState({list:e,loading:!1})}).catch(function(){t.setState({list:[],loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.list,o=e.loading,r=this.props,i=r.onChange,u=r.selected,a={clear:Object(c.__)("Clear all products","woo-gutenberg-products-block"),list:Object(c.__)("Products","woo-gutenberg-products-block"),noItems:Object(c.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(c.__)("Search for products to display","woo-gutenberg-products-block"),selected:function(e){return Object(c.sprintf)(Object(c._n)("%d product selected","%d products selected",e,"woo-gutenberg-products-block"),e)},updated:Object(c.__)("Product search results updated.","woo-gutenberg-products-block")};return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(E.a,{className:"woocommerce-products",list:t,isLoading:o,selected:u.map(function(e){return Object(y.find)(t,{id:e})}).filter(Boolean),onSearch:C.b?this.debouncedOnSearch:null,onChange:i,messages:a}))}}]),t}(n.Component);x.propTypes={onChange:_.a.func.isRequired,selected:_.a.array.isRequired};var M=x,P=o(69),S=function(e){function t(){return u()(this,t),d()(this,p()(t).apply(this,arguments))}return h()(t,e),s()(t,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,o=e.setAttributes,r=t.columns,i=t.contentVisibility,u=t.orderby;return Object(n.createElement)(f.InspectorControls,{key:"inspector"},Object(n.createElement)(m.PanelBody,{title:Object(c.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(m.RangeControl,{label:Object(c.__)("Columns","woo-gutenberg-products-block"),value:r,onChange:function(e){return o({columns:e})},min:wc_product_block_data.min_columns,max:wc_product_block_data.max_columns})),Object(n.createElement)(m.PanelBody,{title:Object(c.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(v.a,{settings:i,onChange:function(e){return o({contentVisibility:e})}})),Object(n.createElement)(m.PanelBody,{title:Object(c.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(P.a,{setAttributes:o,value:u})),Object(n.createElement)(m.PanelBody,{title:Object(c.__)("Products","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(M,{selected:t.products,onChange:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.id});o({products:e})}})))}},{key:"renderEditMode",value:function(){var e=this.props,t=e.attributes,o=e.debouncedSpeak,r=e.setAttributes;return Object(n.createElement)(m.Placeholder,{icon:Object(n.createElement)(O.c,null),label:Object(c.__)("Hand-picked Products","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-handpicked-products"},Object(c.__)("Display a selection of hand-picked products in a grid","woo-gutenberg-products-block"),Object(n.createElement)("div",{className:"wc-block-handpicked-products__selection"},Object(n.createElement)(M,{selected:t.products,onChange:function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){return e.id});r({products:e})}}),Object(n.createElement)(m.Button,{isDefault:!0,onClick:function(){r({editMode:!1}),o(Object(c.__)("Showing Hand-picked Products block preview.","woo-gutenberg-products-block"))}},Object(c.__)("Done","woo-gutenberg-products-block"))))}},{key:"render",value:function(){var e=this.props,t=e.attributes,o=e.name,r=e.setAttributes,i=t.editMode;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(f.BlockControls,null,Object(n.createElement)(m.Toolbar,{controls:[{icon:"edit",title:Object(c.__)("Edit"),onClick:function(){return r({editMode:!i})},isActive:i}]})),this.getInspectorControls(),i?this.renderEditMode():Object(n.createElement)(m.Disabled,null,Object(n.createElement)(f.ServerSideRender,{block:o,attributes:t})))}}]),t}(n.Component);S.propTypes={attributes:_.a.object.isRequired,name:_.a.string.isRequired,setAttributes:_.a.func.isRequired,debouncedSpeak:_.a.func.isRequired};var z=Object(m.withSpokenMessages)(S),R=o(42);Object(r.registerBlockType)("woocommerce/handpicked-products",{title:Object(c.__)("Hand-picked Products","woo-gutenberg-products-block"),icon:{src:Object(n.createElement)(O.c,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(c.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(c.__)("Display a selection of hand-picked products in a grid.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:{align:{type:"string"},columns:{type:"number",default:wc_product_block_data.default_columns},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]}},deprecated:[{attributes:{align:{type:"string"},columns:{type:"number",default:wc_product_block_data.default_columns},editMode:{type:"boolean",default:!0},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},orderby:{type:"string",default:"date"},products:{type:"array",default:[]}},save:Object(R.a)("woocommerce/handpicked-products")}],edit:function(e){return Object(n.createElement)(z,e)},save:function(){return null}})},61:function(e,t,o){"use strict";var n=o(0),c=o(3),r=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fillRule:"nonzero",d:"M21.913 7.0946H2.0254c-1.1708 0-2.0984.9908-2.0205 2.16l.741 11.0724c.0714 1.0638.9552 1.8892 2.0206 1.8892h18.4054c1.0654 0 1.9492-.8254 2.0205-1.8892l.7411-11.0724c.0779-1.1692-.8497-2.16-2.0205-2.16zm-8.8006-4.6573h5.987c1.119 0 2.0255.9065 2.0255 2.0254v.934H2.8103V2.0255C2.8103.9064 3.7168 0 4.8357 0h6.2513c1.119 0 2.0254.9065 2.0254 2.0254v.4119zm-7.0589 11.619a.926.926 0 1 1 0-1.852h11.8297a.926.926 0 1 1 0 1.852H6.0535z"}))})},i=function(){return Object(n.createElement)(c.Icon,{className:"material-icon",icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(n.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}))})},u=function(){return Object(n.createElement)(c.Icon,{className:"material-icon",icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})},a=o(6),s=o.n(a),l=o(5),d=o.n(l),b=function(e){var t=e.size,o=void 0===t?20:t,r=e.className;return Object(n.createElement)(c.Icon,{className:s()("woo-icon",r),icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:o,width:Math.floor(1.67*o),viewBox:"0 0 245 145"},Object(n.createElement)("path",{fill:"#96588A",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(n.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))})};b.propTypes={size:d.a.number,className:d.a.string};var p=b;o.d(t,"a",function(){return r}),o.d(t,"b",function(){return i}),o.d(t,"c",function(){return u}),o.d(t,"d",function(){return p})},65:function(e,t){!function(){e.exports=this.wp.hooks}()},67:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},68:function(e,t){!function(){e.exports=this.wp.date}()},69:function(e,t,o){"use strict";var n=o(0),c=o(1),r=o(3),i=o(5),u=o.n(i),a=function(e){var t=e.value,o=e.setAttributes;return Object(n.createElement)(r.SelectControl,{label:Object(c.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(c.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(c.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(c.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(c.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(c.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(c.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(c.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return o({orderby:e})}})};a.propTypes={setAttributes:u.a.func.isRequired,value:u.a.string.isRequired},t.a=a},76:function(e,t){!function(){e.exports=this.wp.dom}()},78:function(e,t,o){"use strict";o.d(t,"b",function(){return u}),o.d(t,"a",function(){return a});var n=o(35),c=o(17),r=o.n(c),i=o(4),u=wc_product_block_data.isLargeCatalog||!1,a=function(e){var t=e.selected,o=function(e){var t=e.selected,o=void 0===t?[]:t,c=e.search,r=[Object(n.addQueryArgs)("/wc-blocks/v1/products",{per_page:u?100:-1,catalog_visibility:"visible",status:"publish",search:c})];return u&&o.length&&r.push(Object(n.addQueryArgs)("/wc-blocks/v1/products",{catalog_visibility:"visible",status:"publish",include:o})),r}({selected:void 0===t?[]:t,search:e.search});return Promise.all(o.map(function(e){return r()({path:e})})).then(function(e){return Object(i.uniqBy)(Object(i.flatten)(e),"id")})}},8:function(e,t){!function(){e.exports=this.moment}()},80:function(e,t){},81:function(e,t){},83:function(e,t){},84:function(e,t){},9:function(e,t){!function(){e.exports=this.React}()}});