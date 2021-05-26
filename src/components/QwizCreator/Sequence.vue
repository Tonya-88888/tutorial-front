<template>
  <div class="sequence">
    <div class="grid-item sequence-header">
      <p>Последовательность</p>
    </div>

    <div class="grid-item answer" ref="tasksListElement">
      <div class="header-span">
        <span>№</span><span>элемент последовательности</span>
      </div>
      <hr />
      <div
        class="answer-item"
        v-for="(answer, index) in items"
        :key="answer.id"
      >
        <div class="answer-radio">
          <span>{{ index + 1 + "." }}</span>
        </div>

        <div class="answer-div" ref="taskElements">
          <textarea
            draggable="true"
            @dragstart="onDragStart($event, answer)"
            @drop="onDrop($event, answer)"
            @dragover="onOver($event)"
            @dragleave="onDragEnd($event)"
            @dragend="onDragEnd($event)"
            class="question-input elem"
            placeholder="элемент последовательности"
            :value="answer.answerText"
          ></textarea>
        </div>
        <div>
          <button class="delete-answer" @click="deleteAnswer(answer.index)">X</button>
        </div>
      </div>
      <button class="add-sequence-button" @click="addElSequence">
        Добавить следующий элемент
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sequence",

  props: {},
  data() {
    return {
      items: [
        { answerText: "1", index: 1, id: 1 },
        { answerText: "2", index: 2, id: 2 },
        { answerText: "3", index: 3, id: 3 },
      ],
      currAnswer: {},
      trueAnswer: "",
    };
  },
  methods: {
    addElSequence() {
      this.items.push({ answerText: "000", index: this.items.length+1, id: this.items.length+1 });
    },
    deleteAnswer(index) {
      if (this.items.length !== 1) {
        this.items.splice(index-1, 1);
        for (let i = 0; i < this.items.length; i++) {
         // this.items.id = i + 1;
          this.items.index = i + 1;
        }
      }
    },
    onDragStart(e, item) {
      console.log("onStarn ", item);
      this.currAnswer = item;
    },
    onDrop(e, item) {
      e.preventDefault();
      console.log("drop", item);

      let tmp = this.items.map((i) => {
        if (i.index === item.index) {
       // if (i.id === item.id) {
          return { ...i, index: this.currAnswer.index };
        }

        if (i.index === this.currAnswer.index) {
       // if (i.id === this.currAnswer.id) {
          return { ...i, index: item.index };
        }

        return i;
      });

      this.items = tmp.sort(this.sortAnswer);

      e.target.style.background = "white";
    },
    onOver(e) {
      e.preventDefault();
      e.target.style.background = "rgb(197, 197, 197)";
    },
    onDragEnd(e) {
      e.target.style.background = "white";
    },
    sortAnswer(a, b) {
      if (a.index > b.index) {
        return 1;
      } else {
        return -1;
      }
    },
  },
};
</script>

<style>
.sequence {
  display: grid;
  grid-auto-flow: row;
  margin: 10px 15px;
  background-color: rgb(255, 255, 255);
}
.elem {
  border: none;
  cursor: move;
}
.header-span {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  color: rgb(197, 197, 197);
  font-weight: 250;
}
.header-span span {
  margin-right: 10px;
  margin-left: 10px;
}
hr {
  margin: 0;
}
.sequence-header {
  margin-top: 15px;
}
.add-sequence-button {
  padding: 5px;
  margin-right: 100px;
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
}
</style>
