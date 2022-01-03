<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <!-- 标题栏 -->
    <div class="bg-gray-200 p-2 flex content-start sticky top-0 md:bg-white md:flex-col transition-colors duration-500">
      <button @click="toPanel" class="m-3 h-8 w-8 hover:bg-gray-50 rounded-lg transition-all duration-100 focus:ring focus:ring-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </button>
      <div class="flex flex-auto flex-wrap items-center py-0.5 md:px-2 md:mb-4">
        <h1 class="page-title cursor-pointer" @click="setProject">{{ card.title }}</h1>
        <ul class="flex flex-wrap items-center">
          <!-- 这里是avatar-div类 -->
          <li class="avatar-div" v-for="mate in card.mates">{{ mate.substring(0, 1) }}</li>
        </ul>
      </div>
    </div>

    <!-- 主要页面 布局 -->
    <div class="flex-auto overflow-y-auto md:grid md:grid-cols-2 md:grid-flow-col-dense md:p-4 lg:grid-cols-5">
      <!-- 聊天区,px3视觉对齐并相比px4增加横向空间 -->
      <div class="px-3 py-2 flex flex-col md:col-start-2 md:col-span-1 lg:col-start-4 lg:col-span-2">
        <!-- 标题 -->
        <div class="flex items-center">
          <span class="card-title">留言</span>
        </div>

        <!-- 留言卡片 -->
        <div class="h-70h mt-2 md:flex-auto md:sticky md:top-0 bg-orange-50 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col flex-nowrap">
          <!-- 留言滚动条 -->
          <div id="chat-board" class="md:flex-auto xl:view60 overflow-y-auto flex-auto flex flex-col">
            <message msg="this is message" attendant="Ann"></message>
            <message msg="this is message" attendant="Beth"></message>

            <my-message msg="this is mymessage haha this is mymessage haha this is mymessage haha this is mymessage haha this is mymessage haha this is mymessage and this is what it look like when it wrap automatically."></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
            <my-message msg="this is mymessage"></my-message>
          </div>
          <!-- 发送控件 -->
          <div class="p-4 flex bg-orange-200 rounded-b-lg">
            <input type="text" class="rounded-full h-8 p-2 text-xs sm:h-10 sm:p-4 sm:text-sm flex-auto border-0 outline-none focus:ring focus:ring-orange-300" />
            <button @click="chatBoardBottom" class="ml-2 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-red-100 hover:bg-red-200 active:bg-red-300 transition-all duration-200 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-warmgray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- TODO区 -->
      <div class="px-3 py-2 md:col-start-1 md:col-span-1 lg:col-start-1 lg:col-span-3">
        <div class="flex items-center">
          <span class="card-title">Todo</span>
          <!-- 剩余项目数量 -->
          <span id="count" class="mx-2 px-2 md:py-0.5 md:px-2.5 bg-indigo-100 text-sm text-indigo-400 rounded-md hover:bg-indigo-200 transition-all duration-100">🤔</span>
        </div>

        <!-- todo背景卡片 -->
        <div id="card-platte" class="mt-2 rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <!-- 添加按钮 -->
          <todo-add></todo-add>

          <!-- 项目卡片堆 -->
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
          <todo-card></todo-card>
        </div>
        <!-- todo区域背景卡片结束 -->
      </div>
      <!-- 内容div -->
    </div>

    <!-- 遮罩层 (opacity-40) -->
    <div id="mask" class="invisible w-screen h-screen absolute top-0 left-0 bg-black opacity-40"></div>

    <!-- 功能面板区 -->
    <div id="setting-panel" class="left-screen absolute top-0 left-0 grid grid-cols-6 h-screen w-screen">
      <!-- 任务面板 -->
      <div style="display: none" class="p-4 bg-white col-span-6 md:col-start-3 md:col-span-4 lg:col-start-4 lg:col-span-3 xl:col-start-5 xl:col-span-2">
        <!-- 项目卡片 -->
        <div class="py-2 flex flex-wrap items-center">
          <!-- 标题 -->
          <span class="text-lg font-semibold flex-auto uppercase text-bluegray-700">title</span>
        </div>

        <!-- 进度条 -->
        <div class="pt-1">
          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div style="width: 30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
          </div>
        </div>
        <span class="py-2 block text-sm md:text-base text-bluegray-600">Lorem Ipsum，也称乱数假文或者哑元文本</span>

        <!-- 参与者 头像 -->
        <div class="flex justify-end">
          <ul class="flex items-center flex-auto">
            <!-- todo: 当任务数据库完成设置后写这里。这里是该任务的参与者 -->
            <li class="avatar-div-r">testing...</li>
          </ul>
        </div>

        <!-- todo选项 -->
        <div class="p-2 my-2 border-2 border-bluegray-300 rounded-xl">
          <form action="">
            <!-- todo 项目 -->
            <div class="p-2">
              <label class="flex items-center">
                <!-- checkbox div -->
                <div class="flex flex-auto">
                  <label class="flex items-center flex-grow">
                    <input type="checkbox" class="rounded-sm form-checkbox focus:outline-none ring ring-blue-200 focus:border-0 focus:ring-blue-300 transition-all" />
                    <input type="textblock" class="ml-3 flex-auto p-1 bg-bluegray-100 rounded-md text-bluegray-800" />
                  </label>
                </div>
              </label>
            </div>
          </form>
        </div>

        <!-- 参与者 选择label -->
        <div class="mt-2">
          <p class="text-gray-700">参与者</p>
          <div class="flex flex-wrap py-1">
            <!-- 参与者复选框 -->
            <label class="m-1 p-3 flex items-center border-2 border-bluegray-200 rounded-xl" v-for="mate in card.mates">
              <input type="checkbox" class="rounded-sm form-checkbox focus:outline-none ring ring-blue-200 focus:border-0 focus:ring-blue-300 transition-all" />
              <span class="ml-3">{{ mate.substring(0, 1) }}</span>
            </label>
          </div>
        </div>

        <!-- 按钮 -->
        <div class="flex flex-row-reverse">
          <!-- 确认按钮 -->
          <button class="p-2 rounded-lg bg-blue-100 text-blue-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <p class="ml-1">确认</p>
          </button>
          <!-- 添加按钮 -->
          <button class="mr-2 p-2 rounded-lg bg-blue-100 text-blue-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <p class="ml-1">添加</p>
          </button>
          <!-- 删除项目按钮 -->
          <button class="mr-2 p-2 rounded-lg bg-red-100 text-red-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <p class="ml-1">删除项目</p>
          </button>
        </div>
      </div>

      <!-- 设置面板 -->
      <div class="p-4 bg-white col-span-6 md:col-start-3 md:col-span-4 lg:col-start-4 lg:col-span-3 xl:col-start-5 xl:col-span-2">
        <h1 class="text-2xl text-bluegray-800 mt-2 mb-6">设置</h1>
        <form>
          <!-- 标题 -->
          <label class="block">
            <span class="block text-gray-700">标题</span>
            <input type="text" class="mt-1 p-2 block uppercase w-full rounded-md outline-none border-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="" />
          </label>
          <!-- 描述 -->
          <label class="mt-2 block">
            <span class="block text-gray-700">描述</span>
            <input type="text" class="mt-1 p-2 block w-full rounded-md outline-none border-2 border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="" />
          </label>
        </form>

        <!-- 按钮 -->
        <div class="flex flex-row-reverse mt-2">
          <!-- 完成按钮 -->
          <button @click="saveSettings" class="px-4 py-2 rounded-lg bg-blue-100 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../css/style.css"></style>

