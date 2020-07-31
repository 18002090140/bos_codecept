


/**
 * 给定关键字的同一行
 * @param text 
 */
function rowWithText(text) {
	return "//table//div[string() = '"+text+"' ]/ancestor::tr"
}

function inputWithLabel(propertyLabel){
	return `//SPAN[text()="${propertyLabel}"]/ancestor-or-self::*[contains(@class,'define-input-container')]//input[@type='text']`;
	
}

module.exports = {
	rowWithText,inputWithLabel
}
