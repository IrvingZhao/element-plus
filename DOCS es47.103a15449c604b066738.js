(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[113],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/es/quickstart.md?vue&type=template&id=369dea72

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h2 id=\"inicio-rapido\"><a class=\"header-anchor\" href=\"#inicio-rapido\">¶</a> Inicio rápido</h2><p>Esta sección te guía en el proceso de usar Element Plus con webpack en un proyecto.</p><h3 id=\"use-vue-cli-4.5\"><a class=\"header-anchor\" href=\"#use-vue-cli-4.5\">¶</a> Use vue-cli@4.5</h3><p>Proporcionamos un <a href=\"https://github.com/element-plus/vue-cli-plugin-element-plus\">plugin de Element</a> para vue-cli@4.5, que puede utilizar para construir rápidamente un proyecto basado en Element.</p><h3 id=\"usa-la-plantilla-de-kit-de-inicio\"><a class=\"header-anchor\" href=\"#usa-la-plantilla-de-kit-de-inicio\">¶</a> Usa la plantilla de Kit de inicio</h3><p>Proveemos una plantilla general <a href=\"https://github.com/element-plus/element-plus-starter\">project template</a>, and also a Vite <a href=\"https://github.com/element-plus/element-plus-vite-starter\">template</a>. Para los usuarios de Laravel, también tenemos <a href=\"https://github.com/element-plus/element-plus-in-laravel-starter\">template</a>. Puedes descargarlas y agregarlas directamente también.</p><p>Si prefiere no utilizarlas, lee las siguientes secciones de este documento.</p><h3 id=\"importando-element-plus\"><a class=\"header-anchor\" href=\"#importando-element-plus\">¶</a> Importando Element Plus</h3><p>Puede importar Element Plus completamente o solamente importar lo que necesite. Comencemos importando todo.</p><h4 id=\"importando-todo\"><a class=\"header-anchor\" href=\"#importando-todo\">¶</a> Importando todo</h4><p>En main.js:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> <span class=\"hljs-string\">&#39;element-plus/lib/theme-chalk/index.css&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus)\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>El código anterior importa Element Plus completamente. Nótese que el archivo CSS necesita ser incluido por separado.</p><h4 id=\"en-demanda\"><a class=\"header-anchor\" href=\"#en-demanda\">¶</a> En demanda</h4><p><strong>Vue CLI</strong></p><p>Con la ayuda de <a href=\"https://github.com/ant-design/babel-plugin-import\">babel-plugin-import</a>, podemos importar los componentes que necesitamos, haciendo nuestro proyecto más pequeño que de la otra manera.</p><p>Primero, instale babel-plugin-import:</p><pre><code class=\"hljs language-bash\">npm install babel-plugin-import -D\n</code></pre><p>Luego edite babel.config.js:</p><ul><li>import <code>.scss</code> style</li></ul><div class=\"warning\"><p>Please make sure that <code>sass</code> and <code>sass-loader</code> dependencies have been installed and import <code>element-plus/packages/theme-chalk/src/base.scss</code> in the entry file.</p></div><pre><code class=\"hljs language-js\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    [\n      <span class=\"hljs-string\">&quot;import&quot;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/packages/theme-chalk/src/<span class=\"hljs-subst\">${name}</span>.scss`</span>;\n        },\n      },\n    ],\n  ],\n};\n</code></pre><ul><li>import <code>.css</code> style</li></ul><pre><code class=\"hljs language-js\"><span class=\"hljs-built_in\">module</span>.exports = {\n  <span class=\"hljs-attr\">plugins</span>: [\n    [\n      <span class=\"hljs-string\">&quot;import&quot;</span>,\n      {\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-attr\">customStyleName</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/theme-chalk/<span class=\"hljs-subst\">${name}</span>.css`</span>;\n        },\n      },\n    ],\n  ],\n};\n</code></pre><p><strong>Vite</strong></p><p>Firstly，install <a href=\"https://github.com/anncwb/vite-plugin-style-import\">vite-plugin-style-import</a>:</p><pre><code class=\"hljs language-bash\">$ npm install vite-plugin-style-import -D\n</code></pre><p>or if you use <code>Yarn</code> as package manager</p><pre><code class=\"hljs language-bash\">$ yarn add vite-plugin-style-import -D\n</code></pre><p>Then edit vite.config.js:</p><ul><li>import <code>.scss</code> style</li></ul><div class=\"warning\"><p>Please make sure that the <code>sass</code> dependency have been installed and import <code>element-plus/packages/theme-chalk/src/base.scss</code> in the entry file.</p></div><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> styleImport <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-style-import&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig({\n  <span class=\"hljs-attr\">plugins</span>: [\n    vue(),\n    styleImport({\n      <span class=\"hljs-attr\">libs</span>: [{\n        <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n        <span class=\"hljs-attr\">esModule</span>: <span class=\"hljs-literal\">true</span>,\n        <span class=\"hljs-attr\">ensureStyleFile</span>: <span class=\"hljs-literal\">true</span>,\n        <span class=\"hljs-attr\">resolveStyle</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          name = name.slice(<span class=\"hljs-number\">3</span>)\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/packages/theme-chalk/src/<span class=\"hljs-subst\">${name}</span>.scss`</span>;\n        },\n        <span class=\"hljs-attr\">resolveComponent</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n          <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/<span class=\"hljs-subst\">${name}</span>`</span>;\n        },\n      }]\n    })\n  ]\n})\n</code></pre><ul><li>import <code>.css</code> style</li></ul><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { defineConfig } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite&#39;</span>\n<span class=\"hljs-keyword\">import</span> vue <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;@vitejs/plugin-vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> styleImport <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vite-plugin-style-import&#39;</span>\n\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> defineConfig({\n  <span class=\"hljs-attr\">plugins</span>: [\n    vue(),\n    styleImport({\n      <span class=\"hljs-attr\">libs</span>: [\n        {\n          <span class=\"hljs-attr\">libraryName</span>: <span class=\"hljs-string\">&#39;element-plus&#39;</span>,\n          <span class=\"hljs-attr\">esModule</span>: <span class=\"hljs-literal\">true</span>,\n          <span class=\"hljs-attr\">ensureStyleFile</span>: <span class=\"hljs-literal\">true</span>,\n          <span class=\"hljs-attr\">resolveStyle</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/theme-chalk/<span class=\"hljs-subst\">${name}</span>.css`</span>;\n          },\n          <span class=\"hljs-attr\">resolveComponent</span>: <span class=\"hljs-function\">(<span class=\"hljs-params\">name</span>) =&gt;</span> {\n            <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`element-plus/lib/<span class=\"hljs-subst\">${name}</span>`</span>;\n          },\n        }\n      ]\n    })\n  ]\n})\n</code></pre><p>Luego, si necesita Button y Select, edite main.js:</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton, ElSelect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n<span class=\"hljs-comment\">// If you want to use the .scss style file, you need to import the base.scss file</span>\n<span class=\"hljs-comment\">// import &#39;element-plus/packages/theme-chalk/src/base.scss&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.component(ElButton.name, ElButton);\napp.component(ElSelect.name, ElSelect);\n\n<span class=\"hljs-comment\">/* or\n * app.use(ElButton)\n * app.use(ElSelect)\n */</span>\n\napp.mount(<span class=\"hljs-string\">&#39;#app&#39;</span>)\n</code></pre><p>Ejemplo completo (Referencia completa de componentes <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages\">reference</a>)</p><pre><code class=\"hljs language-javascript\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n<span class=\"hljs-comment\">// If you want to use the .scss style file, you need to import the base.scss file</span>\n<span class=\"hljs-comment\">// import &#39;element-plus/packages/theme-chalk/src/base.scss&#39;</span>\n\n<span class=\"hljs-keyword\">import</span> {\n  ElAlert,\n  ElAside,\n  ElAutocomplete,\n  ElAvatar,\n  ElBacktop,\n  ElBadge,\n  ElBreadcrumb,\n  ElBreadcrumbItem,\n  ElButton,\n  ElButtonGroup,\n  ElCalendar,\n  ElCard,\n  ElCarousel,\n  ElCarouselItem,\n  ElCascader,\n  ElCascaderPanel,\n  ElCheckbox,\n  ElCheckboxButton,\n  ElCheckboxGroup,\n  ElCol,\n  ElCollapse,\n  ElCollapseItem,\n  ElCollapseTransition,\n  ElColorPicker,\n  ElContainer,\n  ElDatePicker,\n  ElDialog,\n  ElDivider,\n  ElDrawer,\n  ElDropdown,\n  ElDropdownItem,\n  ElDropdownMenu,\n  ElFooter,\n  ElForm,\n  ElFormItem,\n  ElHeader,\n  ElIcon,\n  ElImage,\n  ElInput,\n  ElInputNumber,\n  ElLink,\n  ElMain,\n  ElMenu,\n  ElMenuItem,\n  ElMenuItemGroup,\n  ElOption,\n  ElOptionGroup,\n  ElPageHeader,\n  ElPagination,\n  ElPopconfirm,\n  ElPopover,\n  ElPopper,\n  ElProgress,\n  ElRadio,\n  ElRadioButton,\n  ElRadioGroup,\n  ElRate,\n  ElRow,\n  ElScrollbar,\n  ElSelect,\n  ElSlider,\n  ElStep,\n  ElSteps,\n  ElSubmenu,\n  ElSwitch,\n  ElTabPane,\n  ElTable,\n  ElTableColumn,\n  ElTabs,\n  ElTag,\n  ElTimePicker,\n  ElTimeSelect,\n  ElTimeline,\n  ElTimelineItem,\n  ElTooltip,\n  ElTransfer,\n  ElTree,\n  ElUpload,\n  ElInfiniteScroll,\n  ElLoading,\n  ElMessage,\n  ElMessageBox,\n  ElNotification,\n} <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> components = [\n  ElAlert,\n  ElAside,\n  ElAutocomplete,\n  ElAvatar,\n  ElBacktop,\n  ElBadge,\n  ElBreadcrumb,\n  ElBreadcrumbItem,\n  ElButton,\n  ElButtonGroup,\n  ElCalendar,\n  ElCard,\n  ElCarousel,\n  ElCarouselItem,\n  ElCascader,\n  ElCascaderPanel,\n  ElCheckbox,\n  ElCheckboxButton,\n  ElCheckboxGroup,\n  ElCol,\n  ElCollapse,\n  ElCollapseItem,\n  ElCollapseTransition,\n  ElColorPicker,\n  ElContainer,\n  ElDatePicker,\n  ElDialog,\n  ElDivider,\n  ElDrawer,\n  ElDropdown,\n  ElDropdownItem,\n  ElDropdownMenu,\n  ElFooter,\n  ElForm,\n  ElFormItem,\n  ElHeader,\n  ElIcon,\n  ElImage,\n  ElInput,\n  ElInputNumber,\n  ElLink,\n  ElMain,\n  ElMenu,\n  ElMenuItem,\n  ElMenuItemGroup,\n  ElOption,\n  ElOptionGroup,\n  ElPageHeader,\n  ElPagination,\n  ElPopconfirm,\n  ElPopover,\n  ElPopper,\n  ElProgress,\n  ElRadio,\n  ElRadioButton,\n  ElRadioGroup,\n  ElRate,\n  ElRow,\n  ElScrollbar,\n  ElSelect,\n  ElSlider,\n  ElStep,\n  ElSteps,\n  ElSubmenu,\n  ElSwitch,\n  ElTabPane,\n  ElTable,\n  ElTableColumn,\n  ElTabs,\n  ElTag,\n  ElTimePicker,\n  ElTimeSelect,\n  ElTimeline,\n  ElTimelineItem,\n  ElTooltip,\n  ElTransfer,\n  ElTree,\n  ElUpload,\n]\n\n<span class=\"hljs-keyword\">const</span> plugins = [\n  ElInfiniteScroll,\n  ElLoading,\n  ElMessage,\n  ElMessageBox,\n  ElNotification,\n]\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\n\ncomponents.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">component</span> =&gt;</span> {\n  app.component(component.name, component)\n})\n\nplugins.forEach(<span class=\"hljs-function\"><span class=\"hljs-params\">plugin</span> =&gt;</span> {\n  app.use(plugin)\n})\n</code></pre><h3 id=\"configuracion-global\"><a class=\"header-anchor\" href=\"#configuracion-global\">¶</a> Configuración global</h3><p>Cuando importa Element, puede definir un objeto global de configuración. Por ahora este elemento solo contiene dos propiedades: <code>size</code>, <code>zIndex</code>. <code>size</code> define el tamaño por defecto de todos los componentes.</p><p>La propiedad <code>zIndex</code> indica el z-index inicial (por defecto: 2000) para los modal:</p><p>Importando Element Plus completamente：</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> ElementPlus <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.use(ElementPlus, { <span class=\"hljs-attr\">size</span>: <span class=\"hljs-string\">&#39;small&#39;</span>, <span class=\"hljs-attr\">zIndex</span>: <span class=\"hljs-number\">3000</span> });\n</code></pre><p>Importando Element Plus parcialmente：</p><pre><code class=\"hljs language-js\"><span class=\"hljs-keyword\">import</span> { createApp } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;vue&#39;</span>\n<span class=\"hljs-keyword\">import</span> { ElButton } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;element-plus&#39;</span>;\n<span class=\"hljs-keyword\">import</span> App <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">&#39;./App.vue&#39;</span>;\n<span class=\"hljs-comment\">// If you want to use the .scss style file, you need to import the base.scss file</span>\n<span class=\"hljs-comment\">// import &#39;element-plus/packages/theme-chalk/src/base.scss&#39;</span>\n\n<span class=\"hljs-keyword\">const</span> app = createApp(App)\napp.config.globalProperties.$ELEMENT = option\napp.use(ElButton);\n</code></pre><p>Con la anterior configuración, el tamaño por defecto de todos los componentes que tienen el atributo <code>size</code> será <code>small</code>. El valor inicial de z-index para los modals se ha establecido a 3000.</p><h3 id=\"empiece-ya\"><a class=\"header-anchor\" href=\"#empiece-ya\">¶</a> Empiece ya!</h3><p>Ahora ha incorporado Vue y Element Plus a su proyecto y es el momento para comenzar a programar. Por favor, refiérase a la documentación de cada componente para aprender cómo usarlos.</p><h3 id=\"use-nuxt.js\"><a class=\"header-anchor\" href=\"#use-nuxt.js\">¶</a> Use Nuxt.js</h3><p>También podemos comenzar un proyecto usando <a href=\"nuxtjs.org\">Nuxt.js</a>:</p><div class=\"glitch-embed-wrap\" style=\"height:420px;width:100%;\"><iframe src=\"https://glitch.com/embed/#!/embed/nuxt-with-element?path=nuxt.config.js&amp;previewSize=0&amp;attributionHidden=true\" alt=\"nuxt-with-element on glitch\" style=\"height:100%;width:100%;border:0;\"></iframe></div>", 52);

function render(_ctx, _cache) {
  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/es/quickstart.md?vue&type=template&id=369dea72

// CONCATENATED MODULE: ./website/docs/es/quickstart.md

const script = {}
script.render = render

/* harmony default export */ var quickstart = __webpack_exports__["default"] = (script);

/***/ })

}]);