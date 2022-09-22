function onDragStart(event){
    event
    .dataTransfer
    .setData('text/plain', event.target.id)

    event.currentTarget
    .style
    .backgroundColor = 'yellow'
}

function onDragOver(event){
    event.preventDefault();
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
  }

function onDrop(event) {

    const draggableElement = document.getElementById(id);
  }

  function onDrop(event) {
  
  
    const dropzone = event.target;
  }

  function onDrop(event) {
    dropzone.appendChild(draggableElement);
  }
  
  function onDrop(event) {
    event
      .dataTransfer
      .clearData()