<template>
  <!-- 留言控件 -->
  <div class="mx-2 py-2 flex items-end">
    <div class="flex-none rounded-full h-10 w-10 bg-blue-300 lg:h-12 lg:w-12"></div>
    <!-- 文本卡片 -->
    <div class="px-2 rounded-md text-xs flex-initial mr-10 lg:mr-12 md:mr-10">
      <!-- 用户名 -->
      <span class="block text-xs font-semibold sm:text-base">{{ attendant }}</span>
      <!-- 文本 -->
      <div class="p-2 rounded-xl bg-orange-100 text-orange-600 hover:bg-orange-200 transition-all duration-200 sm:text-base">{{ msg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg", "attendant"],
};
</script>