let attribute = "data-test";
let ancestor_attribute = "aria-label";

let  tagInTable = {
	locator : "",
	tr:function (text,number=1) {
		this.locator = "//tr[contains(translate(., ' ', ''),'"+text+"')]["+number+"]";
		return this;
	},
	td:function (elementValue,tag = "button") {
		this.locator = this.locator+"//"+tag+"[contains(translate(., ' ', ''),'"+elementValue+"')]";
		return this;
	},
	get:function(){
		return this.locator;
	}
}

function testId(id){
	let rs  = getBaseXpath(id)+"]"
	return rs;
}

function testIdIn(id,ancestor){
	let string = getBaseXpath(id);
	return string+ "and "+content(ancestor)+"]"
}

function testIdNotIn(id,ancestor){
	let string = getBaseXpath(id);
	return string+ " and not "+content(ancestor)+"]"
}

//通过 attribute 和id 获取 xpath
function getBaseXpath(id){
	return 	"//*[@"+attribute+"='"+id+"'and not (ancestor::div[contains(@style,'display:none')]) and not (ancestor::div[contains(@style,'display: none')])"
}

function content(value){
	return "(ancestor::div[contains(@"+ancestor_attribute+",'"+value+"')])"
}

//在表格中通过先定位text文本定位tr，要是有多个可通过number进行选择，最后是通过value定位到最后的元素


//text匹配标签对里面的内容是否
function tag(text, tag ='button') {
	return "//"+tag+"[contains(translate(., ' ', ''),'"+text+"')and not (ancestor::div[contains(@style,'display:none')]) and not (ancestor::div[contains(@style,'display: none')])]";
	//button[contains(translate(., ' ', ''), '登录')]
}



// //label[contains(.,'装备大类')]/following-sibling::div//input
function inputWithTag(text,tag="label") {
	return "//"+tag+"[contains(.,'"+text+"')]/following-sibling::div//input"
}


module.exports = {
	testId,
	testIdIn,
	testIdNotIn,
	tag,
	inputWithTag,
	tagInTable
}