<script>
import Message from "../components/project/Message.vue";
import MyMessage from "../components/project/MyMessage.vue";
import TodoAdd from "../components/project/TodoAdd.vue";
import TodoCard from "../components/project/TodoCard.vue";
export default {
  components: {
    Message,
    MyMessage,
    TodoAdd,
    TodoCard,
  },
  data() {
    return {
      groupName: this.$route.query.group,
      code: this.$route.query.code,
      project: {
        mates: ["A", "王", "刘旭", "A", "王", "母股", "A", "王", "曾瀚辉"],
      },
      user: this.$route.params.user,
      card: JSON.parse(this.$route.params.card),
    };
  },
  methods: {
    toPanel() {
      this.$router.push({
        name: "Panel",
        query: {
          group: this.groupName,
          code: this.code,
        },
      });
    },
    chatBoardBottom() {
      let scrollView = $("#chat-board")[0];
      scrollView.scrollTop = scrollView.scrollHeight;
    },
    setProject() {
      // todo 新建的，没测试
      $("#setting-panel").removeClass("left-screen");
      $("#mask").removeClass("invisible");
    },
    saveSettings() {
      $("#setting-panel").addClass("left-screen");
      $("#mask").addClass("invisible");
    },
  },
  mounted() {
    console.log(this.card);
    $("#count").html($("#card-platte").children().length - 1);
  },
};
</script>
