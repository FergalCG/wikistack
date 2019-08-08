const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html `
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <label for="name">Name</label>
    <input type="text" name="name"/>

    <label for="email">Email</label>
    <input type="text" name="email"/>

    <label for="title">Title</label>
    <input type="text" name="title"/>

    <!-- <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div> -->

    <label for="content">Content</label>
    <textarea type="text" name="content"></textarea>

    <label for="status">Status</label></br></br>
    <select name="status">
      <option value="open">Open</option>
      <option value="closed">Closed</option>
    </select>


    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);