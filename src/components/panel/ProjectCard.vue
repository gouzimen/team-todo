<template>
    <!-- 项目卡片 -->
    <div class="m-2 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
    <h2 class="text-lg font-bold text-bluegray-600">{{card.title}}</h2>
    <p class="my-1 text-md text-bluegray-500">{{card.desc}}</p>

    <!-- 项目属性 -->
    <div class="my-2">
        <!-- 进度条 -->
        <div class="pt-1">
        <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div :style="{width:card.progress+'%'}"
            class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">
            </div>
        </div>
        </div>

        <!-- 最后更改时间 -->
        <p class="mt-1 flex-auto text-bluegray-500">最后更改：{{card.lastchange}}</p>

        <!-- 参与者 -->
        <ul class="flex items-center flex-auto flex-wrap">
        <!-- 注意这里是avatar-div-r类 -->
        <li class="avatar-div-r" v-for="mate in card.mates" :key="mate.id">{{mate.substring(0,1)}}</li>
        </ul>
    </div>

    <!-- 按钮 -->
    <div class="mt-4 flex flex-wrap items-center content-center">
        <button @click="toProject"
        class="p-2 bg-blue-100 hover:bg-blue-200 text-blue-700 active:bg-blue-300 rounded-xl transition flex items-center focus:ring focus:ring-indigo-200 ring-offset-2">
        <span class="mx-1">进入</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mx-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
    </div>
    </div>
</template>

<script>
export default {
    props:['card'],
    data() {
        return {
            projectID: this.card.projectID,
            groupName: this.$route.query.group,
            code: this.$route.query.code,
        }
    },
    methods:{
        toProject(){
            console.log('turn to projectID: '+ this.projectID)
            this.$router.push({
                name: 'SelectUser',
                query:{
                    group: this.groupName,
                    code: this.code,
                },
                params: {
                    card: JSON.stringify(this.card)
                }
            });
        },
    },
}
</script>

<style>

</style>