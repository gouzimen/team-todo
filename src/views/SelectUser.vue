<template>
  <div class="grid grid-rows-4 grid-cols-2 md:items-center p-8 h-screen">
    <div class="col-start-1 col-span-2 self-end md:col-span-1 md:row-span-full md:self-center md:justify-self-center p-2">
      <h1 class="text-4xl font-medium leading-snug">选择<br />进入“xxx”项目<br class="md:hidden" />的身份</h1>
    </div>

    <div class="mt-8 md:mt-0 row-span-3 col-span-2 md:row-span-full md:col-start-2">
      <!-- <select v-model="user" class="block w-full md:w-4/5 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option v-for="mate in card.mates">{{mate}}</option>
            </select> -->

      <div>
        <form action="" class="flex overflow-x-auto lg:flex-wrap">
          <div class="relative" v-for="mate in card.mates">
            <input type="radio" name="user" class="absolute right-2 bottom-6" /><label for="user1" class="cursor-pointer mr-2 flex flex-col items-center"
              ><img src="" alt="1" class="w-16" />
              <p class="">{{ mate }}</p></label
            >
          </div>
        </form>
      </div>

      <div class="mt-8 md:mt-4 flex">
        <button @click="toProject" class="mr-8 text-blue-400 active:text-blue-200 text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-gray-500 md:hidden">进入</span>
        </button>
        <button @click="toPanel" class="active:text-bluegray-300 text-bluegray-400 text-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span class="text-gray-500 md:hidden">退出</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      card: JSON.parse(this.$route.params.card),
      groupName: this.$route.query.group,
      code: this.$route.query.code,
      user: "",
    };
  },
  methods: {
    toProject() {
      this.user = $('input[name="user"]:checked+label p').html();
      console.log("user:" + this.user);
      if (this.user == "" || this.user == undefined) {
        alert("请选择您的身份");
      } else {
        console.log("turn to projectID: " + this.projectID);
        this.$router.push({
          name: "Project",
          query: {
            group: this.groupName,
            code: this.code,
          },
          params: {
            user: this.user,
            card: JSON.stringify(this.card),
          },
        });
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
    },
  },
  mounted() {
    // console.log(this.card.mates);
    var amount = $("form").children().length;
    console.log("form child:" + amount);
    var i, j;
    for (i = 0; i < amount; i++) {
      j = i;
      j++;
      let path = "../src/assets/avatar/user" + j + ".svg";
      console.log("img path:" + path);
      $(".relative:nth-child(" + j + ") img").attr("src", path);
    }
  },
};
</script>

<style></style>
