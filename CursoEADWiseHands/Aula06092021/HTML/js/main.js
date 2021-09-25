function light(sw) {
    var pic;
    if (sw == 0) {
      pic = "img/pic_bulboff.gif"
    } else {
      pic = "img/pic_bulbon.gif"
    }
    document.getElementById('luz').src = pic;
  }