(self["webpackChunk"] = self["webpackChunk"] || []).push([["ProductMasterForm"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 //for user MapState

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProductMasterForm",
  data: function data() {
    return {
      NoIconUrl: 'FilesStorage/CommonFiles/no-img.png',
      editMode: false,
      //Use this for add edit using the same form   
      productTypes: [{
        name: 'General'
      }, {
        name: 'Virtual'
      }, {
        name: 'Service'
      }, {
        name: 'Downloadable'
      }],
      productStatus: [{
        name: 'Active'
      }, {
        name: 'Inactive'
      }],
      //Single Select app for Brand
      placeHolder_brand: 'Select brand',
      filterBy_brand: 'brand_name',
      valueProperty_brand: 'id',
      //form multiselect app for category
      placeHolder: 'Select multiple Category',
      filterBy: 'cat_name',
      valueProperty: 'id',
      //multiselect app for Supplier
      // placeHolder_supp:'Select multiple Supplier or Shop', // filterBy_supp:'name',// valueProperty_supp: 'id',
      //multiselect app for Supplier
      placeHolder_vendor: 'Select multiple Vendor (Supplier)',
      filterBy_vendor: 'vendor_name',
      valueProperty_vendor: 'id',
      //multiselect app for related product
      placeHolder_product: 'Select multiple related products',
      filterBy_product: 'sys_pro_name',
      valueProperty_product: 'id',
      //for images manipulation
      show_image_files_name: [],
      //use only to show image name in text field
      isDragging: false,
      dragCount: 0,
      // Create a new form instance
      form: new Form({
        id: '',
        user_id: '',
        sys_pro_name: '',
        pro_code: '',
        pro_type: '',
        pro_status: '',
        pro_slug: '',
        status_m_id: '',
        brand_id: '',
        pro_model: '',
        sku: '',
        upc: '',
        isbn: '',
        mpn: '',
        unit_id: '',
        pro_unit_value: '',
        pro_qty: '',
        pro_mrp: '',
        pro_price: '',
        pro_sale_price: '',
        pro_reward_points: '',
        //pro_image:'',
        is_enabled: '',
        pro_delivery_charge: '',
        pro_category: [],
        pro_attributes: [],
        pro_specification: [{
          specification_name: '',
          specification_desc: '',
          specification_serial: ''
        }],
        pro_discount: [{
          customer_group: '',
          discount_qty: '',
          discount_price: '',
          discount_priority: '',
          discount_start_date: '',
          discount_end_date: ''
        }],
        related_products: [],
        pro_translation: [],
        pro_images: [],
        //pro_suppliers:[], 
        pro_vendors: [],
        //pro_shops:[],
        //multi_image:[],
        has_many_image: [] //only for get image from database

      })
    };
  },
  //end data
  watch: {},
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('ProductMasterStore', [, 'selectedBrand', 'autoSearchBrands', 'selectedVendorList', 'autoSearchVendors', 'selectedCategoryList', 'selectedProductList', 'autoSearchProducts'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)('commonStoreForAll', ['allUnits', 'allLanguages', 'AllStatus', 'AllBrands', 'autoSearchCategories', 'AllSpecifications', 'AllAttributes', 'AllAttributeValues', 'allCustomerGroups'])),
  //end Computed
  methods: {
    //###################################### Images Function ################################################
    showFilePicker: function showFilePicker() {
      //chlick input file (hidden) showFilePicker click.
      this.$refs.image_file_link.click();
    },
    OnFileChange: function OnFileChange(e) {
      var _this = this;

      //this.form.pro_images = e.target.files[0]; //for single file 
      // this.form.pro_images = e.target.files; 
      this.show_image_files_name = e.target.files; //this is for only show image name to input box using getFilesName()

      var files = e.target.files; //const files = e.target.files;

      Array.from(files).forEach(function (file) {
        return _this.converBase64(file);
      }); //console.log(this.form.pro_images);
    },
    converBase64: function converBase64(file) {
      var _this2 = this;

      //Make image as base64         
      var reader = new FileReader();

      reader.onload = function (e) {
        return _this2.form.pro_images.push(e.target.result);
      }; //push base64 to imge


      reader.readAsDataURL(file);
    },
    OnDragEnter: function OnDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnDragLeave: function OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onDrop: function onDrop(e) {
      var _this3 = this;

      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      var files = e.dataTransfer.files;
      Array.from(files).forEach(function (file) {
        return _this3.converBase64(file);
      });
    },
    removeImage: function removeImage(index) {
      this.form.pro_images.splice(index, 1); //console.log(this.form.pro_images);
    },
    getFileSize: function getFileSize(size) {
      var fSExt = ['Bytes', 'KB', 'MB', 'GB'];
      var i = 0;

      while (size > 900) {
        size /= 1024;
        i++;
      }

      return "".concat(Math.round(size * 100) / 100, " ").concat(fSExt[i]);
    },
    getFilesName: function getFilesName() {
      //show name to showFilePicker input field
      var filesName = [];

      if (this.show_image_files_name.length > 0) {
        // if(this.form.pro_images.length > 0){
        var _iterator = _createForOfIteratorHelper(this.show_image_files_name),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var file = _step.value;
            // for(let file of this.form.pro_images){
            filesName.push(file.name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return filesName.join(", "); //this code basically join the selected files name separated by comma.
    },
    //###################################### End Images Function ################################################
    //###################################### Specification Function ################################################
    add_specificaton: function add_specificaton() {
      this.form.pro_specification.push({
        specification_name: '',
        specification_desc: ''
      }); //alert('Kkk');
    },
    remove_specification: function remove_specification(index) {
      this.form.pro_specification.splice(index, 1);
    },
    //###################################### End Specification Function ############################################
    //###################################### Discount Function ################################################
    add_discount: function add_discount() {
      this.form.pro_discount.push({
        customer_group: '',
        discount_qty: '',
        discount_price: '',
        discount_priority: '',
        discount_start_date: '',
        discount_end_date: ''
      });
    },
    remove_discount: function remove_discount(index) {
      this.form.pro_discount.splice(index, 1);
    },
    //###################################### End Discount Function ############################################
    //###################################### End Attribute Function ############################################
    add_attribute: function add_attribute(id, data, key, event) {
      //console.log(data+'='+event.target.checked);
      if (event.target.checked === true) {
        var arrayData = {
          checked: false,
          attrib_id: id,
          attribute: data,
          values: [{
            attribute_value: "",
            quantity: "",
            price: "",
            priority: "",
            subtract_stock: false
          }]
        };
        this.form.pro_attributes.push(arrayData); //this.$store.dispatch('commonStoreForAll/fetchAttributeList'); //get all Attribute
        // this.$store.dispatch('commonStoreForAll/fetchAttributeValue', id); //get all Attribute Value
      } else {
        //this.form.pro_attributes.splice(key, 1); //not working properly
        var i = this.form.pro_attributes.map(function (data) {
          return data.attrib_id;
        }).indexOf(id); // find index of your object

        this.form.pro_attributes.splice(i, 1); // remove it from array
      }
    },
    remove_attribute: function remove_attribute(key, attribute) {
      this.form.pro_attributes.splice(key, 1); // this.$refs.attribute.checked = false;
      //alert(attribute );
    },
    add_attribute_property: function add_attribute_property(key, data) {
      // add attribute velue inside attribute    
      // this.form.pro_attributes.push( { attribute_value:"", quantity:"", price:"", priority:"" } );
      var result = this.form.pro_attributes.find(function (_ref) {
        var attribute = _ref.attribute;
        return attribute === data;
      });
      result.values.push({
        attribute_value: "",
        quantity: "",
        price: "",
        priority: "",
        subtract_stock: false
      }); //console.log(result);
      //console.log(this.form.pro_attributes);
    },
    remove_attribute_property: function remove_attribute_property(key, attribute) {
      // remove attribute velue from inside attribute 
      var result = this.form.pro_attributes.find(function (_ref2) {
        var attribute = _ref2.attribute;
        return attribute === attribute;
      });
      result.values.splice(key, 1);
    },
    //###################################### End Attribute Function ############################################
    pushToLanguageTranslationArray: function pushToLanguageTranslationArray() {
      // for(let i in this.allLanguages){
      //   this.form.pro_translation.push({ language_id:this.allLanguages[i].id, lang_code:this.allLanguages[i].lang_code, product_name: '', product_desc: '' }); 
      // }          
      for (var i = 0; i < this.allLanguages.length; i++) {
        this.form.pro_translation.push({
          language_id: this.allLanguages[i].id,
          lang_code: this.allLanguages[i].lang_code,
          product_name: '',
          product_desc: ''
        });
      }
    },
    // Submit the form via a POST request
    storeFormData: function storeFormData() {
      var _this4 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package
      //this.form.post('/spa/Product-Info')

      this.form.post('/spa/Product-Info').then(function (_ref3) {
        var data = _ref3.data;

        //console.log(data);
        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update
          toastr.success(data.success);

          _this4.$Progress.finish();

          _this4.form.reset(); //reset from after submit	
          // this.$refs.avatar.value = ''; //clear file input tag 
          //this.ShowOnChangeImage = null;


          _this4.$router.push({
            path: '/spa/ProductMaster'
          }); //route after successfule submit	      

        }

        if (data.errors) {
          _this4.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this4.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    updateFormData: function updateFormData() {
      var _this5 = this;

      //console.log(this.form); 
      this.$Progress.start(); //using progress-bar package

      this.form.put('/spa/Product-Info/' + this.form.id).then(function (_ref4) {
        var data = _ref4.data;

        if (data.success) {
          //FireEvent.$emit('AfterChange'); //$emit is create an event. this will reload data after create or update         
          _this5.$Progress.finish();

          toastr.success(data.success);

          _this5.form.reset(); //reset from after submit


          _this5.editMode = false; // this.$refs.avatar.value = ''; //clear file input tag 
          // this.ShowOnChangeImage = null;

          _this5.$router.push({
            path: '/spa/ProductMaster'
          }); //route after successfule submit
          //this.fillForm();

        }

        if (data.errors) {
          _this5.$Progress.fail();

          toastr.warning(data.errors);
        }
      })["catch"](function () {
        _this5.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    deleteImage: function deleteImage(imageId, index) {
      var _this6 = this;

      //delete Single Image
      this.$Progress.start(); //using progress-bar package        
      //console.log(this.form.has_many_image);

      axios.post('/spa/Product-DeleteImage/' + imageId).then(function (_ref5) {
        var data = _ref5.data;

        _this6.form.has_many_image.splice(index, 1);

        _this6.$Progress.finish();

        toastr.success(data.success);
      })["catch"](function () {
        _this6.$Progress.fail();

        toastr.warning('Something is wrong!');
      });
    },
    fillForm: function fillForm() {
      if (this.$route.params.data != null) {
        this.editMode = true;
        this.form.reset();
        this.form.fill(this.$route.params.data); //this.form.departments = this.$route.params.data.departments; //pass the array
        //this.$refs.emp_name.focus();

        if (this.$route.params.data.pro_specification === null) {
          this.form.pro_specification = [{
            specification_name: '',
            specification_desc: '',
            specification_serial: ''
          }];
        }

        if (this.$route.params.data.pro_discount === null) {
          this.form.pro_discount = [{
            customer_group: '',
            discount_qty: '',
            discount_price: '',
            discount_priority: '',
            discount_start_date: '',
            discount_end_date: ''
          }];
        }

        if (this.$route.params.data.pro_category === null) {
          this.form.pro_category = [];
        }

        if (this.$route.params.data.pro_suppliers === null) {
          this.form.pro_suppliers = [];
        }

        if (this.$route.params.data.pro_suppliers === null) {
          this.form.pro_suppliers = [];
        }

        if (this.$route.params.data.pro_vendors === null) {
          this.form.pro_vendors = [];
        }

        if (this.$route.params.data.related_products === null) {
          this.form.related_products = [];
        }

        if (this.$route.params.data.has_many_image) {
          this.form.pro_images = [];
        }
      } //for single Select


      this.$store.dispatch('ProductMasterStore/fetchSelectedBrand', this.form.brand_id); //for multiselect

      this.$store.dispatch('ProductMasterStore/fetchSelectedCategoryList', this.form.pro_category); //this.$store.dispatch('ProductMasterStore/fetchSelectedSupplierList', this.form.pro_suppliers);

      this.$store.dispatch('ProductMasterStore/fetchSelectedVendorList', this.form.pro_vendors);
      this.$store.dispatch('ProductMasterStore/fetchSelectedProductList', this.form.related_products);
    },
    AutoCompleteSearchForDataBrand: function AutoCompleteSearchForDataBrand(data) {
      this.$store.dispatch('ProductMasterStore/AutoCompleteSearchForDataBrand', data);
    },
    getSelectedDataByIdsForBrand: function getSelectedDataByIdsForBrand(data) {
      this.$store.dispatch('ProductMasterStore/fetchSelectedBrand', this.form.brand_id);
    },
    //all method comming from multiselect apps
    AutoCompleteSearchForDataCategory: function AutoCompleteSearchForDataCategory(data) {
      this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForCategory', data);
    },
    getSelectedListByIdsForCategory: function getSelectedListByIdsForCategory() {
      this.$store.dispatch('ProductMasterStore/fetchSelectedCategoryList', this.form.pro_category);
    },
    // AutoCompleteSearchForDataSuppliyer(data){
    //   this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForSuppliers', data ); 
    // },
    // getSelectedListByIdsForSupplier(){
    //   this.$store.dispatch('ProductMasterStore/fetchSelectedSupplierList', this.form.pro_suppliers);
    // },
    AutoCompleteSearchForDataVendor: function AutoCompleteSearchForDataVendor(data) {
      this.$store.dispatch('ProductMasterStore/AutoCompleteSearchForVendors', data);
    },
    getSelectedListByIdsForVendor: function getSelectedListByIdsForVendor() {
      this.$store.dispatch('ProductMasterStore/fetchSelectedVendorList', this.form.pro_vendors);
    },
    AutoCompleteSearchForDataProduct: function AutoCompleteSearchForDataProduct(data) {
      this.$store.dispatch('ProductMasterStore/AutoCompleteSearchForProduct', data);
    },
    getSelectedListByIdsForProduct: function getSelectedListByIdsForProduct() {
      this.$store.dispatch('ProductMasterStore/fetchSelectedProductList', this.form.related_products);
    },
    loadProTranslation: function loadProTranslation() {
      var _this7 = this;

      if (this.editMode === false) {
        if (this.form.pro_translation.length === 0) {
          setTimeout(function () {
            _this7.pushToLanguageTranslationArray();
          }, 2300);
        }
      }
    }
  },
  //end Methods
  created: function created() {
    var _this8 = this;

    this.fillForm(); //this.loadProTranslation();

    this.$store.dispatch('commonStoreForAll/fetchLanguages'); //get all language

    this.$store.dispatch('commonStoreForAll/fetchUnits'); //get units

    this.$store.dispatch('commonStoreForAll/AllStatus', 'Product'); //get status with "Product" keyword      

    this.$store.dispatch('commonStoreForAll/fetchBrands'); //get all brands
    //this.$store.dispatch('commonStoreForAll/fetchCategory'); //get all category

    this.$store.dispatch('commonStoreForAll/fetchSpecifications'); //get all Specification

    this.$store.dispatch('commonStoreForAll/fetchAttributeList'); //get all Attribute

    this.$store.dispatch('commonStoreForAll/fetchAttributeValue'); //get all Attribute Value

    this.$store.dispatch('commonStoreForAll/fetchCustomerGroups'); //get all customer Group
    //call pushToLanguageTranslationArray after fetchLanguages

    if (this.editMode === false) {
      if (this.form.pro_translation.length === 0) {
        setTimeout(function () {
          _this8.pushToLanguageTranslationArray();
        }, 2300);
      }
    } //call from multi-select-app-one.vue
    // FireEvent.$on('AutoCompleteSearchForDataOne', (data) => {
    //       //this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForCategory', data ); 
    //  });
    // FireEvent.$on('AutoCompleteSearchForDataTwo', (data) => {
    //     this.$store.dispatch('commonStoreForAll/AutoCompleteSearchForSuppliers', data ); 
    // });
    //this.pushToLanguageTranslationArray();
    //console.log(this.form);

  },
  //end Created
  mounted: function mounted() {//console.log(this.form.pro_translation);        
    //console.log(this.form.pro_translation);
  }
}); //end export Default

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductMasterForm.vue?vue&type=template&id=802f46aa& */ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&");
/* harmony import */ var _ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductMasterForm.vue?vue&type=script&lang=js& */ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductMasterForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductMasterForm_vue_vue_type_template_id_802f46aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductMasterForm.vue?vue&type=template&id=802f46aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Admin/Catalog/Products/ProductMasterForm.vue?vue&type=template&id=802f46aa& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card vue-card-item" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-5 col-sm-9" }, [
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.editMode,
                  expression: "!editMode"
                }
              ]
            },
            [_vm._v("New Product")]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.editMode,
                  expression: "editMode"
                }
              ]
            },
            [_vm._v(" Update - " + _vm._s(_vm.form.sys_pro_name))]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-7 col-sm-3 text-right" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-primary btn-flat btn-sm",
                attrs: { to: "/spa/ProductMaster" }
              },
              [
                _c("i", { staticClass: "fas fa-list" }),
                _vm._v(" All Products\r\n        \t")
              ]
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.editMode ? _vm.updateFormData() : _vm.storeFormData()
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12" }, [
              _c(
                "div",
                {
                  staticClass:
                    "card card-primary card-outline card-outline-tabs"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "card-body" }, [
                    _c(
                      "div",
                      {
                        staticClass: "tab-content",
                        attrs: { id: "custom-tabs-Content" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade active show",
                            attrs: {
                              id: "tabs-body-one",
                              role: "tabpanel",
                              "aria-labelledby": "tab-one"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-8" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [
                                      _vm._v("Product name for system *")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.sys_pro_name,
                                          expression: "form.sys_pro_name"
                                        }
                                      ],
                                      ref: "sys_pro_name",
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "sys_pro_name"
                                        )
                                      },
                                      attrs: {
                                        type: "text",
                                        name: "sys_pro_name",
                                        placeholder: "product name for system"
                                      },
                                      domProps: {
                                        value: _vm.form.sys_pro_name
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "sys_pro_name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "sys_pro_name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [_vm._v("Product type *")]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.pro_type,
                                            expression: "form.pro_type"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-sm-",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "pro_type"
                                          )
                                        },
                                        attrs: {
                                          id: "pro_type",
                                          name: "pro_type"
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "pro_type",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" }
                                          },
                                          [_vm._v("Select type ..")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.productTypes, function(pt) {
                                          return _c(
                                            "option",
                                            { domProps: { value: pt.name } },
                                            [
                                              _vm._v(
                                                "\r\n                      " +
                                                  _vm._s(pt.name) +
                                                  "\r\n                    "
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_type"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c("label", [_vm._v("Status *")]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.pro_status,
                                            expression: "form.pro_status"
                                          }
                                        ],
                                        staticClass:
                                          "form-control form-control-sm-",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "pro_status"
                                          )
                                        },
                                        attrs: {
                                          id: "pro_status",
                                          name: "pro_status"
                                        },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "pro_status",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { disabled: "", value: "" }
                                          },
                                          [_vm._v("Select Status ..")]
                                        ),
                                        _vm._v(" "),
                                        _vm._l(_vm.productStatus, function(ps) {
                                          return _c(
                                            "option",
                                            { domProps: { value: ps.name } },
                                            [
                                              _vm._v(
                                                "\r\n                      " +
                                                  _vm._s(ps.name) +
                                                  "\r\n                    "
                                              )
                                            ]
                                          )
                                        })
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "pro_status"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12 col-sm-12" },
                                [
                                  _c(
                                    "table",
                                    { staticClass: "table" },
                                    _vm._l(_vm.form.pro_translation, function(
                                      pt,
                                      index
                                    ) {
                                      return _c("tr", { key: index }, [
                                        _c("td", [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "alert- alert-warning- text-center mb-0",
                                              staticStyle: {
                                                background:
                                                  "rgba(0, 0, 0, 0.06)"
                                              }
                                            },
                                            [_vm._v(_vm._s(pt.lang_code))]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: pt.language_id,
                                                expression: "pt.language_id"
                                              }
                                            ],
                                            attrs: {
                                              type: "hidden",
                                              name: "language_id[]"
                                            },
                                            domProps: { value: pt.language_id },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  pt,
                                                  "language_id",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: pt.lang_code,
                                                expression: "pt.lang_code"
                                              }
                                            ],
                                            attrs: {
                                              type: "hidden",
                                              name: "lang_code[]"
                                            },
                                            domProps: { value: pt.lang_code },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  pt,
                                                  "lang_code",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cat_img" } },
                                                [
                                                  _vm._v(
                                                    "Product " +
                                                      _vm._s(pt.lang_code)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: pt.product_name,
                                                    expression:
                                                      "pt.product_name"
                                                  }
                                                ],
                                                staticClass: "form-control",
                                                class: {
                                                  "is-invalid": _vm.form.errors.has(
                                                    "product_name"
                                                  )
                                                },
                                                attrs: {
                                                  type: "text",
                                                  name: "product_name[]"
                                                },
                                                domProps: {
                                                  value: pt.product_name
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      pt,
                                                      "product_name",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("has-error", {
                                                attrs: {
                                                  form: _vm.form,
                                                  field: "product_name"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c(
                                                "label",
                                                { attrs: { for: "cat_img" } },
                                                [
                                                  _vm._v(
                                                    "Detials " +
                                                      _vm._s(pt.lang_code)
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c("vue-editor", {
                                                attrs: {
                                                  name: "product_desc[]",
                                                  placeholder: "Product Details"
                                                },
                                                model: {
                                                  value: pt.product_desc,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      pt,
                                                      "product_desc",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "pt.product_desc"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ])
                                      ])
                                    }),
                                    0
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-two",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-two"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Product code ")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_code,
                                        expression: "form.pro_code"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_code",
                                      placeholder: "Internal product code"
                                    },
                                    domProps: { value: _vm.form.pro_code },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_code",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Model ")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_model,
                                        expression: "form.pro_model"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_model",
                                      placeholder: "Product Model"
                                    },
                                    domProps: { value: _vm.form.pro_model },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_model",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("SKU")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.sku,
                                        expression: "form.sku"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "sku",
                                      placeholder: "Stock Keeping Unit"
                                    },
                                    domProps: { value: _vm.form.sku },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "sku",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("UPS")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.ups,
                                        expression: "form.ups"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "ups",
                                      placeholder: "Universal Product Code"
                                    },
                                    domProps: { value: _vm.form.ups },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "ups",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("ISBN")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.isbn,
                                        expression: "form.isbn"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "isbn",
                                      placeholder: "International Book Number"
                                    },
                                    domProps: { value: _vm.form.isbn },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "isbn",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("MPN")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.mpn,
                                        expression: "form.mpn"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "mpn",
                                      placeholder: "Manufacture Part Number"
                                    },
                                    domProps: { value: _vm.form.mpn },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "mpn",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Select Unit")]),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.unit_id,
                                          expression: "form.unit_id"
                                        }
                                      ],
                                      staticClass:
                                        "form-control form-control-sm-",
                                      attrs: { id: "unit_id", name: "unit_id" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.form,
                                            "unit_id",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "option",
                                        { attrs: { disabled: "", value: "" } },
                                        [_vm._v("Default (pc) ..")]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(_vm.allUnits, function(unit) {
                                        return _c(
                                          "option",
                                          {
                                            key: unit.id,
                                            domProps: { value: unit.id }
                                          },
                                          [
                                            _vm._v(
                                              "\r\n                        " +
                                                _vm._s(unit.unit_title) +
                                                " (" +
                                                _vm._s(unit.unit_code) +
                                                ")\r\n                    "
                                            )
                                          ]
                                        )
                                      })
                                    ],
                                    2
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Unit Value")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_unit_value,
                                        expression: "form.pro_unit_value"
                                      }
                                    ],
                                    ref: "pro_unit_value",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_unit_value",
                                      placeholder: "Product unit value"
                                    },
                                    domProps: {
                                      value: _vm.form.pro_unit_value
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_unit_value",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Quantity")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_qty,
                                        expression: "form.pro_qty"
                                      }
                                    ],
                                    ref: "pro_qty",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "pro_qty",
                                      placeholder: "Product quantity"
                                    },
                                    domProps: { value: _vm.form.pro_qty },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_qty",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Price")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_price,
                                        expression: "form.pro_price"
                                      }
                                    ],
                                    ref: "pro_price",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "pro_price",
                                      placeholder: "Product price"
                                    },
                                    domProps: { value: _vm.form.pro_price },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_price",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Sale Price")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_sale_price,
                                        expression: "form.pro_sale_price"
                                      }
                                    ],
                                    ref: "pro_sale_price",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "pro_sale_price",
                                      placeholder: "Product Sale price"
                                    },
                                    domProps: {
                                      value: _vm.form.pro_sale_price
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_sale_price",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("MRP")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_mrp,
                                        expression: "form.pro_mrp"
                                      }
                                    ],
                                    ref: "pro_mrp",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "pro_mrp",
                                      placeholder: "Product MRP"
                                    },
                                    domProps: { value: _vm.form.pro_mrp },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_mrp",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [_vm._v("Reward Points")]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_reward_points,
                                        expression: "form.pro_reward_points"
                                      }
                                    ],
                                    ref: "pro_reward_points",
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "number",
                                      name: "pro_reward_points",
                                      placeholder: "Product reward points"
                                    },
                                    domProps: {
                                      value: _vm.form.pro_reward_points
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_reward_points",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-2" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-left": "0px !important"
                                        }
                                      },
                                      [_vm._v("Brand")]
                                    ),
                                    _vm._v(" "),
                                    _c("single-select-app-one", {
                                      staticStyle: {
                                        "margin-top": "5px !important"
                                      },
                                      attrs: {
                                        options: _vm.selectedBrand,
                                        autoSearchOptions: _vm.autoSearchBrands,
                                        filterBy: _vm.filterBy_brand,
                                        "place-holder": _vm.placeHolder_brand,
                                        "value-property":
                                          _vm.valueProperty_brand
                                      },
                                      on: {
                                        getAllDataListByIds:
                                          _vm.getSelectedDataByIdsForBrand,
                                        AutoCompleteSearchForData:
                                          _vm.AutoCompleteSearchForDataBrand
                                      },
                                      model: {
                                        value: _vm.form.brand_id,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "brand_id", $$v)
                                        },
                                        expression: "form.brand_id"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-3" })
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-left": "0px !important"
                                        }
                                      },
                                      [_vm._v("Category")]
                                    ),
                                    _vm._v(" "),
                                    _c("multi-select-app-one", {
                                      attrs: {
                                        options: _vm.selectedCategoryList,
                                        autoSearchOptions:
                                          _vm.autoSearchCategories,
                                        filterBy: _vm.filterBy,
                                        "place-holder": _vm.placeHolder,
                                        "value-property": _vm.valueProperty
                                      },
                                      on: {
                                        getAllDataListByIds:
                                          _vm.getSelectedListByIdsForCategory,
                                        AutoCompleteSearchForData:
                                          _vm.AutoCompleteSearchForDataCategory
                                      },
                                      model: {
                                        value: _vm.form.pro_category,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "pro_category",
                                            $$v
                                          )
                                        },
                                        expression: "form.pro_category"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-left": "0px !important"
                                        }
                                      },
                                      [_vm._v("Vendors / Suppliers")]
                                    ),
                                    _vm._v(" "),
                                    _c("multi-select-app-one", {
                                      attrs: {
                                        options: _vm.selectedVendorList,
                                        autoSearchOptions:
                                          _vm.autoSearchVendors,
                                        filterBy: _vm.filterBy_vendor,
                                        "place-holder": _vm.placeHolder_vendor,
                                        "value-property":
                                          _vm.valueProperty_vendor
                                      },
                                      on: {
                                        getAllDataListByIds:
                                          _vm.getSelectedListByIdsForVendor,
                                        AutoCompleteSearchForData:
                                          _vm.AutoCompleteSearchForDataVendor
                                      },
                                      model: {
                                        value: _vm.form.pro_vendors,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "pro_vendors", $$v)
                                        },
                                        expression: "form.pro_vendors"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticStyle: {
                                          "margin-left": "0px !important"
                                        }
                                      },
                                      [_vm._v("Related Products")]
                                    ),
                                    _vm._v(" "),
                                    _c("multi-select-app-one", {
                                      attrs: {
                                        options: _vm.selectedProductList,
                                        autoSearchOptions:
                                          _vm.autoSearchProducts,
                                        filterBy: _vm.filterBy_product,
                                        "place-holder": _vm.placeHolder_product,
                                        "value-property":
                                          _vm.valueProperty_product
                                      },
                                      on: {
                                        getAllDataListByIds:
                                          _vm.getSelectedListByIdsForProduct,
                                        AutoCompleteSearchForData:
                                          _vm.AutoCompleteSearchForDataProduct
                                      },
                                      model: {
                                        value: _vm.form.related_products,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.form,
                                            "related_products",
                                            $$v
                                          )
                                        },
                                        expression: "form.related_products"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-three",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-three"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "col-md-12",
                                  staticStyle: {
                                    border: "1px solid rgba(0, 0, 0, 0.06)",
                                    background: "rgba(0, 0, 0, 0.06)"
                                  }
                                },
                                _vm._l(_vm.AllAttributes, function(
                                  attrib,
                                  key
                                ) {
                                  return _c("span", [
                                    _vm._v(
                                      "\r\n                " +
                                        _vm._s(attrib.attribute_name) +
                                        " \r\n                "
                                    ),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: attrib.checked,
                                          expression: "attrib.checked"
                                        }
                                      ],
                                      ref: attrib.attribute_name,
                                      refInFor: true,
                                      attrs: { type: "checkbox" },
                                      domProps: {
                                        checked: Array.isArray(attrib.checked)
                                          ? _vm._i(attrib.checked, null) > -1
                                          : attrib.checked
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.add_attribute(
                                            attrib.id,
                                            attrib.attribute_name,
                                            key,
                                            $event
                                          )
                                        },
                                        change: function($event) {
                                          var $$a = attrib.checked,
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  attrib,
                                                  "checked",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  attrib,
                                                  "checked",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(attrib, "checked", $$c)
                                          }
                                        }
                                      }
                                    })
                                  ])
                                }),
                                0
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mt-4" }, [
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                _vm._l(_vm.form.pro_attributes, function(
                                  pa,
                                  key
                                ) {
                                  return _c("div", { staticClass: "card" }, [
                                    _c("h5", { staticClass: "card-header" }, [
                                      _vm._v(
                                        "\r\n                  " +
                                          _vm._s(pa.attribute) +
                                          " "
                                      ),
                                      _vm._v(" "),
                                      _c("i", {
                                        staticClass:
                                          "far fa-times-circle danger pointer",
                                        attrs: { title: "Remove" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.remove_attribute(
                                              key,
                                              pa.attribute
                                            )
                                          }
                                        }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "card-body" }, [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table-sm table table-striped"
                                        },
                                        [
                                          _vm._m(1, true),
                                          _vm._v(" "),
                                          _vm._l(pa.values, function(av, key) {
                                            return _c("tr", [
                                              _c("td", [
                                                _c(
                                                  "select",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          av.attribute_value,
                                                        expression:
                                                          "av.attribute_value"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "form-control form-control-sm",
                                                    attrs: {
                                                      id: "",
                                                      name: "attribute_value"
                                                    },
                                                    on: {
                                                      change: function($event) {
                                                        var $$selectedVal = Array.prototype.filter
                                                          .call(
                                                            $event.target
                                                              .options,
                                                            function(o) {
                                                              return o.selected
                                                            }
                                                          )
                                                          .map(function(o) {
                                                            var val =
                                                              "_value" in o
                                                                ? o._value
                                                                : o.value
                                                            return val
                                                          })
                                                        _vm.$set(
                                                          av,
                                                          "attribute_value",
                                                          $event.target.multiple
                                                            ? $$selectedVal
                                                            : $$selectedVal[0]
                                                        )
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          disabled: "",
                                                          value: ""
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Select value .."
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      _vm.AllAttributeValues,
                                                      function(aav) {
                                                        return _c(
                                                          "option",
                                                          {
                                                            domProps: {
                                                              value:
                                                                aav.attribute_value
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                aav.attribute_value
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: av.quantity,
                                                      expression: "av.quantity"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control form-control-sm",
                                                  attrs: {
                                                    type: "number",
                                                    name: "quantity",
                                                    placeholder: "values"
                                                  },
                                                  domProps: {
                                                    value: av.quantity
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        av,
                                                        "quantity",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: av.price,
                                                      expression: "av.price"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control form-control-sm",
                                                  attrs: {
                                                    type: "number",
                                                    name: "price",
                                                    placeholder: "values"
                                                  },
                                                  domProps: { value: av.price },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        av,
                                                        "price",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: av.priority,
                                                      expression: "av.priority"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control form-control-sm",
                                                  attrs: {
                                                    type: "text",
                                                    name: "priority",
                                                    placeholder: "priority"
                                                  },
                                                  domProps: {
                                                    value: av.priority
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        av,
                                                        "priority",
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: av.subtract_stock,
                                                      expression:
                                                        "av.subtract_stock"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "checkbox",
                                                    name: "subtract_stock"
                                                  },
                                                  domProps: {
                                                    checked: Array.isArray(
                                                      av.subtract_stock
                                                    )
                                                      ? _vm._i(
                                                          av.subtract_stock,
                                                          null
                                                        ) > -1
                                                      : av.subtract_stock
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$a =
                                                          av.subtract_stock,
                                                        $$el = $event.target,
                                                        $$c = $$el.checked
                                                          ? true
                                                          : false
                                                      if (Array.isArray($$a)) {
                                                        var $$v = null,
                                                          $$i = _vm._i($$a, $$v)
                                                        if ($$el.checked) {
                                                          $$i < 0 &&
                                                            _vm.$set(
                                                              av,
                                                              "subtract_stock",
                                                              $$a.concat([$$v])
                                                            )
                                                        } else {
                                                          $$i > -1 &&
                                                            _vm.$set(
                                                              av,
                                                              "subtract_stock",
                                                              $$a
                                                                .slice(0, $$i)
                                                                .concat(
                                                                  $$a.slice(
                                                                    $$i + 1
                                                                  )
                                                                )
                                                            )
                                                        }
                                                      } else {
                                                        _vm.$set(
                                                          av,
                                                          "subtract_stock",
                                                          $$c
                                                        )
                                                      }
                                                    }
                                                  }
                                                })
                                              ]),
                                              _vm._v(" "),
                                              _c("td", [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "form-group-"
                                                  },
                                                  [
                                                    _c("i", {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            key ||
                                                            (!key &&
                                                              pa.values.length >
                                                                1),
                                                          expression:
                                                            "key || ( !key && pa.values.length > 1)"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "fas fa-minus-circle danger pointer",
                                                      attrs: {
                                                        title: "Remove"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.remove_attribute_property(
                                                            key,
                                                            pa.attribute
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("i", {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            key ==
                                                            pa.values.length -
                                                              1,
                                                          expression:
                                                            "key == pa.values.length-1"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "fas fa-plus-circle green pointer",
                                                      attrs: { title: "Add" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.add_attribute_property(
                                                            key,
                                                            pa.attribute
                                                          )
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ])
                                            ])
                                          })
                                        ],
                                        2
                                      )
                                    ])
                                  ])
                                }),
                                0
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-four",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-four"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass: "table-sm table table-striped"
                                  },
                                  [
                                    _vm._m(2),
                                    _vm._v(" "),
                                    _vm._l(_vm.form.pro_specification, function(
                                      input,
                                      key
                                    ) {
                                      return _c("tr", { key: key }, [
                                        _c("td", [
                                          _c(
                                            "select",
                                            {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value:
                                                    input.specification_name,
                                                  expression:
                                                    "input.specification_name"
                                                }
                                              ],
                                              staticClass:
                                                "form-control form-control-sm",
                                              attrs: {
                                                id: "",
                                                name: "specification_name"
                                              },
                                              on: {
                                                change: function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.$set(
                                                    input,
                                                    "specification_name",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "option",
                                                {
                                                  attrs: {
                                                    disabled: "",
                                                    value: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Select specification .."
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._l(
                                                _vm.AllSpecifications,
                                                function(specification) {
                                                  return _c(
                                                    "option",
                                                    {
                                                      domProps: {
                                                        value:
                                                          specification.specification_name
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          specification.specification_name
                                                        )
                                                      )
                                                    ]
                                                  )
                                                }
                                              )
                                            ],
                                            2
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: input.specification_desc,
                                                expression:
                                                  "input.specification_desc"
                                              }
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            attrs: {
                                              type: "text",
                                              name: "specification_desc",
                                              placeholder: "Description"
                                            },
                                            domProps: {
                                              value: input.specification_desc
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  input,
                                                  "specification_desc",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value:
                                                  input.specification_serial,
                                                expression:
                                                  "input.specification_serial"
                                              }
                                            ],
                                            staticClass:
                                              "form-control form-control-sm",
                                            attrs: {
                                              type: "text",
                                              name: "specification_serial",
                                              placeholder: "Serial Number"
                                            },
                                            domProps: {
                                              value: input.specification_serial
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  input,
                                                  "specification_serial",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c("i", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  key ||
                                                  (!key &&
                                                    _vm.form.pro_specification
                                                      .length > 1),
                                                expression:
                                                  "key || ( !key && form.pro_specification.length > 1)"
                                              }
                                            ],
                                            staticClass:
                                              "fas fa-minus-circle danger pointer",
                                            attrs: { title: "Remove" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.remove_specification(
                                                  key
                                                )
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("i", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  key ==
                                                  _vm.form.pro_specification
                                                    .length -
                                                    1,
                                                expression:
                                                  "key == form.pro_specification.length-1"
                                              }
                                            ],
                                            staticClass:
                                              "fas fa-plus-circle green pointer",
                                            attrs: { title: "Add" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.add_specificaton(key)
                                              }
                                            }
                                          })
                                        ])
                                      ])
                                    })
                                  ],
                                  2
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-five",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-five"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-12" }, [
                                _c(
                                  "table",
                                  {
                                    staticClass: "table-sm table table-striped"
                                  },
                                  [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _vm._l(_vm.form.pro_discount, function(
                                      input,
                                      key
                                    ) {
                                      return _c("tr", { key: key }, [
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c(
                                                "select",
                                                {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        input.customer_group,
                                                      expression:
                                                        "input.customer_group"
                                                    }
                                                  ],
                                                  staticClass:
                                                    "form-control form-control-sm",
                                                  attrs: {
                                                    id: "",
                                                    name: "customer_group"
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      var $$selectedVal = Array.prototype.filter
                                                        .call(
                                                          $event.target.options,
                                                          function(o) {
                                                            return o.selected
                                                          }
                                                        )
                                                        .map(function(o) {
                                                          var val =
                                                            "_value" in o
                                                              ? o._value
                                                              : o.value
                                                          return val
                                                        })
                                                      _vm.$set(
                                                        input,
                                                        "customer_group",
                                                        $event.target.multiple
                                                          ? $$selectedVal
                                                          : $$selectedVal[0]
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: {
                                                        disabled: "",
                                                        value: ""
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "Select customer group .."
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _vm._l(
                                                    _vm.allCustomerGroups,
                                                    function(cg) {
                                                      return _c(
                                                        "option",
                                                        {
                                                          domProps: {
                                                            value: cg.id
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              cg.group_name
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  )
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.discount_qty,
                                                    expression:
                                                      "input.discount_qty"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "number",
                                                  name: "discount_qty",
                                                  placeholder: "Quantity"
                                                },
                                                domProps: {
                                                  value: input.discount_qty
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_qty",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: input.discount_price,
                                                    expression:
                                                      "input.discount_price"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "text",
                                                  name: "discount_price",
                                                  placeholder: "Price"
                                                },
                                                domProps: {
                                                  value: input.discount_price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.discount_priority,
                                                    expression:
                                                      "input.discount_priority"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "text",
                                                  name: "discount_priority",
                                                  placeholder: "Priority"
                                                },
                                                domProps: {
                                                  value: input.discount_priority
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_priority",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.discount_start_date,
                                                    expression:
                                                      "input.discount_start_date"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "date",
                                                  name: "discount_start_date",
                                                  placeholder: "Start Date"
                                                },
                                                domProps: {
                                                  value:
                                                    input.discount_start_date
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_start_date",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      input.discount_end_date,
                                                    expression:
                                                      "input.discount_end_date"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-control form-control-sm",
                                                attrs: {
                                                  type: "date",
                                                  name: "discount_end_date",
                                                  placeholder: "End Date"
                                                },
                                                domProps: {
                                                  value: input.discount_end_date
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      input,
                                                      "discount_end_date",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("td", [
                                          _c(
                                            "div",
                                            { staticClass: "form-group-" },
                                            [
                                              _c("i", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      key ||
                                                      (!key &&
                                                        _vm.form.pro_discount
                                                          .length > 1),
                                                    expression:
                                                      "key || ( !key && form.pro_discount.length > 1)"
                                                  }
                                                ],
                                                staticClass:
                                                  "fas fa-minus-circle danger pointer",
                                                attrs: { title: "Remove" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.remove_discount(
                                                      key
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("i", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      key ==
                                                      _vm.form.pro_discount
                                                        .length -
                                                        1,
                                                    expression:
                                                      "key == form.pro_discount.length-1"
                                                  }
                                                ],
                                                staticClass:
                                                  "fas fa-plus-circle green pointer",
                                                attrs: { title: "Add" },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.add_discount(key)
                                                  }
                                                }
                                              })
                                            ]
                                          )
                                        ])
                                      ])
                                    })
                                  ],
                                  2
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-six",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-six"
                            }
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "col-md-3" }, [
                                _c("div", { staticClass: "form-group" }, [
                                  _c("label", [
                                    _vm._v("Initial Delivery Charge ")
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.pro_delivery_charge,
                                        expression: "form.pro_delivery_charge"
                                      }
                                    ],
                                    staticClass: "form-control",
                                    attrs: {
                                      type: "text",
                                      name: "pro_delivery_charge",
                                      placeholder: "Normal Delivery Charge"
                                    },
                                    domProps: {
                                      value: _vm.form.pro_delivery_charge
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "pro_delivery_charge",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  })
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "tab-pane fade",
                            attrs: {
                              id: "tabs-body-seven",
                              role: "tabpanel",
                              "aria-labelledby": "tabs-seven"
                            }
                          },
                          [
                            _vm.form.has_many_image.length
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "row mt-2 mb-4",
                                    staticStyle: {
                                      "/*background": "#2196F3",
                                      "*/ margin": "5px 0px 0px 5px",
                                      padding: "10px",
                                      "border-radius": "5px"
                                    }
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-10 offset-1" },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "row align-center" },
                                          _vm._l(
                                            _vm.form.has_many_image,
                                            function(mi, index) {
                                              return _c(
                                                "div",
                                                { staticClass: "col-md-2" },
                                                [
                                                  _c("span", [
                                                    _c("i", {
                                                      staticClass:
                                                        "far fa-times-circle",
                                                      staticStyle: {
                                                        cursor: "pointer",
                                                        background: "#fff",
                                                        padding:
                                                          "4px 2px 2px 2px",
                                                        color: "red",
                                                        "border-radius": "10px",
                                                        "margin-left": "-10px"
                                                      },
                                                      attrs: {
                                                        title: "click to Delete"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.deleteImage(
                                                            mi.id,
                                                            index
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c("img", {
                                                      staticClass:
                                                        "rounded float-left",
                                                      attrs: {
                                                        src: mi.image_url,
                                                        loading: "lazy",
                                                        alt: mi.image_alt,
                                                        height: "100px",
                                                        width: "100px"
                                                      }
                                                    })
                                                  ])
                                                ]
                                              )
                                            }
                                          ),
                                          0
                                        )
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "uploader",
                                class: { dragging: _vm.isDragging },
                                on: {
                                  dragenter: _vm.OnDragEnter,
                                  dragleave: _vm.OnDragLeave,
                                  dragover: function($event) {
                                    $event.preventDefault()
                                  },
                                  drop: _vm.onDrop
                                }
                              },
                              [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "fas fa-cloud-upload-alt"
                                  }),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "mb-0" }, [
                                    _vm._v("Drag your images here")
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "mb-0" }, [
                                    _vm._v("OR")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "file-input" }, [
                                    _c("label", { attrs: { for: "file" } }, [
                                      _vm._v("Select files")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      attrs: {
                                        type: "file",
                                        id: "file",
                                        multiple: ""
                                      },
                                      on: { change: _vm.OnFileChange }
                                    })
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "images-preview" },
                                  _vm._l(_vm.form.pro_images, function(
                                    image,
                                    index
                                  ) {
                                    return _c(
                                      "div",
                                      {
                                        key: index,
                                        staticClass: "img-wrapper"
                                      },
                                      [
                                        _c("img", {
                                          staticClass: "pointer",
                                          attrs: {
                                            src: image,
                                            alt: "Image Uplaoder " + index,
                                            title: "Click To Remove"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.removeImage(index)
                                            }
                                          }
                                        })
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mr-4" }, [
            _c("div", { staticClass: "col-12  text-right" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-flat btn-sm ",
                  attrs: { type: "submit" }
                },
                [
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.editMode,
                          expression: "!editMode"
                        }
                      ]
                    },
                    [_c("i", { staticClass: "fas fa-save" }), _vm._v(" Save")]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.editMode,
                          expression: "editMode"
                        }
                      ]
                    },
                    [_c("i", { staticClass: "far fa-edit" }), _vm._v(" Update")]
                  )
                ]
              )
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-footer" })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header p-0 border-bottom-0" }, [
      _c(
        "ul",
        {
          staticClass: "nav nav-tabs",
          attrs: { id: "custom-tabs", role: "tablist" }
        },
        [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active",
                attrs: {
                  id: "tab-one",
                  "data-toggle": "pill",
                  href: "#tabs-body-one",
                  role: "tab",
                  "aria-controls": "tabs-body-one",
                  "aria-selected": "true"
                }
              },
              [_vm._v("General")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-two",
                  "data-toggle": "pill",
                  href: "#tabs-body-two",
                  role: "tab",
                  "aria-controls": "tabs-body-two",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Data & Link")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-three",
                  "data-toggle": "pill",
                  href: "#tabs-body-three",
                  role: "tab",
                  "aria-controls": "tabs-body-three",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Attribute")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-four",
                  "data-toggle": "pill",
                  href: "#tabs-body-four",
                  role: "tab",
                  "aria-controls": "tabs-body-four",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Specification")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-five",
                  "data-toggle": "pill",
                  href: "#tabs-body-five",
                  role: "tab",
                  "aria-controls": "tabs-body-five",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Discount")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-six",
                  "data-toggle": "pill",
                  href: "#tabs-body-six",
                  role: "tab",
                  "aria-controls": "tabs-body-six",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Delivery")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link",
                attrs: {
                  id: "tabs-seven",
                  "data-toggle": "pill",
                  href: "#tabs-body-seven",
                  role: "tab",
                  "aria-controls": "tabs-body-seven",
                  "aria-selected": "false"
                }
              },
              [_vm._v("Images")]
            )
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Attribute Value")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Priority")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "10%" } }, [_vm._v("Subtrack Stock")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Action")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "25%" } }, [_vm._v("Specification Name")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "45%" } }, [_vm._v("Details")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Serial No")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Action")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", { staticClass: "mb-2" }, [
      _c("th", { attrs: { width: "20%" } }, [_vm._v("Customer Group")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "9%" } }, [_vm._v("Quantity")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "7%" } }, [_vm._v("Price")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "7%" } }, [_vm._v("Priority")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Start Date")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("End Date")]),
      _vm._v(" "),
      _c("th", { attrs: { width: "15%" } }, [_vm._v("Action")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);