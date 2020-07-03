<template>
  <Layout>
    <AddTask :addTask="addTask" />
    <div class="p-4">
      <ListItem
        v-for="(task, key) in tasks"
        :key="key"
        :name="task"
      />
    </div>
  </Layout>
</template>

<script>
import AddTask from "../components/ToDo/AddTask.vue";
import ListItem from "../components/ToDo/ListItem.vue";

export default {
  metaInfo: {
    title: 'To do'
  },
  data: function () {
    return {
      tasks: []
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    }
  },
  components: {
    AddTask,
    ListItem
  }
}
</script>
