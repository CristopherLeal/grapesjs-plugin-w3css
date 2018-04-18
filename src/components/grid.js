// isComponent serve para atrelar um elemento a um componente
//fazendo o caminho inverso.
//el é um HTTPElement, nem sempre eh definido, por isso
//testar se é undefined.

export default (editor, config = {}) => {

  const domc = editor.DomComponents;

  const defaultType  = domc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView  = defaultType.view;

  domc.addType('row', {

    model: defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
          tagName: 'div',
          draggable: true,
          droppable: true,
        }),
      },
      {
      isComponent: function(el) {
        if(el.classList !== undefined && el.classList.contains('w3-row')){
          return {type: 'row'};
        }
      },
    }),
    view: defaultView
  });


  domc.addType('column', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        tagName: 'div',
        draggable: true,
        droppable: true,
      }),
    },
   {
      isComponent: function(el) {
        if( el.classList !== undefined &&
            (
              el.classList.contains('w3-half')    ||
              el.classList.contains('w3-third')   ||
              el.classList.contains('w3-quarter') ||
              el.classList.contains('w3-twothird')    ||
              el.classList.contains('w3-threequarter')   ||
              el.classList.contains('w3-rest')
            )
        )
        {
          return {type: 'column'};
        }
      },
    }),
    // Define the View
    view: defaultView
  });


}
