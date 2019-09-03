<template>
  <div>
    <div class="pagination">
        <ul id="pagination1" v-for="(item,i) in list" :key="i">
            
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
      leftNum1: "", // 第一个分页的 数  [
      rightNum1: "", // 第一个分页的  数 )
      leftNum2: "", // 第二个分页的 数  [
      rightNum2: "" // 第二个分页的 数  )
    };
  },
  watch: {
    // page() {
    //   this.initPage(totalPages, pageSize, pageNum);
    // }
  },
  methods: {
    /**
     * 分页
     * totalPages: 总页数
     * visiblePages: 展示的页数，我一般都是用10，所以写死了
     * currentPage: 当前页
     */
    initPage() {
      $("#pagination1").jqPaginator({
        totalCounts: 24,
        visiblePages: 10,
        currentPage: 1,
        pageSize:5,
        onPageChange: function(num, type) {
          console.log("当前第" + num + "页",type);
            $("#text").html("当前第" + num + "页");
            
        }
      });
    }
  },
  mounted() {
    // $("#pagination1").jqPaginator("option", {
    //   currentPage: 1
    // });
    console.log('1')
    this.initPage();
  }
};
</script>

<style lang="scss" scoped>
</style>