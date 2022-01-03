<template>
  <!-- 项目卡片 -->
  <div class="m-2 p-4 bg-gray-100 rounded-2xl transition-shadow duration-300">
    <div class="py-2 flex flex-wrap items-center">
      <!-- 标题 -->
      <span class="text-lg font-semibold flex-auto uppercase text-bluegray-600">title</span>
    </div>

    <!-- 进度条 -->
    <div class="pt-1">
      <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
        <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
      </div>
    </div>
    <span class="py-1 block text-sm md:text-base text-bluegray-500">Lorem Ipsum，也称乱数假文或者哑元文本</span>

    <!-- 底栏 -->
    <div class="flex justify-end">
      <!-- 参与者 -->
      <ul class="flex items-center flex-auto">
        <li class="todo-card-avatar">A</li>
        <li class="todo-card-avatar">王</li>
        <li class="todo-card-avatar">刘</li>
      </ul>

      <button class="p-2 hover:bg-bluegray-50 text-bluegray-400 active:bg-bluegray-100 rounded-xl transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      </button>
      <button class="p-2 hover:bg-bluegray-50 text-bluegray-400 active:bg-bluegray-100 rounded-xl transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>
    </div>
  </div>
  <!-- 项目卡片结束 -->
</template>

<script>
export default {};
</script>

<style></style>
