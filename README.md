#Javascript SDK整合說明文件
- [概論](https://github.com/VMFive/vmfive-man-web-demo/edit/gh-pages/README.md##概論)
- [SDK整合](https://github.com/VMFive/vmfive-man-web-demo/edit/gh-pages/README.md##SDK整合)
- [支援DFP](https://github.com/VMFive/vmfive-man-web-demo/edit/gh-pages/README.md##支援DFP)
##概論
Mobile Attention Network,簡稱MAN, 是世界第一個使用注意力指標的廣告聯播網.我們提供四種廣告格式：原生廣告(Native), 置頂廣告(Top),蓋版廣告(Interstitial),以及原創的滾動全版(Impressive).本篇文章說明如何運用MAN的Javascript SDK,在行動網頁中插入以上四種廣告. 請注意MAN的廣告目前只會在行動網頁上顯示,在PC版的網頁上目前無法展示MAN的廣告.
##SDK整合
###引入SDK
SDK連結 ： https://vawpro.vm5apis.com/man.js

在網頁的head標籤中引入並且初始化SDK,例如以下程式碼：

```html
<head>

<script id="vm5ad-js-sdk" src="https://vawpro.vm5apis.com/man.js" data-mode="sdk"></script>
<script>
	window.onVM5AdSDKReady = function() {
    VM5AdSDK.init({ appKey:'your_appkey', testMode: true });
    };
</script>

</head>
```
在引入SDK時,請確認id設為**vm5ad-js-sdk** 且data-mode設定為
**sdk**. 

在初始化SDK時,請先開啟測試模式(tesMode: true),確認測試廣告可以成功載入並且曝光後,**關閉測試模式(tesMode: false)**,並且**填入正確的app key**，確認廣告是否可以載入並且曝光.如果無法曝光請再次確認app key是否正確,需要小心不要填入文字編輯器可能暗藏的隱藏字元.如果仍然無法顯示廣告,請留意console是否有印出錯誤訊息,並且聯絡VM5客服人員

##載入並且展示廣告
建立vmfive-ad-unit元件,並且填入正確的placement id和想要展示的廣告型態.請務必確認要插入廣告的版位(placement),並且和VM5客服人員聯絡取得對應的Placement ID, 填入不正確的Placement ID會導致廣告載入失敗. 

###原生廣告 (Native)
指定ad-type為**video-native**

適合安插在文章段落間
```html
<vmfive-ad-unit placement-id="582ad449038f454a190d4331" ad-type="video-native"></vmfive-ad-unit>
```

請參考[範例](https://github.com/VMFive/vmfive-man-web-demo/blob/gh-pages/demos/example.html) 
###置頂廣告 (Top)
指定ad-type為**video-top**

適合安插在首頁置頂

```html
<vmfive-ad-unit placement-id="582ad449038f454a190d4331" ad-type="video-top"></vmfive-ad-unit>
```

請參考[範例](https://github.com/VMFive/vmfive-man-web-demo/blob/gh-pages/demos/simple-top.html)
###滾動全版廣告 (Impressive)
指定ad-type為**video-impressive**

適合安插在文章段落之間

```html
<vmfive-ad-unit placement-id="582ad449038f454a190d4331" ad-type="video-impressive"></vmfive-ad-unit>
```

請參考[範例](https://github.com/VMFive/vmfive-man-web-demo/blob/gh-pages/demos/simple-impressive.html)
###蓋版廣告 (Interstitial)
指定ad-type為**video-interstitial**

適合在網頁Body的開始就載入插頁廣告

``` html
<vmfive-ad-unit placement-id="582ad449038f454a190d4331" ad-type="video-interstitial"></vmfive-ad-unit>
```
請參考[範例](https://github.com/VMFive/vmfive-man-web-demo/blob/gh-pages/demos/simple-interstitial.html)
###除錯
SDK會在控制台(Console)印出重要訊息,提供開發者除錯使用.我們整理出一些常見的訊息供參考 ：
####廣告狀態
* **廣告載入**:
ImpressionManager video_loaded:610 

	(610為載入時間,ms)

* **廣告曝光**:
ImpressionManager impression

* **影片播放進度**：ImpressionManager video_percentage:0

* **影片播放秒數** :ImpressionManager video_progress:0

* **達到View標準** : ImpressionManager view

####錯誤訊息
* **沒有廣告可投放** : [VM5AdSDK:AdController] ProxyServer responded error with code: 1009, message: Ad Server Response No Ad +139ms
* **沒有呼叫VM5AdSDK.init()**：SDK not initialized

* **沒有給appkey** ： AppKey not specified

##支援DFP
###網頁端
建立DFP Creative : data-mode需要指定為**dfp-creative**,並且在收到**onVM5AdDFPCreativeReady**時直接傳入正確的**appKey**,**placementID**以及**adType**,例如以下代碼：

```html
<script id="vm5ad-js-sdk" src="https://vawpro.vm5apis.com/man.js" data-mode="dfp-creative"></script>
<script>
window.onVM5AdDFPCreativeReady = function() {
  VM5AdDFP.register({
    appKey: '580db14a4a801a2674a56f81',
    placementId: '582ad449038f454a190d4331',
    adType: 'video-native',
    clickUrl: '%%CLICK_URL_UNESC%%',
    width: %%WIDTH%%,
    height: %%HEIGHT%%,
    slotId: 'vm5-dfp-hello'
  });
};
</script>

```
完整[範例](https://github.com/VMFive/vmfive-man-web-demo/blob/gh-pages/demos/simple-dfp.html)

**需要特別注意的是,在head中,vm5的程式碼必需放在DFP的Code之前**
###後台





