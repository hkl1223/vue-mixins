const log = {
  data() {
    return {
      name: undefined,
      time: undefined
    };
  },
  created() {
    if (!this.name) {
      throw new Error("need name");
    }
    this.time = new Date();
    console.log(`${this.name}出生了`);
  },
  beforeDestroy() {
    const now = new Date();
    console.log(`${this.name}死亡了，共生存${now - this.time}`);
  }
};

export default log;
