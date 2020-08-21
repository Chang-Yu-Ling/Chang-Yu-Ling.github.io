# **檔案說明**
:::info
### 目錄連結:[TOC]
:::
## <操作流程說明>
#### 1. 下載
```
clone 
```
如下圖

![](https://i.imgur.com/0zmA1ME.png)

#### 2. 執行
```
cd ~/home_3的檔案路徑
node ser.js
```
如下圖

![](https://i.imgur.com/0zmA1ME.png)

#### 3. 登入

* 測試用帳號/密碼
> 
> 帳號    |  BEEP
> --------------|------------------------
> 密碼     |  BEEP
* 登入流程
> 網址：http://luffy.ee.ncku.edu.tw:9999/home.html
> 
> 輸入網址    |  點選登入　 | 選擇登入方式 | 輸入帳號/密碼|點選登入
> --------------|------------------------|------------------------|------------------------|------------------------|------------------------
> ![](https://i.imgur.com/06BzNmr.png)     |![](https://i.imgur.com/JHWvIUK.png)|![](https://i.imgur.com/SQPEGOz.png)|![](https://i.imgur.com/5xPdnfg.png)|![](https://i.imgur.com/V37YRpX.png)




## <檔案結構>
#### 1.  tree ~/home_3/ 
```
/home_3/
├── Card_key.json         ＼
├── notice.json
├── Pay.json                後
├── Paylike.json
├── ser.js                  端
├── Talk.json
├── node_modules          ／
└── dist                  ＼
    ├── announce.html
    ├── card_data2.json
    ├── exercise.css
    ├── exercise.js         
    ├── home.html           前
    ├── id.js
    ├── main.css
    ├── main.js
    ├── pic                 端
    ├── res
    │   └── img
    ├── talk.css
    └── talk.js           ／
``` 
#### 2.  json檔內容說明 
* 前端
> 
> 檔名    |  內容
>  --------------|------------------------
> card_data2.json     |  信用卡資料爬蟲結果(更新日期：2020/05/17)

* 後端
> 
> 檔名    |  內容
>  --------------|------------------------
> Pay.json     |  使用者加入`我的信用卡`的記帳資料
> Paylike.json     |  使用者加入`喜愛信用卡`的試算資料
> Talk.json     |  所有論壇資料
> notice.json     |  所有使用者的通知資料    
> Card_key.json     |  比對通知用關鍵字資料    

:::success
##### :zap::zap: **結論** 
* 上述4個資安建置的項目 需 `同時符合` 才可登入
:::
