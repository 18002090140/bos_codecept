


/**
 * 给定关键字的同一行
 * @param text 
 */
function rowWithText(text) {
	return "//table//div[string() = '"+text+"' ]/ancestor::tr"
}


module.exports = {
	rowWithText
}
