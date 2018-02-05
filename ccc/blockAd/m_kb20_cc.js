// JavaScript Document

///查找 返回 true / false
function exists_tag_attr_src(tagName,attr,src){
    var _metas = document.getElementsByTagName(tagName);//根据元素名称查找元素对象 tagName 例如：meta/div/span/table
    //alert("_metas:"+_metas+" "+tagName+" "+attr+" "+src);
    for(var i=0;i<_metas.length;i++){//循环根据元素名称获取到的元素对象集合
        var _item = _metas.item(i);
        var _attrContent = _item.getAttribute(attr);//根据属性名称获取元素对象中属性对应的值
        var _index = _attrContent.indexOf(src);//查询属性中的值是否存在需要查找的内容,类似模糊
        if(_index>=0){//如果存在 则返回true
            return true;
        }
    }
    return false;//如果前面找不到，这里默认返回false
}


///设置
function update_tag_attr_src(tagName,attr,src,content){
    var _metas = document.getElementsByTagName(tagName);
    for(var i=0;i<_metas.length;i++){
        var _item = _metas.item(i);
        var _attrContent = _item.getAttribute(attr);
        var _index = _attrContent.indexOf(src);
        if(_index>=0){
            _item.setAttribute(attr,content);//设置元素对象指定属性的值
        }
    }
}
	
	
	
///替换
function replace_tag_attr_src(tagName,attr,src,content){
    var _metas = document.getElementsByTagName(tagName);
    for(var i=0;i<_metas.length;i++){
        var _item = _metas.item(i);
        var _attrContent = _item.getAttribute(attr);
        var _index = _attrContent.indexOf(src);
        if(_index>=0){
            _attrContent = _attrContent.replace(src,content);//先替换指定属性中值里面指定的值
            _item.setAttribute(attr,_attrContent);//再将替换后的新值设置到原属性
        }
    }
}

///追加
function append_tag_attr_src(tagName,attr,content){
    var _metas = document.getElementsByTagName(tagName);
    for(var i=0;i<_metas.length;i++){
        var _item = _metas.item(i);
        var _attrContent = _item.getAttribute(attr);
        _attrContent = _attrContent + " " + content;
        _item.setAttribute(attr,_attrContent);//再将替换后的新值设置到原属性
    }
}


//清除Devce
function clean_device_width(){
    replace_tag_attr_src("meta","content","device-width","telen-clean-device_width");
}

//向本地发起一个请求
function loadURL(url) {
    var iFrame;
    iFrame = document.createElement("iframe");
    iFrame.setAttribute("src", url);
    iFrame.setAttribute("style", "display:none;");
    iFrame.setAttribute("height", "0px");
    iFrame.setAttribute("width", "0px");
    iFrame.setAttribute("frameborder", "0");
    document.body.appendChild(iFrame);
    // 发起请求后这个iFrame就没用了，所以把它从dom上移除掉
    iFrame.parentNode.removeChild(iFrame);
    iFrame = null;
}

//移除广告  碟调网_酷播
function blockBlank_m_kb20_cc(){return "YES";}
function removeAd_m_kb20_cc(){
    var dv1 = document.getElementById('SOHUCS');
    if(dv1){
        dv1.parentNode.removeChild(dv1);
    }
    var mlist = document.getElementsByTagName('body');
    for (var i=1;i<mlist.length;i++)
    {
        var box = mlist[i];
        box.parentNode.removeChild(box);
    }
    mlist = document.getElementsByTagName('iframe');
    for (var i=0;i<mlist.length;i++)
    {
        var box = mlist[i];
        //alert(box.parentNode.nodeClass);
        //alert(""+box.height);
        //loadURL("log://"+box.height);
        if(i > 0 || box.height != '100%'){
            box.parentNode.removeChild(box);
        }
    }
    mlist = document.getElementsByTagName('script');
    for (var i=0;i<mlist.length;i++)
    {
        var box = mlist[i];
        var nodeName = box.nodeName;
        var nodeId = box.id;
        var parentNodeName = ""+box.parentNode.nodeName;
        //loadURL("log://"+nodeName+"--"+nodeId+"--"+parentNodeName);
        if(parentNodeName == "DIV")
        {
            var parent = box.parentNode;
            parent.parentNode.removeChild(parent);
            //loadURL("log://remove--"+parentNodeName);
        }
    }
    mlist = document.getElementsByTagName('DIV');
    for (var i=0;i<mlist.length;i++)
    {
        var box = mlist[i];
        var nodeName = box.nodeName;
        var nodeId = box.id;
        if(nodeId.length > 40){
            box.parentNode.removeChild(box);
            //loadURL("log://"+nodeName+"--"+nodeId);
        }
    }
}
removeAd_m_kb20_cc();



