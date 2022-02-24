<template>
  <!-- 媒体 -->
  <div class="grid grid-cols-3">
    <img class="h-screen col-span-full md:col-span-2 md:pr-6 object-cover object-center" src="../assets/background.webp" alt="" />
  </div>

  <!-- 遮罩层 -->
  <div class="absolute top-0 grid grid-cols-3 w-screen h-screen">
    <div class="bg-indigo-100 bg-opacity-80 col-span-full md:col-span-2 md:mr-6"></div>
  </div>

  <!-- 文字 -->
  <div class="absolute top-0 p-8 h-screen w-screen grid grid-rows-2 grid-cols-3 items-center">
    <div class="px-2 col-span-full grid-flow-row-dense self-end md:self-center md:row-span-full md:col-start-1 md:col-span-2">
      <h1 class="text-4xl xl:text-5xl xl:leading-tight font-semibold my-2 mr-6 leading-tight text-bluegray-800">
        <span class="motion-title-span"><i>欢迎</i></span
        ><span class="motion-title-span"><i>使用</i></span>
        <br />
        <span class="motion-title-span"><i>Team</i></span>
        <span class="motion-title-span"><i>ToDo</i></span>
      </h1>
      <p class="mb-4 mr-6 xl:mt-6 text-lg xl:text-2xl font-semibold text-bluegray-600 t-d-fade-in">建立你的小组，用共享的ToDo List帮助你更快更好地完成任务。</p>
    </div>

    <div class="mt-2 self-start col-span-full grid-flow-row-dense md:self-center md:row-span-full md:col-start-3 md:col-span-11 t-d-fade-in">
      <p class="px-2 text-lg md:font-semibold xl:text-2xl text-bluegray-800">输入团队口令，进入你的合作项目。</p>
      <form class="px-2 my-1 xl:mt-2 h-12 xl:h-16 mr-6 flex md:mr-0 overflow-x-hidden">
        <!-- 用户名 -->
        <input id="userNameText" type="text" placeholder="团队口令" v-model="groupName" :class="{ 'usr-text-hidden': UsrTextHidden }" class="h-10 xl:h-12 my-1 ml-0 px-3 py-3 flex-shrink-0 mr-16 placeholder-gray-400 text-gray-600 relative bg-white rounded-lg xl:rounded-2xl text-sm xl:text-lg border border-gray-400 outline-none focus:outline-none focus:ring focus:ring-indigo-300 transition-all w-full" />
        <!-- 密码框隐藏在外面 -->
        <input id="passwdText" type="password" placeholder="密码" v-model="passwd" :class="{ 'pwd-text-hidden': PwdTextHidden }" class="h-10 xl:h-12 my-1 ml-0 px-3 py-3 flex-shrink-0 mr-16 placeholder-gray-400 text-gray-600 bg-white rounded-lg xl:rounded-2xl text-sm xl:text-lg border border-gray-400 outline-none focus:outline-none focus:ring focus:ring-indigo-300 transition-all w-full" />
      </form>
      <button @click="NextStep" class="ml-2 h-10 w-10 xl:h-12 xl:w-12 bg-indigo-400 text-white rounded-xl xl:rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active-ani-right" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" class="p-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </div>
  </div>
</template>

<style src="../css/login.css"></style>

<script>
import CryptoJS from "../js/encrypt";

export default {
  data() {
    return {
      PwdTextHidden: true,
      UsrTextHidden: false,
      groupName: "",
      passwd: "",
      passwd_send: "",
      isNewGroup: false,
      code: "",
    };
  },
  methods: {
    NextStep() {
      // 准备工作
      $("#passwdText").removeClass("shake-ani");

      if (this.groupName != "" && this.UsrTextHidden != true) {
        this.UsrTextHidden = true;
        this.PwdTextHidden = false;
        this.$socket.emit("queryGroup", this.groupName, (success) => {
          this.isNewGroup = success;
          console.log("isNew group:" + success);
          // 如果是新组
          if (success) {
            $("#passwdText").attr("placeholder", "设置本组的密码");
          }
        });
      }
      if (this.passwd != "") {
        // 加密密码
        this.passwd_send = CryptoJS.SHA256(this.passwd).toString();

        if (this.isNewGroup == false) {
          // 登录
          this.$socket.emit("landOn", this.groupName, this.passwd_send, (code) => {
            if (code.length == 0) {
              // 登录失败
              this.passwd = "";
              $("#passwdText").addClass("shake-ani");
              // console.log('failed');
            } else {
              // 登录成功
              this.code = code;
              this.toPanel();
            }
          });
        } else {
          // 注册
          this.$socket.emit("enRoll", this.groupName, this.passwd_send, (code) => {
            if (code.length > 0) {
              console.log("signup verified");
              this.code = code;
              this.toPanel();
            } else {
              alert("注册失败，请刷新页面重试。");
            }
            this.passwd = "";
          });
        }
      }
    },
    toPanel() {
      this.$router.push({
        name: "Panel",
        query: {
          group: this.groupName,
          code: this.code,
        },
      });
      // 处理passwd
      this.passwd = "";
    },
  },
};
</script>
