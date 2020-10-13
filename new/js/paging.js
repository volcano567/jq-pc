var paging = {
  pagesize:10,
  pagecount:48,
  pages:1,
  reLoadUrl:'',
  init:function(){
    this.pagesize = parseInt($('#pageDec').attr('pagesize') ? $('#pageDec').attr('pagesize') : this.pagesize);
    this.pagecount = parseInt($('#pageDec').attr('pagecount') ? $('#pageDec').attr('pagecount') : this.pagecount);
    this.pages =  Math.ceil(this.pagecount/this.pagesize);
    var page = this.getNowPage();
    var uppage = page == 1 ? 1 : (page - 1);
    var downpage = page == this.pages ? this.pages : (page + 1);
    var prev = page == 1 ? '' : 'onclick="paging.goto(this)"';
    var next = page == this.pages ? '' : 'onclick="paging.goto(this)"';
    var btns =
      '<span class="sDisable" data-page="1"' + prev + '>首页</span>' +
      '<span class="sDisable" data-page="' + uppage + '"' + prev + ' >上一页</span>' +
      '<span class="sDisable" data-page="' + downpage + '"' + next + '>下一页</span>' +
      '<span class="sDisable" data-page="' + this.pages + '"' + next + '>尾页</span>' +
      '<span class="pageInfo">' + page + ' / ' + this.pages + '</span>';
    $('#pageDec').append(btns);
    
    var urls =  window.location.href;
    var pagesStr = "1,2,3";
    if(urls.indexOf("/index")>-1){
        var lastStr = urls.substring(urls.lastIndexOf('/'));
        var indexof = lastStr.indexOf('_');
        var page = parseInt(indexof > -1 ? lastStr.substring(indexof + 1) : 0) +1;
        console.log(page)
        if(page==2){
            pagesStr = "1,2,3,4"
        }else if(page > 2 && page < (this.pages-1)){
            var pAry = [page-2,page-1,page,page+1,page+2];
            pagesStr = pAry.join(',');
        }else if(page == (this.pages-1)){
            var pAry = [page-2,page-1,page,page+1];
            pagesStr = pAry.join(',');
        }else if(page == this.pages){
            var pAry = [page-2,page-1,page];
            pagesStr = pAry.join(',');
        }
        pagesStr = pagesStr +","+ this.pages;
        this.pagingAjax(pagesStr);
    }else{
        pagesStr = pagesStr +","+ this.pages;
        this.pagingAjax(pagesStr);
    }
    return this;
  },
  getNowPage:function () { 
    var url =  window.location.href;
    var lastStr = url.substring(url.lastIndexOf('/'));
    var indexof = lastStr.indexOf('_');
    var page = parseInt(indexof > -1 ? lastStr.substring(indexof + 1) : 0) + 1;
    this.reLoadUrl = url.substring(0,(url.lastIndexOf('/') + 1));
    return page;
  },
  goto:function(obj) {
    var page = parseInt($(obj).attr('data-page') || $(pageJump).val());
    if (!page) {
      return;
    }
    page = page > this.pages ? this.pages : page;
    page = page < 1 ? 1 : page;
    page -= 1;
    var returnp = page == 0 ? '' : ('_' + page); 
    var dataUrl = this.reLoadUrl + 'index' + returnp + '.html';
    window.location.href = dataUrl;
  },
  pagingAjax:function(pages){
    $.ajax({
        type:"get",
        url:"https://page.henan.gov.cn/paging",
        data:{ "siteId":$("#siteId").val(),"channelId":$("#channelId").val(),"pages":pages },
        success:function(data){
            console.log(data)
        }
    });
  }
}.init()