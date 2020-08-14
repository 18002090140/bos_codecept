var str = `
{
    "name": "cxzc",
    "number": "asda",
    "represent": "asdasdscz",
    "userStory": {
        "name": "用户故事-不要删",
        "number": "007",
        "represent": "用户故事内容，不要不要不要删！",
        "sprint": {
            "name": "asda",
            "represent": "asdaqeqeweqweqweqwe"
        }
    },
    "testDataSet": {
        "qewq":{
            "number": "qewq",
            "dataJson": {
                "totalElements(null)": 0,
                "size(总条数)": 0,
                "first(null)": true,
                "number(null)": 0,
                "numberOfElements(null)": 0,
                "last(null)": true,
                "totalPages(null)": 0
            },
            "domainModel": {
                "id": "10vvHknST9e42XQoYno5nQ_DM",
                "name": "null",
                "qualifiedName": "Page«object»",
                "bosType": "null",
                "propertySet": [
                    {
                        "chineseName": "null",
                        "name": "size",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "integer"
                    },
                    {
                        "chineseName": "null",
                        "name": "number",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "integer"
                    },
                    {
                        "chineseName": "null",
                        "name": "first",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "boolean"
                    },
                    {
                        "chineseName": "null",
                        "name": "last",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "boolean"
                    },
                    {
                        "chineseName": "null",
                        "name": "content",
                        " memo": "null",
                        "propertyTypeEnum": "ONE2MANY",
                        "baseType": "null"
                    },
                    {
                        "chineseName": "null",
                        "name": "numberOfElements",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "integer"
                    },
                    {
                        "chineseName": "null",
                        "name": "totalElements",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "integer"
                    },
                    {
                        "chineseName": "null",
                        "name": "totalPages",
                        " memo": "null",
                        "propertyTypeEnum": "BASETYPE",
                        "baseType": "integer"
                    }
                ]
            }
        }
    }
}`
console.log(x=JSON.parse(str))
str=str.replace('"//',"/*");
str=str.replace('///','*/"');

if (str.indexOf("/*")) {
     str = str.replace(/\/\*(\S|\s)*\*\//g, "")
 }
 console.log(y=JSON.parse(str))
/*
var obj = {}
str.replace(/\"(\w+)\": \"(.+?)\"(}|,)/gi, function (a, b, c) {
    console.log(b, c)
    obj[b] = c
})
console.log(obj)
*/