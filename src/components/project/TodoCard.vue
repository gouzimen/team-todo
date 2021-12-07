<template>
<!-- 项目卡片 -->
<div class="m-2 p-4 bg-white rounded-2xl shadow-md hover:shadow-sm transition-shadow duration-300">
<div class="py-2 flex flex-wrap items-center">
    <!-- 标题 -->
    <span class="text-lg font-semibold flex-auto uppercase text-bluegray-700">title</span>
</div>

<!-- 进度条 -->
<div class="pt-1">
    <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
    <div style="width:30%"
        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
    </div>
    </div>
</div>
<span class="py-1 block text-sm md:text-base text-bluegray-600">Lorem Ipsum，也称乱数假文或者哑元文本</span>

<!-- 底栏 -->
<div class="flex justify-end">
    <!-- 参与者 -->
    <ul class="flex items-center flex-auto">
    <li class="avatar-div-r">A</li>
    <li class="avatar-div-r">王</li>
    <li class="avatar-div-r">刘</li>
    </ul>

    <button class="p-2 hover:bg-blue-50 text-bluegray-400 active:bg-blue-100 rounded-xl transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    </button>
    <button class="p-2 hover:bg-blue-50 text-bluegray-400 active:bg-blue-100 rounded-xl transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
    </svg>
    </button>
</div>
</div>
<!-- 项目卡片结束 -->
</template>

<script>
export default {

}
</script>

<style>

</style>