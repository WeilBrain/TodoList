<template>
  <button class="v-btn" :class="className">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "v-btn",
  props: {
    title: {
      type: String,
      default: "",
    },
    delete: {
      type: Boolean,
      default: false,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    return: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    className() {
      return {
        "btn__delete": this.delete,
        "btn__complete": this.complete,
        "btn__return": this.return,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  &.btn__delete,
  &.btn__complete {
    position: relative;
    color: #fff;
    border: none;
    padding: 17px;
    background-repeat: no-repeat;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  
  &.btn__return {
    position: relative;
    color: #fff;
    border: none;
    padding: 17px;
    background-repeat: no-repeat;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  &.btn__delete {
    background-color: #ff3347;
  }

  &.btn__complete {
    background-color: #5c61ed;
  }

  &.btn__return {
    background-color: rgb(109, 237, 92);
  }

  &.btn__delete::before {
    position: absolute;
    content: url(../../assets/trash-outline.svg);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.btn__complete::before {
    position: absolute;
    content: url(../../assets/check-outline.svg);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.btn__return::before {
    position: absolute;
    content: url(../../assets/return.svg);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
