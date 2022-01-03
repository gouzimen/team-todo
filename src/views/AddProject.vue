<template>
  <div class="h-screen w-screen bg-gray-100 flex justify-center items-center">
    <!-- 内容卡片 -->
    <div class="mx-4 p-10 bg-white shadow-md rounded-lg">
      <h1 class="text-2xl my-2">新建项目</h1>
      <label class="block my-2">
        <span class="text-gray-700">项目名称</span>
        <input v-model="projName" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="" />
      </label>

      <label class="block my-2">
        <span class="text-gray-700">项目描述（可选）</span>
        <input v-model="projDesc" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="" />
      </label>

      <!-- 组员控件 -->
      <label class="block my-2">
        <span class="text-gray-700">组员</span>
        <div class="flex flex-row content mt-1">
          <input id="mate-text" v-model="mateText" type="text" class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="" />
          <button @click="addMate" class="bg-blue-100 ml-2 p-2 rounded-lg text-blue-500 hover:bg-blue-200 active:bg-blue-300 active:text-blue-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </label>
      <div>
        <!-- 组员列表 -->
        <ul class="mt-1 flex flex-wrap">
          <!-- 组员标签按钮 -->
          <button v-for="mate in mates" @click="delMate($event.target.innerHTML)" class="px-3 py-1 mb-2 mr-1 bg-yellow-100 text-yellow-500 rounded-full hover:bg-yellow-50 active:bg-yellow-100 transition">{{ mate }}</button>
        </ul>
      </div>
      <div class="flex flex-row-reverse">
        <button @click="saveProj" class="px-4 py-2 rounded-lg text-blue-500 hover:bg-blue-50 active:bg-blue-100 transition-all">保存</button>
        <button @click="toPanel" class="px-4 py-2 mx-2 rounded-lg text-gray-500 hover:bg-blue-50 active:bg-blue-100 transition-all">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groupName: this.$route.query.group,
      mates: [],
      mateText: "",
      projName: "",
      projDesc: "",
      code: this.$route.query.code,
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
    addMate() {
      if (this.mateText != "") {
        // 防止重复添加
        this.mates.forEach((mate) => {
          this.mateText == mate ? this.delMate(mate) : true;
        });
        this.mates.push(this.mateText);
        this.mateText = "";
      }
    },
    delMate(value) {
      this.mates = this.mates.filter(function (mate) {
        return mate != value;
      });
    },
    saveProj() {
      if (this.projName != "") {
        if (this.mates.length > 0) {
          // console.log('save');
          // 保存项目到数据库
          this.$socket.emit("addProject", this.groupName, this.code, this.projName, this.projDesc, this.mates, (success) => {
            if (success) {
              // 项目创建成功
              console.log("success");
              this.toPanel();
            } else {
              // 项目创建失败
              console.log("failed");
            }
          });
        } else {
          alert("至少要有一个组员😂");
        }
      } else {
        alert("项目名称不能为空👀");
      }
    },
  },
};
</script>
