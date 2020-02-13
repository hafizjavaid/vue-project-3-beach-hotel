<template>
  <section class="main-blog">
    <form action class="form">
      <div class="form-group">
        <label for>Title</label>
        <input type="text" class="input" />
      </div>
      <ckeditor :config="editorConfig"></ckeditor>
      <button type="submit" class="btnn">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      editorConfig: {
        toolbarGroups: [
          {
            name: "basicstyles",
            groups: ["basicstyles"]
          },
          {
            name: "links",
            groups: ["links"]
          },
          {
            name: "paragraph",
            groups: ["list", "blocks"]
          },
          {
            name: "document",
            groups: ["mode"]
          },
          {
            name: "insert",
            groups: ["insert"]
          },
          {
            name: "styles",
            groups: ["styles"]
          },
          {
            name: "about",
            groups: ["about"]
          }
        ],
        // Remove the redundant buttons from toolbar groups defined above.
        removeButtons:
          "Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar"
      }
    };
  }
};
</script>

<style scoped>
/*  rooms fitler*/
.main-blog {
  width: 90vw;
  margin: 10rem auto;
}
.form-group {
  text-transform: capitalize;
}
.form-group label {
  display: block;

  margin-bottom: 1rem;
  font-size: 20px;
  font-weight: bold;
}
.input {
  width: 100%;
  background: transparent;
  font-size: 1rem;
  border: none;
  outline: none;
  margin-bottom: 2rem;
  height: 30px;
  border-bottom: 2px solid blue;
  border-top: 2px solid blue;
  padding: 1.5rem;
}
.btnn {
  margin-top: 1.5rem;
  background: blue;
  width: 200px;
  height: 50px;
  /* padding: 1.5rem; */
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}
</style>