<template>
  <div ref="editor" class="editor">
    <div class="editor-tools"></div>
    <div
      ref="editorContent"
      contenteditable="true"
      class="editor-content"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.editor {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 30px;
  text-align: left;
  border: 1px solid #acacac;
  border-radius: 3px;
  box-sizing: border-box;
}
.editor-tools {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  padding: 3px 5px;
}
.editor-content {
  width: 100%;
  min-width: 600px;
  height: 100%;
  min-height: 220px;
  padding: 3px 5px;
  outline: none;
}
</style>
