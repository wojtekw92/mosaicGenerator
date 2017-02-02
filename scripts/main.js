require(['./node_modules/fabric/dist/fabric.require.js'], function(fabric) {
  var canvas = new fabric.Canvas('elo');
  var button = document.getElementById("add-new");
  button.addEventListener("click", function(event) {
    var rect = new fabric.Rect({ width: 50, height: 50, fill: '#77f', top: 100, left: 100 });
    rect.lockRotation = true;
    rect.on('modified', function(e) {
      var cells = document.getElementById('thumbnail1').querySelectorAll('td');
      cells[2].innerHTML = this.cacheWidth;
      cells[3].innerHTML = this.cacheHeight;
      cells[4].innerHTML = ~~this.top;
      cells[5].innerHTML = ~~this.left;
      console.log(this);
    });
    canvas.add(rect);
  });

});
