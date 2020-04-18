# card_data.json

  * encode=utf8
    data type=皆為 string

  * 格式
      EX:
    [
	{
      "name" : "國泰世華 享購鈦金卡",
      "brief_intro" :"新戶好禮最高享OPENPOINT 180,000點(等值NT$600)。網路訂餐天天享8%回饋。",
      "img" : "https://images.contentstack.io/v3/assets/blt4ca32b8be67c85f8/blt2494443fae434a80/5c6671330a42866d41de6436/CUBX0006.png?width=178&height=112&auto=webp",
      "link" : "https://www.money101.com.tw/信用卡/國泰世華享購鈦金卡?entry=image&from=全部",
      "v_year" :"首年免年費",
      "v_in" : "1%",
      "v_out" : "1.7%",
    	},

	{
	
	....

    	},

	.
	.
	.
	.

    ]

    * 使用:直接用index查詢所需項目



# card.csv

  * encode=utf8

  * 1st row=.json的index值
    2nd row=.json的index值 中文解說
    

| name  | img  | v_year  | v_in  | v_out  |link|brief_intro|
    |-------|------|---------|-------|--------|----|-----------|
    |卡名   |卡圖片|年費|國內消費現金回饋|國外消費現金回饋|詳細介紹連結|限時優惠|
