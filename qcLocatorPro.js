// sbl:sibling
// fwl:following
// pcd:preceding
// eld:exclude
// anc:ancestor
module.exports = {
	_xPath:"",
	get:function (args = "last") {
		let display = "[not (contains(@style,'display: none')) and not (contains(@style,'display:none')) and not (ancestor::div[contains(@style,'display:none')]) and not (ancestor::div[contains(@style,'display: none')])]";
		let path = "("+this._xPath+")"+display;
		this._xPath = "";
		if (args === false){
			return path
		}else {
			path = "("+path+")";
			if (args === "last"){
				return path + "[" + args + "()]";
			} else if(typeof args === "number" || typeof parseInt(args) !== "NaN"){
				return path + "[" + args + "]";
			} else if (args === "first"){
				return path + "[" + args + "()]";
			}
		}
	},
	isNull:function () {
		if (this._xPath!==""){
			this._xPath = "("+this._xPath+")"
		}
	},
	//通过文本内容和标签查元素 但还是排除了空格
	text:function (text, tag, all){
		if (tag !== false){
			this.tag(tag,all);
		}
		this.isNull();
		this._xPath = this._xPath + "[(translate(.,' ','')='"+text+"')]";
		return this
	},
	//通过模糊的文本内容和标签查元素
	fuzzyText:function (text, tag, all){
		if (tag !== false){
			this.tag(tag,all);
		}
		this.isNull();
		this._xPath = this._xPath + "[contains(translate(.,' ',''),'"+text+"')]";
		return this
	},
	//选择elCheckBox
	elCheckbox:function () {
		this._xPath = this._xPath + "//*[@class='el-checkbox']";
		return this;
	},

	//通过data-test查找
	id:function(id,tag,all){
		if (tag !== false){
			this.tag(tag,all);
		}
		this.isNull();
		this._xPath = this._xPath + "[@data-test='"+id+"']";
		return this
	},
	//通过标签查找元素
	tag:function(tag = "*", all =true){
		this.isNull();
		if (all === true){
			this._xPath = this._xPath+"//"+tag;
		}else {
			this._xPath = this._xPath+'/'+tag;
		}
		return this
	},
	//获取指定编号的元素
	number:function (n) {
		this.isNull();
		this._xPath = this._xPath + "["+ n +"]"
		return this
	},
	//选取当前节点之后的所有同级元素
	flwSbl:function(tag){
	this.isNull();
	this._xPath =this._xPath +"/following-sibling::"+tag;
		return this
	},
	//选取当前节点之前的所有同级元素
	pcdSbl:function (tag){
		this.isNull();
		this._xPath = this._xPath+"/preceding-sibling::"+tag;
		return this
	},
	inAnc:function (attribute,value,tag = "*") {
		this.isNull();
		this._xPath = this._xPath+"[ancestor::"+tag+"[@"+attribute+"='"+value+"']"+"]";
		return this
	},
	notInAnc:function (attribute,value,tag = "*") {
		this.isNull();
		this._xPath = this._xPath+"[not(ancestor::"+tag+"[@"+attribute+"='"+value+"']"+"])]";
		return this
	},
	divOrBtnByText:function (text) {
		return "(//button[contains(translate(.,' ',''),'"+text+"')] | //div[contains(translate(.,' ',''),'"+text+"')])[last()]";
	},
	upFile:function () {
		return "//input[@type=\"file\"]";
	},
	getProximityText:function (proximity,text) {
		// 查找最近的点
		return "((((//*[contains(translate(.,' ',''),'"+text+"')])/ancestor-or-self::*[contains(translate(.,' ',''),'"+proximity+"')])[last()])//*[contains(translate(.,' ',''),'"+text+"')])[last()]";
	},

	/**
	 *通过与该tag相近的proximity来确定该tag
	 * @param proximity  "proximity:false" 关闭模糊锁定
	 * @param tagAndNumber 默认为“input:1”
	 * @returns {string}
	 */
	getProximityTag:function (proximity, tagAndNumber = "input:1") {
		let list,tag,number;
		if (tagAndNumber.includes(":")){
			list = tagAndNumber.toString().split(":")
			tag= list[0];
			number= list[1]
			if (list[0]===""){
				tag = "input"
			}
		}else {
			tag=tagAndNumber
			number="1"
		}
		if (proximity.toString().includes(":")){
			let PXYList,isFuzzy
			PXYList = proximity.toString().split(":")
			isFuzzy = PXYList[1]
			if (isFuzzy==="false"){
				return "((//"+tag+"/ancestor-or-self::*[.//*[text()='"+PXYList[0]+"']])[last()]" +
					"//"+tag+")["+ number +"]";
			}
		}
		return  "((//"+tag+"/ancestor-or-self::*[contains(translate(.,' ',''),'"+proximity+"')])[last()]" +
			"//"+tag+")["+ number +"]";
	},

	getProximityIcon:function(proximity,icon){
		return "(//*[name()='use']/ancestor-or-self::*[contains(translate(.,' ',''),'"+proximity+"')])[last()]//*[name()='use'][@*='#icon-"+icon+"']"
	},

	getInputByPlaceholder:function(placeholder = "请选择"){
		return "//input[contains(@placeholder,'"+placeholder+"')]"
	},

	getElSelect:function () {
		return "//*[contains(@class,'el-icon-arrow-up') and contains(@class,'el-select__caret')]";
	},

	//通过图标查找元素
	getIcon:function (iconName,getArgs) {
		this.isNull();
		this._xPath = "(//*[(name()='use')][@*='#icon-"+iconName+"'])/ancestor::*[name()='svg']";
		return this.get(getArgs)
	},


}

// icon 根据class找

// 查找最近的点
// "(((//*[contains(translate(.,' ',''),'小类')])/ancestor-or-self::*[contains(translate(.,' ',''),'添加')])[last()])/*[contains(translate(.,' ',''),'添加')]"

// 由于属性并不能像内容一样可以通过包含子节点来判断，所以单独一个写法
// (//*[@*='请选择']/ancestor-or-self::*[contains(translate(.,' ',''),'装备型号')])[last()]//*[@*='请选择']

// element-ui中的select
// //*[contains(@class,'el-icon-arrow-up') and contains(@class,'el-select__caret')]

// table查找，根据每一行可能出现的按钮查找，而不是找表头"姓名“”
// ((//*[contains(translate(.,' ',''),'查看')])[last()]/ancestor-or-self::table)[last()]


