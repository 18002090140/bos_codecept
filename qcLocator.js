


/**
 * 给定关键字的同一行
 * @param text 
 */
function rowWithText(text) {
	return `//*[text()="${text}"]/ancestor-or-self::tr[@class="el-table__row"]`;
	
}

function inputWithLabel(propertyLabel){
	const prefix=`//div[@data-label="${propertyLabel}"]`;
	//TODO 有待扩展到其他输入框
	return "("+prefix+"//input[@type='text']" +" | "+prefix+"//textarea"+")";
}

function entitySelectorWithLabel(propertyLabel){
	return `//div[@data-label="${propertyLabel}"]//i[contains(@class,'icon-sousuo')]`;
}

function popupWindowWithTitle(propertyLabel){
	return `//div[@data-title="${propertyLabel}"]`;
}

function fieldWithLabel(propertyLabel){
	return `//div[@data-label="${propertyLabel}"]`;
}

module.exports = {
	rowWithText,inputWithLabel,entitySelectorWithLabel,popupWindowWithTitle,fieldWithLabel
}
