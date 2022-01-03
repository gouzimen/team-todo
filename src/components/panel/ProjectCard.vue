<template>
  <!-- 项目卡片 -->
  <div class="my-2 p-4 bg-gray-100 rounded-2xl transition-shadow">
    <!-- 顶部控件 -->
    <div class="flex">
      <!-- 进度条 -->
      <div class="pt-1 w-1/3">
        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
          <div :style="{ width: card.progress + '%' }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
        </div>
      </div>
      <div class="flex flex-auto"></div>
      <!-- 按钮 -->
      <div @click="toProject" class="flex flex-wrap items-center content-center">
        <button class="p-1 bg-gray-400 hover:bg-gray-500 text-gray-100 rounded-full transition flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>

    <!-- 项目内容 -->
    <div>
      <h2 class="font-bold text-bluegray-600">{{ card.title }}</h2>
      <p class="my-1 text-md text-bluegray-500">{{ card.desc }}</p>
    </div>

    <!-- 项目属性 -->
    <div class="flex items-end">
      <!-- 参与者 -->
      <ul class="flex items-center flex-auto flex-wrap">
        <li class="card-avatar" v-for="mate in card.mates" :key="mate.id">{{ mate.substring(0, 1) }}</li>
      </ul>
      <!-- 最后更改时间 -->
      <p class="flex flex-row-reverse text-bluegray-500">{{ card.lastchange }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["card"],
  data() {
    return {
      projectID: this.card.projectID,
      groupName: this.$route.query.group,
      code: this.$route.query.code,
    };
  },
  methods: {
    toProject() {
      console.log("turn to projectID: " + this.projectID);
      this.$router.push({
        name: "SelectUser",
        query: {
          group: this.groupName,
          code: this.code,
        },
        params: {
          card: JSON.stringify(this.card),
        },
      });
    },
  },
};
</script>

<style></style>
