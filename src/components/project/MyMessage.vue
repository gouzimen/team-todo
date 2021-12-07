<template>
  <!-- 留言控件 自己发的 -->
  <div class="mx-2 py-2 flex flex-row-reverse items-end">
    <div class="flex-none rounded-full h-10 w-10 bg-blue-300 lg:h-12 lg:w-12">
    </div>
    <!-- 留言卡片 -->
    <div class="px-2 rounded-md text-xs flex-initial ml-10 lg:ml-12">
      <!-- 自己发的，所以不需要显示用户名了 -->
      <!-- 文本 -->
      <div class="p-2 rounded-xl bg-lime-700 text-lime-100 hover:bg-lime-800 transition-all duration-200 sm:text-sm">
        {{ msg }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg","continue"], // continue是判断这个消息是否来自与上一条消息同一个人
};
</script>
