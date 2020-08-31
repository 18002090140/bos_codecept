


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
	return "("+prefix+"//input[@type='text']" +" | "+prefix+"//textarea"+ " | " +prefix+"//input[@type='password']" +")";
}

function inputWithplaceHolder(propertyLabel){
	const prefix=`//div[@class="define-input-container border"]`;
	//TODO 有待扩展到其他输入框
	return "("+prefix+`//input[@placeholder="${propertyLabel}"]` +" | "+prefix+"//textarea"+")";
}

function entitySelectorWithLabel(propertyLabel){
	return `//div[@data-label="${propertyLabel}"]//i[contains(@class,'iconfont iconxuanze')]`;
}

function popupWindowWithTitle(propertyLabel){
	return `//div[@aria-label="${propertyLabel}"]`;
}

function buttonWithName(propertyLabel){
	return `//button[@name='${propertyLabel}']`;
}

function fieldWithLabel(propertyLabel){
	return `//div[@data-label="${propertyLabel}"]`;
}

function liWithLabelAndName(label,name){
	return `//div[@data-label="${label}"]//li[@name="${name}"]`
}

function rowWithCellTextInColumn(cellText,ColumnHeaderText){
	return `//div[contains(@class,"el-table__body-wrapper")]/table//td[string()="${cellText}"][count(./preceding-sibling::*)=count(//div[@class="el-table__header-wrapper"]/table//th[contains(.,'${ColumnHeaderText}')]/preceding-sibling::*)]/parent::tr`;
}

module.exports = {
	rowWithText,inputWithLabel,entitySelectorWithLabel,rowWithCellTextInColumn,popupWindowWithTitle,fieldWithLabel,inputWithplaceHolder,buttonWithName,liWithLabelAndName
}
