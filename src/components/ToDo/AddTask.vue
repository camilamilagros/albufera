<template>
  <form class="w-full max-w-sm" @submit.prevent="handleNewTask">
    <div class="flex items-center border-b border-b-2 border-teal-500 py-2">
      <input v-model="task" required class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="New task to do" aria-label="New to do">
      <button type="submit" class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded">
        Add
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data: function () {
    return {
      task: ""
    };
  },
  props: {
    addTask: Function
  },
  methods: {
    handleNewTask() {
      console.log('hellow');
      console.log(this.task);
      this.addTask(this.task);
      this.task = '';
    }
  }
}
</script>
