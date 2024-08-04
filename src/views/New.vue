<template>.</template>

<!--<template>

  <div>
    <div v-for="item in sortedItems" :key="item.id">
      {{ item.name }}
    </div>
  </div>
</template>


export default {
  data() {
    return {
      items: [
        { id: 1, name: "John" },
        { id: 2, name: "Mary" },
        { id: 3, name: "Alice" }, 
        { id: 4, name: "Ingrid" }, 
        { id: 5, name: "Felix" }, 
        { id: 6, name: "David" }, // Example item without an order
        // Add more items as needed
      ],
      order: [
        { id: 1, order: 1 },
        { id: 2, order: 2 },
        { id: 6, order: 0 }
        // Add more order objects as needed
      ]
    };
  },
  computed: {
    sortedItems() {
      // Create a map of id to order
      const orderMap = this.order.reduce((map, obj) => {
        map[obj.id] = obj.order;
        return map;
      }, {});

      // Sort the items array based on the order specified in the order array
      return this.items.slice().sort((a, b) => {
        // Assign a default order value (e.g., a very large number) if the item is not in the order array
        const orderA = orderMap[a.id] !== undefined ? orderMap[a.id] : Number.MIN_SAFE_INTEGER;
        const orderB = orderMap[b.id] !== undefined ? orderMap[b.id] : Number.MIN_SAFE_INTEGER;
        return orderB - orderA; // Change the comparison to sort in descending order
      });
    }
  }
};*/

<!--<template>
  <draggable v-model="myArray" group="people" @start="drag = true" @end="drag = false" item-key="id">
    <template #item="{ element }">
      <div>{{ element.name }}</div>
    </template>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable/src/vuedraggable'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      myArray: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Mike Doe' },
      ],
      drag: false,
    }
  },
}
</script>

<style>
.video-item {
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  cursor: move;
}
</style>-->