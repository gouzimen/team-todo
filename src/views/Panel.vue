<template>
  <div class="h-screen transition-colors">
    <!-- 标题栏 -->
    <div class="bg-gray-200 text-bluegray-800 flex content-start sticky top-0 md:bg-bluegray-200 md:flex-col transition-all">
      <button @click="logout" class="m-3 h-8 w-8 hover:bg-gray-50 rounded-lg transition-all duration-100 focus:ring focus:ring-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      </button>
      <div class="flex flex-auto flex-wrap items-center py-0.5 md:px-2 md:mb-4">
        <h1 class="page-title">项目列表</h1>
        <span class="px-3 md:px-4 py-1 mr-2 rounded-full text-sm md:text-base bg-white text-blue-500 transition-all duration-500">{{ groupName }}</span>
      </div>
    </div>

    <!-- 项目列表 -->
    <!-- <div class="p-2 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      <add-card @click="addProject"></add-card> -->
    <!-- 项目卡片 -->
    <!-- <project-card v-for="card in cards" :card="card">
      </project-card>
      
    </div> -->

    <!-- 项目列表 -->
    <div class="p-2 overflow-y-auto grid grid-cols-1 md:grid-cols-3">
      <!-- 正在进行列表 -->
      <div class="flex-col">
        <div class="card-list">
          <h2 class="font-bold text-lg">正在进行</h2>
          <div class="py-2">
            <!-- 卡片列表 -->
            <project-card v-for="card in cards.card_working" :card="card"></project-card>
          </div>
        </div>
      </div>

      <!-- 等待列表 -->
      <div class="flex-col">
        <div class="card-list">
          <h2 class="font-bold text-lg">等待开始</h2>
          <div class="py-2">
            <!-- 卡片列表 -->
            <project-card v-for="card in cards.card_tostart" :card="card"></project-card>
          </div>
        </div>
      </div>

      <!-- 已完成列表 -->
      <div class="flex-col">
        <div class="card-list">
          <h2 class="font-bold text-lg">已完成</h2>
          <div class="py-2">
            <!-- 卡片列表 -->
            <project-card v-for="card in cards.card_finished" :card="card"></project-card>
          </div>
        </div>
      </div>
    </div>
  </div>
  <add-card @click="addProject"></add-card>
</template>

<script>
import ProjectCard from "../components/panel/ProjectCard.vue";
import AddCard from "../components/panel/AddCard.vue";

export default {
  name: "Panel",
  data() {
    return {
      groupName: this.$route.query.group,
      code: this.$route.query.code,
      // card:{
      //   title:"Project Title (props)",
      //   desc:"This is the project description",
      //   progress:"20",
      //   lastchange:"18:00",
      //   mates:['A', '王', '刘旭'],
      //   projectID:"1"
      // },
      cards: {
        card_working: [],
        card_tostart: [],
        card_finished: [],
      },
    };
  },
  components: {
    AddCard,
    ProjectCard,
  },
  created() {
    // Panel组件创建完毕
    console.log("panel created");
    // 初始化日期，后面要用到
    var date = new Date();

    this.$socket.emit("queryProjList", this.groupName, this.code, (projList) => {
      // 获取卡片列表
      console.log(projList);
      // this.cards = projList;
      projList.forEach((project) => {
        this.$socket.emit("queryMates", this.groupName, this.code, project.id, (mates) => {
          // console.log(mates);
          var mateList = []; // 兼容格式
          mates.forEach((mate) => {
            mateList.push(mate.attendant_name);
          });

          project.proj_desc == "" ? (project.proj_desc = "无描述") : 0;

          // 处理时间
          var time = project.proj_updated;
          time = time.slice(0, 16).replace("T", " ");
          if (date.getFullYear == time.slice(0, 4)) {
            // 是今年
            time = time.slice(5, 16);
          } else {
            time = time.slice(2, 16);
          }
          project.proj_updated = time;

          if (project.proj_progress <= 0) {
            this.cards.card_tostart.push({
              title: project.proj_name,
              desc: project.proj_desc,
              progress: project.proj_progress,
              lastchange: project.proj_updated,
              mates: mateList,
              projectID: project.id,
            });
          } else if (project.proj_progress < 100) {
            this.cards.card_working.push({
              title: project.proj_name,
              desc: project.proj_desc,
              progress: project.proj_progress,
              lastchange: project.proj_updated,
              mates: mateList,
              projectID: project.id,
            });
          } else {
            this.cards.card_finished.push({
              title: project.proj_name,
              desc: project.proj_desc,
              progress: project.proj_progress,
              lastchange: project.proj_updated,
              mates: mateList,
              projectID: project.id,
            });
          }
        });
      });
    });
  },
  methods: {
    logout() {
      this.$router.push({ name: "MainPage" });
    },
    addProject() {
      this.$router.push({
        name: "AddProject",
        query: {
          group: this.groupName,
          code: this.code,
        },
      });
    },
  },
};
</script>
