<template>
  <div>
    <div id="conten"></div>
    <div class="pagination">
        <ul id="pagination1">
        </ul>
    </div>
    <p id="text"></p>
  </div>
</template>

<script>
import $ from "jquery";
import "../../static/bootstrap/js/jq-paginator";
export default {
  data() {
    return {
      list: [
        { con: "内容" },
        { con: "内容2" },
        { con: "内容3" },
        { con: "内容4" },
        { con: "内容5" },
        { con: "内容6" },
        { con: "内容7" },
        { con: "内容8" },
        { con: "内容9" },
        { con: "内容10" },
        { con: "内容11" },
        { con: "内容12" },
        { con: "内容13" },
        { con: "内容14" },
        { con: "内容15" },
        { con: "内容16" },
        { con: "内容17" },
        { con: "内容18" },
        { con: "内容19" },
        { con: "内容20" },
        { con: "内容21" },
        { con: "内容22" },
        { con: "内容23" },
        { con: "内容24" }
      ],
    };
  },
  methods: {
    initPage() {
      let _this=this
      $("#pagination1").jqPaginator({
        totalCounts: 24,
        visiblePages: 10,
        currentPage: 1,
        pageSize:5,
        onPageChange: function(num, type) {
            $('#conten').children().remove()
          console.log("当前第" + num + "页",type);
            $("#text").html("当前第" + num + "页");
            let arr=[]
            arr=_this.list.slice((num-1)*5,num*5)
            arr.forEach(element => {
              $('#conten').append('<p>'+element.con+'</p>')
            });
        }
      });
    }
  },
  mounted() {
    this.initPage();
  }
};
</script>

<style lang="scss" scoped>
</style>